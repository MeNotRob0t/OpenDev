# Sigurnost

## VAŽNO

Ne prihvaćamo sigurnosne izvještaje generirane od strane AI. Primamo veliki broj njih i apsolutno nemamo resursa da ih sve pregledamo. Ako pošaljete jedan, to će biti automatska zabrana sa projekta.

## Model Pretnji

### Pregled

OpenCode je AI-pomoćnik za kodiranje koji se lokalno pokreće na vašoj mašini. Pruža sistem agenata sa pristupom moćnim alatima uključujući izvršavanje shell naredbi, operacije nad fajlovima i web pristup.

### Nema Sandbox-a

OpenCode **ne** sandboxuje agenta. Sistem dozvola postoji kao UX karakteristika kako bi korisnici ostali svjesni koje akcije agent preduzima - traži potvrdu prije izvršavanja naredbi, pisanja fajlova, itd. Međutim, nije dizajniran da pruža sigurnosnu izolaciju.

Ako vam treba prava izolacija, pokrenite OpenCode unutar Docker kontejnera ili VM-a.

### Server Mod

Server mod je samo opt-in. Kada je omogućen, postavite `OPENCODE_SERVER_PASSWORD` zahtijevati HTTP Basic Auth. Bez njega, server radi neautentifikovano (sa upozorenjem). Odgovornost krajnjeg korisnika je da osigura server - bilo koju funkcionalnost koju pruža nije ranjivost.

### Van Opsega

| Kategorija | Opravdanje |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Pristup serveru kada je opt-in** | Ako omogućite server mod, API pristup je očekivano ponašanje |
| **Sandbox escapes** | Sistem dozvola nije sandbox (vidjeti iznad) |
| **Obrada podataka LLM provajdera** | Podaci poslani vašem konfigurisanom LLM provajderu upravljaju se njihovim politikama |
| **Ponašanje MCP servera** | Eksterni MCP serveri koje konfigurirate su izvan naše granice povjerenja |
| **Zlonamjerni config fajlovi** | Korisnici kontrolišu svoj config; modificiranje njega nije napad vektor |

---

# Prijavljivanje Sigurnosnih Problema

Cijenimo vaše napore da odgovorno otkrijete svoje nalaze, iPrićemo se da ćemo potpunim naporom priznati vaše doprinose.

Da biste prijavili sigurnosni problem, molimo koristite GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new) tab.

Tim će poslati odgovor koji ukazuje na sljedeće korake u rukovanju vašim izvještajem. Početnom odgovoru na vaš izvještaj, sigurnosni tim će vas održavati informiranim o napretku prema popravci i punom objavi, i može zatražiti dodatne informacije ili smjernice.

## Eskalacija

Ako ne primite potvrdu svog izvještaja unutar 6 radnih dana, možete poslati email na security@anoma.ly