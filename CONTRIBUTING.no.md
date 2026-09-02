# Bidrag

Takk for bidraget! Dette prosjektet er en variant av [OpenCode](https://github.com/anomalyco/opencode).

Bidrag gjennomgås basert på størrelse og innvirkning.

## Endringstyper

| Endringstype | Stemme påkrevd? | Hvem stemmer? | Godkjennelsesterskler |
| :--- | :--- | :--- | :--- |
| **Små endringer** | Nei | — | — |
| **Nye funksjoner** | Ja | Alle | >= 2/3 |
| **Store endringer** | Ja | Kvalifiserte prosjektstemmere | >= 3/4 |

---

## Alle stemmer avholdes via Google Forms

---

## 1. Små endringer
> **Ingen stemme påkrevd.** Slås sammen av maintainere når de er klare.

* **Eksempler:** Bug/feil/sikkerhetsrettelser, mindre optimaliseringer, docs/typo-rettelser og små non-breaking refactoringer.

---

## 2. Nye funksjoner
> **Offentlig stemme påkrevd.** Åpen for alle. Godkjennes med **>= 2/3** stemmer (beregnet som `Godkjenn / (Godkjenn + Avvis)`).

* **Arbeidsflyt:**
  1. Åpne et GitHub Issue/Diskusjon som beskriver forslaget.
  2. Maintainere klassifiserer endringen og åpner en offentlig Google Forms-stemming.
  3. Hvis godkjent, implementer funksjonen og åpne en pull request som refererer til stemming.

---

## 3. Store endringer
> **Prosjekt-stemmer stemme påkrevd.** Begrenset til kvalifiserte prosjektstemmere. Godkjennes med **>= 3/4** stemmer.

* **Eksempler:** Arkitektoniske omskrivninger, erstatning av store komponenter og breaking changes.
* **Arbeidsflyt:** Samme som nye funksjoner, men begrenset til prosjektstemmere og krever **>= 3/4** terskel.

---

## 4. Stemme og integritet
* **Plattform:** Avholdes via en dedikert Google Form lenket i README/Diskusjoner.
* **Alternativer:** Godkjenn, Avvis eller Avstå. Uavgjorte taper.
* **Integritet:** Maintainere bruker Google Forms-kontroller for å forhindre duplikater og kan ugyldiggjøre bedrajleriske, automatiserte eller spam-stemmer.

---

## 5. Pull Requests og Koderetningslinjer
* **PR Best Practices:** Forklar endringer tydelig, hold PR-er fokuserte, inkluder tester, og referer til eventuelle stemmeresultater. Ikke kombiner urelaterte endringer.
* **Kodekvalitet:** Følg prosjektkonvensjoner, unngå unødvendige avhengigheter/duplikering, og oppdater dokumentasjon for brukerrettede endringer.

---

## 6. Lisensiering og Oppstrøms Kode
* Avstammet fra [OpenCode](https://github.com/anomalyco/opencode).
* Bidragsytere må beholde tredjeparts opphavsrett/lisenser og sikre at de har den juridiske retten til å distribuere innsendt kode.

---

## 7. Maintainer Myndighet og Nødsituasjoner
* **Myndighet:** Maintainere går gjennom PR-er, klassifiserer endringer, løser strider og styrer stemmer.
* **Nødendringer:** Maintainere kan omgå stemming *kun* for kritiske sikkerhetsrettelser, alvorlige feil eller datatap, og må dokumentere omgangen etterpå.

---

## 8. Samfunnsretningslinjer og Politikendringer
* **Retningslinjer:** Vær respektfull, konstruktiv og hold diskusjoner relevante.
* **Politikkoppdateringer:** Endringer i denne filen krever godkjennelse fra minst **tre fjerdedeler (3/4)** av kvalifiserte prosjektstemmere.