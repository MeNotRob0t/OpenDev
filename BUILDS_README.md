# OpenDev Builds

Pre-built binaries for [OpenDev](https://github.com/MeNotRob0t/OpenDev) - a modified version of opencode.

## Available Binaries

| Platform | Architecture | Variant | File |
|----------|-------------|---------|------|
| Linux | x64 | glibc | `OpenDev_Build_Linux_x64.tar.gz` |
| Linux | arm64 | glibc | `OpenDev_Build_Linux_arm64.tar.gz` |
| Linux | x64 | musl | `OpenDev_Build_Linux_x64_musl.tar.gz` |
| Linux | arm64 | musl | `OpenDev_Build_Linux_arm64_musl.tar.gz` |
| macOS | x64 | - | `OpenDev_Build_macOS_x64.tar.gz` |
| macOS | arm64 | - | `OpenDev_Build_macOS_arm64.tar.gz` |
| Windows | x64 | - | `OpenDev_Build_Windows_x64.zip` |
| Windows | arm64 | - | `OpenDev_Build_Windows_arm64.zip` |

## Installation

### Linux/macOS (curl + tar)

```bash
# Linux x64 (glibc)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Linux_x64.tar.gz | tar -xz -C /usr/local/bin

# Linux arm64 (glibc)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Linux_arm64.tar.gz | tar -xz -C /usr/local/bin

# Linux x64 (musl - for Alpine)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Linux_x64_musl.tar.gz | tar -xz -C /usr/local/bin

# macOS x64 (Intel)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_macOS_x64.tar.gz | tar -xz -C /usr/local/bin

# macOS arm64 (Apple Silicon)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_macOS_arm64.tar.gz | tar -xz -C /usr/local/bin
```

### Windows (PowerShell)

```powershell
# Windows x64
Invoke-WebRequest -Uri "https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Windows_x64.zip" -OutFile "OpenDev.zip"
Expand-Archive -Path "OpenDev.zip" -DestinationPath "OpenDev"
# Add the OpenDev folder to your PATH

# Windows arm64
Invoke-WebRequest -Uri "https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Windows_arm64.zip" -OutFile "OpenDev.zip"
Expand-Archive -Path "OpenDev.zip" -DestinationPath "OpenDev"
# Add the OpenDev folder to your PATH
```

### Manual Download

1. Go to the [Releases page](https://github.com/MeNotRob0t/OpenDev_Builds/releases)
2. Download the appropriate file for your platform
3. Extract and add the binary to your PATH

## Usage

After installation, you can run:

```bash
opendev --help
opendev run "your prompt"
opendev tui
```

## Building from Source

### Prerequisites

- [Bun](https://bun.sh) v1.1+
- Git

### Build Commands

```bash
# Clone the repository
git clone https://github.com/MeNotRob0t/OpenDev.git
cd OpenDev

# Install dependencies
bun install

# Build for current platform
cd packages/opendev
bun run build

# Build for specific platform (cross-compile)
bun run script/build.ts --single --os=linux --cpu=x64
bun run script/build.ts --single --os=darwin --cpu=arm64
bun run script/build.ts --single --os=win32 --cpu=x64

# Build all platforms (requires Linux host with cross-compilation setup)
bun run script/build.ts
```

### Build Output

Build artifacts are placed in `packages/opendev/dist/`:
- `opendev-linux-x64/bin/opendev` - Linux x64 binary
- `opendev-darwin-arm64/bin/opendev` - macOS ARM64 binary
- `opendev-windows-x64/bin/opendev.exe` - Windows x64 binary
- etc.

## Automated Builds

Builds are automatically created via GitHub Actions on:
- Push to `dev` or `main` branches
- Manual workflow dispatch with version override

The workflow:
1. Builds binaries for all supported platforms
2. Creates archives with descriptive names
3. Publishes to GitHub Releases

## Versioning

- **Dev builds**: `0.0.0-dev-YYYYMMDD-HHMMSS` (pre-release)
- **Release builds**: Semantic versioning (e.g., `1.0.0`)

## Notes

- Linux musl builds are for Alpine Linux and other musl-based distributions
- Windows binaries are `.exe` files inside the zip
- macOS binaries are not code-signed (you may need to allow in Security settings)
- All binaries are self-contained (no Bun runtime required)

## Related

- [OpenDev Source](https://github.com/MeNotRob0t/OpenDev)
- [Original opencode](https://github.com/anomalyco/opencode)