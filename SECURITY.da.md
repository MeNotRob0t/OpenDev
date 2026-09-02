# Sikkerhed

## VIGTIGT

Vi accepterer ikke AI-genererede sikkerhedsrapporter. Vi modtager et stort antal af dem, og vi har absolut ikke ressourcer til at gennemse dem alle. Hvis du indsender en, vil det medføre en automatisk udelukkelse fra projektet.

## Trusselsmodel

### Oversigt

OpenCode er en AI-drevet kodningsassistent, der kører lokalt på din maskine. Det leverer et agentsystem med adgang til værktøjer, herunder shell-udførelse, filoperationer og webadgang.

### Ingen Sandbox

OpenCode **sandboxer** ikke agenten. Tilladelsessystemet findes som en UX-funktion for at hjælpe brugere med at være opmærksomme på, hvilke handlinger agenten udfører - det beder om bekræftelse før udførelse af kommandoer, skrivning af filer osv. Det er dog ikke designet til at give sikkerhedsisolering.

Hvis du har brug for sand isolering, skal du køre OpenCode inde i en Docker-container eller VM.

### Server-tilstand

Server-tilstand er kun opt-in. Når den er aktiveret, skal `OPENCODE_SERVER_PASSWORD` indstilles for at kræve HTTP Basic Auth. Uden det kører serveren uautentificeret (med en advarsel). Det er slutbrugerens ansvar at sikre serveren - enhver funktionalitet, den leverer, er ikke en sårbarhed.

### Uden for Omfanget

| Kategori | Begrundelse |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Serveradgang ved opt-in** | Hvis du aktiverer server-tilstand, er API-adgang forventet adfærd |
| **Sandbox-flugt** | Tilladelsessystemet er ikke en sandbox (se ovenfor) |
| **LLM-udbyder datahåndtering** | Data sendt til din konfigurerede LLM-udbyder styres af deres politikker |
| **MCP-server adfærd** | Eksterne MCP-servere, du konfigurerer, er uden for vores tillidsgrænse |
| **Ondsindede konfigurationsfiler** | Brugere styrer deres egen konfiguration; at ændre den er ikke en angrebsvektor |

---

# Rapportering af Sikkerhedsproblemer

Vi værdsætter dine indsatser for ansvarligt at afsløre dine resultater, og vil gøre vores bedste for at anerkende dine bidrag.

For at rapportere et sikkerhedsproblem, brug venligst fanen GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new).

Teamet vil sende et svar, der angiver de næste trin i håndteringen af din rapport. Efter det indledende svar på din rapport, vil sikkerhedsteamet holde dig informeret om fremskridtet mod en rettelse og fuld bekendtgørelse, og kan spørge om yderligere oplysninger eller vejledning.

## Eskalering

Hvis du ikke modtager en bekræftelse på din rapport inden for 6 arbejdsdage, kan du sende en e-mail til security@anoma.ly