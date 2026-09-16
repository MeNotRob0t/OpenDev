# OpenDev Builds

Pre-built binaries for [OpenDev](https://github.com/MeNotRob0t/OpenDev) - a modified version of opencode.

## Quick Install (Recommended)

### Linux / macOS

```bash
# Linux (Ubuntu, Debian, Fedora, RHEL, Arch, Pop!_OS, etc.)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Linux_x64.tar.gz | sudo tar -xz -C /usr/local/bin

# Linux ARM64 (AWS Graviton, Ampere, etc.)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Linux_arm64.tar.gz | sudo tar -xz -C /usr/local/bin

# macOS Intel
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_macOS_x64.tar.gz | sudo tar -xz -C /usr/local/bin

# macOS Apple Silicon (M1/M2/M3)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_macOS_arm64.tar.gz | sudo tar -xz -C /usr/local/bin
```

### Windows (PowerShell as Admin)

```powershell
# Windows x64 (most PCs)
Invoke-WebRequest -Uri "https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Windows_x64.zip" -OutFile "$env:TEMP\OpenDev.zip"
Expand-Archive -Path "$env:TEMP\OpenDev.zip" -DestinationPath "C:\Program Files\OpenDev"
# Add C:\Program Files\OpenDev to your PATH

# Windows ARM64
Invoke-WebRequest -Uri "https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Windows_arm64.zip" -OutFile "$env:TEMP\OpenDev.zip"
Expand-Archive -Path "$env:TEMP\OpenDev.zip" -DestinationPath "C:\Program Files\OpenDev"
```

### Alpine Linux

```bash
# Alpine (musl libc)
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Linux_x64_musl.tar.gz | sudo tar -xz -C /usr/local/bin

# Alpine ARM64
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Linux_arm64_musl.tar.gz | sudo tar -xz -C /usr/local/bin
```

---

## Which Build Do I Need?

### Desktop / Laptop (Intel/AMD)

| OS | CPU | Build File |
|-----|-----|------------|
| Windows | Intel/AMD x64 | `OpenDev_Build_Windows_x64.zip` |
| macOS | Intel | `OpenDev_Build_macOS_x64.tar.gz` |
| Linux | x64 (most PCs) | `OpenDev_Build_Linux_x64.tar.gz` |

### Desktop / Laptop (ARM)

| OS | Device | Build File |
|-----|--------|------------|
| Windows | Surface ARM64 | `OpenDev_Build_Windows_arm64.zip` |
| macOS | M1/M2/M3 | `OpenDev_Build_macOS_arm64.tar.gz` |
| Linux | ARM64 server | `OpenDev_Build_Linux_arm64.tar.gz` |

### Linux Mint / Pop!_OS / Ubuntu / Debian / Fedora / Arch / RHEL

All use the **same** glibc x64 build:
```bash
curl -fsSL https://github.com/MeNotRob0t/OpenDev_Builds/releases/latest/download/OpenDev_Build_Linux_x64.tar.gz | sudo tar -xz -C /usr/local/bin
```

### Alpine Linux Only

Alpine uses musl libc, not glibc:
- `OpenDev_Build_Linux_x64_musl.tar.gz`
- `OpenDev_Build_Linux_arm64_musl.tar.gz`

### Raspberry Pi

Not currently supported (ARMv7/ARM64 32-bit). For ARM64 distros like Ubuntu Server on RPi 4/5, try `OpenDev_Build_Linux_arm64.tar.gz`.

---

## Verify Installation

```bash
opendev --version
```

## Usage

```bash
opendev --help
opendev run "your prompt here"
opendev tui
```

---

## All Available Builds

| File | OS | Arch | Notes |
|------|-----|------|-------|
| `OpenDev_Build_Linux_x64.tar.gz` | Linux | x64 | **Recommended for most Linux** |
| `OpenDev_Build_Linux_arm64.tar.gz` | Linux | ARM64 | ARM servers |
| `OpenDev_Build_Linux_x64_musl.tar.gz` | Alpine | x64 | musl libc |
| `OpenDev_Build_Linux_arm64_musl.tar.gz` | Alpine | ARM64 | musl libc |
| `OpenDev_Build_macOS_x64.tar.gz` | macOS | Intel | Older Macs |
| `OpenDev_Build_macOS_arm64.tar.gz` | macOS | Apple Silicon | M1/M2/M3 |
| `OpenDev_Build_Windows_x64.zip` | Windows | x64 | **Recommended for most Windows** |
| `OpenDev_Build_Windows_arm64.zip` | Windows | ARM64 | Surface Pro X, etc. |

---

## Building from Source

### Prerequisites

- [Bun](https://bun.sh) v1.1+
- Git

### Build

```bash
# Clone
git clone https://github.com/MeNotRob0t/OpenDev.git
cd OpenDev

# Install deps
bun install

# Build (current platform only)
cd packages/opendev
bun run build --single

# Or build all platforms
bun run script/build.ts
```

### Cross-compile Examples

```bash
# Linux on Windows
bun run script/build.ts --single --os=linux --cpu=x64

# macOS ARM on Intel
bun run script/build.ts --single --os=darwin --cpu=arm64

# Alpine Linux
bun run script/build.ts --single --os=linux --cpu=x64 --abi=musl
```

---

## Automated Builds

GitHub Actions builds all platforms on:
- Push to `dev`/`main` branches
- Manual workflow dispatch

Builds publish to: [Releases](https://github.com/MeNotRob0t/OpenDev_Builds/releases)

---

## Versioning

| Type | Format | Trigger |
|------|--------|---------|
| Dev | `0.0.0-dev-YYYYMMDD-HHMMSS` | Push to dev |
| Release | `1.0.0` | Manual dispatch |

---

## Troubleshooting

### Windows: "Windows protected your PC"

Click **More info** → **Run anyway**. The binary isn't code-signed yet.

### macOS: "cannot be opened because the developer cannot be verified"

Go to **System Settings > Privacy & Security** → click **Allow Anyway**.

### Linux: "Permission denied"

```bash
chmod +x /usr/local/bin/opendev
```

### Alpine Linux: "cannot execute: required file not found"

You downloaded the glibc build. Get the **musl** variant instead.

---

## Links

- **Source**: [github.com/MeNotRob0t/OpenDev](https://github.com/MeNotRob0t/OpenDev)
- **Builds**: [github.com/MeNotRob0t/OpenDev_Builds](https://github.com/MeNotRob0t/OpenDev_Builds/releases)
- **Original**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)