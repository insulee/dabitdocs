# Dabitdocs auto-deploy script
# Watches content/ folder for .md file changes and runs deploy.sh
# Run: powershell -ExecutionPolicy Bypass -File auto-deploy.ps1

$watchPath = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\content"
$deployScript = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\deploy.sh"
$logFile = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\auto-deploy-log.txt"
$signalFile = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\.deploy-pending"
$debounceSeconds = 30

$script:lastDeploy = [datetime]::MinValue

function Write-Log($msg) {
    $entry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - $msg"
    Add-Content -Path $logFile -Value $entry -Encoding UTF8
    Write-Host $entry
}

function Invoke-Deploy {
    $script:lastDeploy = Get-Date
    # Remove signal file before deploy
    if (Test-Path $signalFile) { Remove-Item $signalFile -Force }
    Write-Log "Deploy started"
    try {
        $result = & "C:\Program Files\Git\bin\bash.exe" $deployScript 2>&1
        $output = $result -join "`n"
        if ($output -match "Done") {
            Write-Log "Deploy completed"
        } else {
            Write-Log "Deploy result: $($output.Substring(0, [Math]::Min(200, $output.Length)))"
        }
    } catch {
        Write-Log "Deploy error: $_"
    }
}

# FileSystemWatcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $watchPath
$watcher.Filter = "*.md"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::FileName -bor
                         [System.IO.NotifyFilters]::LastWrite -bor
                         [System.IO.NotifyFilters]::Size

# Use a signal file to communicate between event handler and main loop
# (Register-ObjectEvent runs in a separate runspace, so script-scope vars don't work)
$action = {
    $sf = "D:\Note\20_Marketing_Team\22_Area\dabitdocs-quartz\.deploy-pending"
    [System.IO.File]::WriteAllText($sf, $Event.SourceEventArgs.Name)
    Write-Host "$(Get-Date -Format 'HH:mm:ss') - Change detected: $($Event.SourceEventArgs.Name)"
}

Register-ObjectEvent $watcher -EventName Changed -Action $action | Out-Null
Register-ObjectEvent $watcher -EventName Created -Action $action | Out-Null
Register-ObjectEvent $watcher -EventName Renamed -Action $action | Out-Null

Write-Log "Auto-deploy watcher started: $watchPath"
Write-Host "Watching for changes... (Ctrl+C to stop)"

# Main loop: check for pending deploys via signal file
while ($true) {
    if (Test-Path $signalFile) {
        $elapsed = (Get-Date) - $script:lastDeploy
        if ($elapsed.TotalSeconds -ge $debounceSeconds) {
            Invoke-Deploy
        }
    }
    Start-Sleep -Seconds 5
}
