# Dabitdocs auto-deploy script
# Polls content/ folder for .md file changes and runs deploy.sh
# Run: powershell -ExecutionPolicy Bypass -File auto-deploy.ps1

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
