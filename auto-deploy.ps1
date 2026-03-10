# Dabitdocs 자동 배포 스크립트
# content/ 폴더의 .md 파일 변경을 감지하여 deploy.sh 실행
# 실행: powershell -ExecutionPolicy Bypass -File auto-deploy.ps1

$watchPath = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\content"
$deployScript = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\deploy.sh"
$logFile = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\auto-deploy-log.txt"
$debounceSeconds = 60

$script:lastTrigger = [datetime]::MinValue
$script:timer = $null

function Write-Log($msg) {
    $entry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - $msg"
    Add-Content -Path $logFile -Value $entry -Encoding UTF8
    Write-Host $entry
}

function Invoke-Deploy {
    $script:lastTrigger = Get-Date
    Write-Log "배포 시작..."
    try {
        $result = & "C:\Program Files\Git\bin\bash.exe" $deployScript 2>&1
        $output = $result -join "`n"
        if ($output -match "배포 완료") {
            Write-Log "배포 완료"
        } else {
            Write-Log "배포 결과: $output"
        }
    } catch {
        Write-Log "배포 오류: $_"
    }
}

# FileSystemWatcher 설정
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $watchPath
$watcher.Filter = "*.md"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::FileName -bor
                         [System.IO.NotifyFilters]::LastWrite -bor
                         [System.IO.NotifyFilters]::Size

$action = {
    $elapsed = (Get-Date) - $script:lastTrigger
    if ($elapsed.TotalSeconds -lt $debounceSeconds) { return }

    # 타이머로 debounce: 마지막 변경 후 10초 대기
    if ($script:timer) { $script:timer.Dispose() }
    $script:timer = New-Object System.Timers.Timer
    $script:timer.Interval = 10000  # 10초
    $script:timer.AutoReset = $false
    Register-ObjectEvent -InputObject $script:timer -EventName Elapsed -Action {
        Invoke-Deploy
    } | Out-Null
    $script:timer.Start()
}

Register-ObjectEvent $watcher -EventName Changed -Action $action | Out-Null
Register-ObjectEvent $watcher -EventName Created -Action $action | Out-Null
Register-ObjectEvent $watcher -EventName Renamed -Action $action | Out-Null

Write-Log "자동 배포 감시 시작: $watchPath"
Write-Host "자동 배포 감시 중... (Ctrl+C로 종료)"

# 무한 대기
while ($true) { Start-Sleep -Seconds 60 }
