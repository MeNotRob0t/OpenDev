<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — en variant af den open source AI kodningsagent.</p>

---

> [!IMPORTANT]
> OpenDev er **ikke** bygget af OpenCode-teamet og er **ikke** tilknyttet det på nogen måde.
> Dette projekt er en variant af [OpenCode](https://github.com/anomalyco/opencode) af
> [anomalyco](https://github.com/anomalyco), den originale open source AI kodningsagent.
> Al kredit for den upstream kodebase går til OpenCode-forfattere og bidragsydere.

---

### Hvad er OpenDev?

OpenDev er en personlig variant af OpenCode, en open source AI kodningsagent, der kører i din
terminal. Det bygger på OpenCode-kodebasen med lokale modificationer og konfiguration tilpasset
den måde jeg arbejder på.

For det fulde upstream funktionssæt, dokumentation og fællesskab, se
[**OpenCode**](https://github.com/anomalyco/opencode) og dets docs på [**opencode.ai**](https://opencode.ai/docs).

### Installation

OpenDev kilder fra source med [Bun](https://bun.sh).

```bash
# Installer afhængigheder
bun install

# Kør dev serveren
bun dev

#hvis du vil, kan du også bygge det

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

Til upstream binære installationer (den uændrede OpenCode), se den
[officielle installer](https://opencode.ai/install).

### Dokumentation

OpenDev konfigureres på samme måde som OpenCode. For hvordan OpenCode konfigureres, gå til upstream docs på
[**opencode.ai/docs**](https://opencode.ai/docs).

### Bidrag

Dette er et personligt projekt, men bidrag er velkomne

---

**Credits:** Bygget på [OpenCode](https://github.com/anomalyco/opencode) af [anomalyco](https://github.com/anomalyco).