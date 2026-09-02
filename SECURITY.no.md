# Sikkerhet

## VIKTIG

Vi aksepterer ikke AI-genererte sikkerhetsrapporter. Vi mottar et stort antall av dem, og vi har absolutt ikke ressursene til å gjennomgå dem alle. Hvis du sender inn en, vil det være en automatisk utestenging fra prosjektet.

## Trusselmodell

### Oversikt

OpenCode er en AI-drevet kodningsassistent som kjører lokalt på maskinen din. Det tilbyr et agentsystem med tilgang til kraftige verktøy, inkludert skjulutførelse, filoperasjoner og nettåtkomst.

### Ingen Sandbox

OpenCode **sandboxer** ikke agenten. Tillatelsessystemet finnes som en UX-funksjon for å hjelpe brukere med å være klar over hvilke handlinger agenten utfører - det ber om bekreftelse før kommandoer utføres, filer skrives, osv. Det er imidlertid ikke designet for å gi sikkerhetsisolasjon.

Hvis du trenger ekte isolering, kjør OpenCode inni en Docker-container eller VM.

### Servermodus

Servermodus er bare opt-in. Når aktivert, sett `OPENCODE_SERVER_PASSWORD` for å kreve HTTP Basic Auth. Uten dette kjører serveren uautentisert (med en advarsel). Det er sluttbrukerens ansvar å sikre serveren - enhver funksjonalitet den tilbyr er ikke en sårbarhet.

### Utenfor Omfanget

| Kategori | Begrunnelse |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Servertilgang ved opt-in** | Hvis du aktiverer servermodus, er API-tilgang forventet atferd |
| **Sandbox-flukt** | Tillatelsessystemet er ikke en sandbox (se ovenfor) |
| **LLM-leverandør datahåndtering** | Data sendt til din konfigurerte LLM-leverandør styres av deres policyer |
| **MCP-server atferd** | Eksterne MCP-servere du konfigurerer er utenfor vår tillitsgrense |
| **Ondsinnede konfigurasjonsfiler** | Brukere styrer sin egen konfigurasjon; å endre den er ikke en angrepsvektor |

---

# Rapportering av Sikkerhetsproblemer

Vi setter pris på dine innsatser for ansvarsfull avsløring av dine funn, og vil gjøre det vi kan for å anerkjenne bidragene dine.

For å rapportere et sikkerhetsproblem, vennligst bruk GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new) fanen.

Teamet vil sende et svar som indikerer neste steg i håndteringen av rapporten din. Etter det første svaret på rapporten din, vil sikkerhetsteamet holde deg informert om fremdriften mot en rettelse og full offentliggjøring, og kan be om mer informasjon eller veiledning.

## Eskalering

Hvis du ikke mottar en bekreftelse på rapporten din innen 6 virkedager, kan du sende en e-post til security@anoma.ly