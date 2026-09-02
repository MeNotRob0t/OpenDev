# Sicherheit

## WICHTIG

Wir akzeptieren keine KI-generierten Sicherheitsberichte. Wir erhalten eine große Anzahl davon und haben absolut nicht die Ressourcen, sie alle zu prüfen. Wenn Sie einen einreichen, erfolgt ein automatischer Ausschluss vom Projekt.

## Bedrohungsmodell

### Übersicht

OpenCode ist ein KI-gestützter Coding-Assistent, der lokal auf Ihrem Rechner läuft. Er bietet ein Agentsystem mit Zugriff auf leistungsstarke Tools einschließlich Shell-Ausführung, Dateioperationen und Webzugriff.

### Keine Sandbox

OpenCode **sandboxed** den Agenten **nicht**. Das Berechtigungssystem existiert als UX-Funktion, um Benutzer darüber im Klaren zu sein, welche Aktionen der Agent ausführt - es fordert eine Bestätigung an, bevor Befehle ausgeführt, Dateien geschrieben usw. werden. Es ist jedoch nicht darauf ausgelegt, Sicherheitsisolation zu bieten.

Wenn Sie echte Isolation benötigen, führen Sie OpenCode in einem Docker-Container oder einer VM aus.

### Server-Modus

Server-Modus ist nur Opt-in. Wenn aktiviert, setzen Sie `OPENCODE_SERVER_PASSWORD`, um HTTP Basic Auth zu erfordern. Ohne dies läuft der Server unauthentifiziert (mit einer Warnung). Es liegt in der Verantwortung des Endbenutzers, den Server zu sichern - jede Funktionalität, die er bereitstellt, ist keine Schwachstelle.

### Außerhalb des Geltungsbereichs

| Kategorie | Begründung |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Serverzugriff bei Opt-in** | Wenn Sie Server-Modus aktivieren, ist API-Zugriff erwartetes Verhalten |
| **Sandbox-Fluchten** | Das Berechtigungssystem ist keine Sandbox (siehe oben) |
| **LLM-Anbieter Datenverarbeitung** | An Ihren konfigurierten LLM-Anbieter gesendete Daten unterliegen deren Richtlinien |
| **MCP-Server Verhalten** | Externe MCP-Server, die Sie konfigurieren, liegen außerhalb unserer Vertrauensgrenze |
| **Bösartige Konfigurationsdateien** | Benutzer kontrollieren ihre eigene Konfiguration; deren Änderung ist kein Angriffsvektor |

---

# Melden von Sicherheitsproblemen

Wir schätzen Ihre Bemühungen um eine verantwortungsvolle Offenlegung Ihrer Ergebnisse und werden alle Anstrengungen unternehmen, Ihre Beiträge anzuerkennen.

Um ein Sicherheitsproblem zu melden, verwenden Sie bitte den GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new) Tab.

Das Team wird eine Antwort senden, die die nächsten Schritte bei der Behandlung Ihres Berichts angibt. Nach der ersten Antwort auf Ihren Bericht wird das Sicherheitsteam Sie über den Fortschritt in Richtung einer Behebung und vollständigen Bekanntmachung informieren und kann um zusätzliche Informationen oder Anleitung bitten.

## Eskalation

Wenn Sie innerhalb von 6 Werktagen keine Bestätigung Ihres Berichts erhalten, können Sie eine E-Mail an security@anoma.ly senden.