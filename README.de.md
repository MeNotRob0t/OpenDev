<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — eine Variante des Open-Source-KI-Codierungsagenten.</p>

---

> [!IMPORTANT]
> OpenDev wurde **nicht** vom OpenCode-Team erstellt und ist **in keiner Weise** damit verbunden.
> Dieses Projekt ist eine Variante von [OpenCode](https://github.com/anomalyco/opencode) von
> [anomalyco](https://github.com/anomalyco), dem ursprünglichen Open-Source-KI-Codierungsagenten.
> Alle Credits für die Upstream-Codebasis gehen an die OpenCode-Autoren und -Mitwirkenden.

---

### Was ist OpenDev?

OpenDev ist eine persönliche Variante von OpenCode, einem Open-Source-KI-Codierungsagenten, der in Ihrem
Terminal läuft. Es baut auf der OpenCode-Codebasis mit lokalen Modifikationen und Konfiguration auf, die
auf meine Arbeitsweise abgestimmt sind.

Für den vollständigen Upstream-Funktionsumfang, Dokumentation und Community siehe
[**OpenCode**](https://github.com/anomalyco/opencode) und seine Docs unter [**opencode.ai**](https://opencode.ai/docs).

### Installation

OpenDev läuft aus dem Quellcode mit [Bun](https://bun.sh).

```bash
# Abhängigkeiten installieren
bun install

# Dev-Server starten
bun dev

#falls du möchtest, kannst du es auch bauen

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

Für Upstream-Binary-Installationen (das unveränderte OpenCode) siehe den
[offiziellen Installer](https://opencode.ai/install).

### Dokumentation

OpenDev wird genauso konfiguriert wie OpenCode. Wie OpenCode konfiguriert wird, erfährst du in den Upstream-Docs unter
[**opencode.ai/docs**](https://opencode.ai/docs).

### Beitragen

Dies ist ein persönliches Projekt, aber Beiträge sind willkommen

---

**Credits:** Aufbauend auf [OpenCode](https://github.com/anomalyco/opencode) von [anomalyco](https://github.com/anomalyco).