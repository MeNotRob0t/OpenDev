<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — en variant av den open source AI kodingagenten.</p>

---

> [!IMPORTANT]
> OpenDev er **ikke** bygget av OpenCode-teamet og er **ikke** tilknyttet det på noen måte.
> Dette prosjektet er en variant av [OpenCode](https://github.com/anomalyco/opencode) av
> [anomalyco](https://github.com/anomalyco), den originale open source AI kodingagenten.
> All kreditt for upstream-kodebasen går til OpenCode-forfattere og bidragsytere.

---

### Hva er OpenDev?

OpenDev er en personlig variant av OpenCode, en open source AI kodingagent som kjører i din
terminal. Den bygger på OpenCode-kodebasen med lokale modifikasjoner og konfigurasjon tilpasset
måten jeg jobber på.

For det fulle upstream-funksjonssettet, dokumentasjonen og fellesskapet, se
[**OpenCode**](https://github.com/anomalyco/opencode) og dets docs på [**opencode.ai**](https://opencode.ai/docs).

### Installasjon

OpenDev kjører fra kildekode med [Bun](https://bun.sh).

```bash
# Installer avhengigheter
bun install

# Kjør dev-serveren
bun dev

#hvis du vil, kan du også bygge det

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

For upstream binære installasjoner (den uendrede OpenCode), se den
[offisielle installasjonen](https://opencode.ai/install).

### Dokumentasjon

OpenDev konfigureres på samme måte som OpenCode. For hvordan OpenCode konfigureres, gå til upstream-dokene på
[**opencode.ai/docs**](https://opencode.ai/docs).

### Bidrag

Dette er et personlig prosjekt, men bidrag er velkomne

---

**Kreditter:** Bygget på [OpenCode](https://github.com/anomalyco/opencode) av [anomalyco](https://github.com/anomalyco).