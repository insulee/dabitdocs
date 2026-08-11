# Dabitdocs auto-deploy script
# Polls content/ folder for .md file changes and runs deploy.sh
# Run: powershell -ExecutionPolicy Bypass -File auto-deploy.ps1
#
# 2026-08-11 사용 중지 (이부장 결정)
# 이 저장소는 Synology Drive 동기화 폴더 안에 있다. 동기화가 파일을 잠깐 치우는 순간을
# 이 스크립트가 "변경"으로 보고 deploy.sh(= quartz sync = git add -A + commit + push)를 돌려,
# content 92개 중 66개가 삭제된 채로 GitHub에 push되어 docs.dabitsol.com이 404가 된 사고가 있었다.
# 배포는 /deploy 스킬로 수동 실행한다. 되살리려면 아래 두 줄을 지우면 되지만,
# 그 전에 Synology 동기화 폴더 밖으로 저장소를 옮기거나 삭제 감지 가드를 먼저 붙일 것.

Add-Content -Path "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\auto-deploy-log.txt" -Value "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - 자동배포 사용 중지 상태 — 실행하지 않고 종료 (수동 /deploy 사용)" -Encoding UTF8
exit 0

$watchPath = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\content"
$deployScript = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\deploy.sh"
$logFile = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\auto-deploy-log.txt"
$pollSeconds = 30
$debounceSeconds = 60

$script:lastDeploy = [datetime]::MinValue
$script:lastSnapshot = @{}

function Write-Log($msg) {
    $entry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - $msg"
    Add-Content -Path $logFile -Value $entry -Encoding UTF8
}

function Get-FileSnapshot {
    $snapshot = @{}
    Get-ChildItem -Path $watchPath -Filter "*.md" -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
        $snapshot[$_.FullName] = $_.LastWriteTime.ToString("o")
    }
    return $snapshot
}

function Invoke-Deploy {
    $script:lastDeploy = Get-Date
    Write-Log "Deploy started"
    try {
        $result = & "C:\Program Files\Git\bin\bash.exe" $deployScript 2>&1
        $output = $result -join "`n"
        if ($output -match "Done" -or $output -match "완료") {
            Write-Log "Deploy completed"
        } else {
            Write-Log "Deploy result: $($output.Substring(0, [Math]::Min(200, $output.Length)))"
        }
    } catch {
        Write-Log "Deploy error: $_"
    }
}

# Initialize snapshot
$script:lastSnapshot = Get-FileSnapshot

Write-Log "Auto-deploy watcher started: $watchPath"

while ($true) {
    Start-Sleep -Seconds $pollSeconds

    $currentSnapshot = Get-FileSnapshot
    $changed = $false

    # Check for new or modified files
    foreach ($key in $currentSnapshot.Keys) {
        if (-not $script:lastSnapshot.ContainsKey($key) -or $script:lastSnapshot[$key] -ne $currentSnapshot[$key]) {
            $changed = $true
            $fileName = Split-Path $key -Leaf
            Write-Log "Change detected: $fileName"
            break
        }
    }

    # Check for deleted files
    if (-not $changed) {
        foreach ($key in $script:lastSnapshot.Keys) {
            if (-not $currentSnapshot.ContainsKey($key)) {
                $changed = $true
                $fileName = Split-Path $key -Leaf
                Write-Log "Deleted: $fileName"
                break
            }
        }
    }

    if ($changed) {
        $elapsed = (Get-Date) - $script:lastDeploy
        if ($elapsed.TotalSeconds -ge $debounceSeconds) {
            $script:lastSnapshot = $currentSnapshot
            Invoke-Deploy
        } else {
            # Update snapshot but wait for debounce
            $script:lastSnapshot = $currentSnapshot
        }
    }
}
