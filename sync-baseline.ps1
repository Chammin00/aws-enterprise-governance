$ErrorActionPreference = 'Stop'
$srcDir = 'G:\My Drive\Antigravity\Projects\deploy'
$files = @(
    'cosmic-background.js',
    'high-gloss-lacquer.css',
    'high-gloss-lacquer.js',
    'cosmic_cityscape.jpg',
    'mcp-baseline.js',
    'mcp-registry.json'
)

$targets = @(
    'G:\My Drive\Antigravity\Projects\aws',
    'G:\My Drive\Antigravity\Projects\aws\web-app'
)

foreach ($target in $targets) {
    if (Test-Path -LiteralPath $target) {
        foreach ($file in $files) {
            $srcFile = Join-Path $srcDir $file
            $destFile = Join-Path $target $file
            if (Test-Path -LiteralPath $srcFile) {
                Copy-Item -LiteralPath $srcFile -Destination $destFile -Force
            }
        }
        Write-Host "Synchronized $target successfully with all baseline assets."
    }
}
