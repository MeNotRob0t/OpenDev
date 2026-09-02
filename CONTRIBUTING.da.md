# Bidrag

Tak for dit bidrag! Dette projekt er en variant af [OpenCode](https://github.com/anomalyco/opencode).

Bidrag gennemgås baseret på deres størrelse og indflydelse.

## Ændringstyper

| Ændringstype | Stemme påkrævet? | Hvem stemmer? | Godkendelsestærskel |
| :--- | :--- | :--- | :--- |
| **Små ændringer** | Nej | — | — |
| **Nye funktioner** | Ja | Alle | >= 2/3 |
| **Store ændringer** | Ja | Berettigede projektstemmere | >= 3/4 |

---

## Alle stemmer afholdes via Google Forms

---

## 1. Små ændringer
> **Ingen stemme påkrævet.** Sammenføjes af maintainere når de er klar.

* **Eksempler:** Bug/fejl/sikkerhedsrettelser, mindre optimeringer, docs/typo-rettelser og små non-breaking refactoringer.

---

## 2. Nye funktioner
> **Offentlig stemme påkrævet.** Åben for alle. Godkendes med **>= 2/3** stemmer (beregnet som `Godkend / (Godkend + Afvis)`).

* **Workflow:**
  1. Åbn et GitHub Issue/Diskussion der beskriver forslaget.
  2. Maintainere klassificerer ændringen og åbner en offentlig Google Forms-stemning.
  3. Hvis godkendt, implementér funktionen og åbn et pull request der refererer til stemningen.

---

## 3. Store ændringer
> **Projekt-stemmer stemme påkrævet.** Begrænset til berettigede projektstemmere. Godkendes med **>= 3/4** stemmer.

* **Eksempler:** Arkitektoniske omskrivninger, erstatelse af store komponenter og breaking changes.
* **Workflow:** Samme som nye funktioner, men begrænset til projektstemmere og kræver **>= 3/4** tærskel.

---

## 4. Stemme & Integritet
* **Platform:** Afholdes via en dedikeret Google Form linket i README/Diskussioner.
* **Valgmuligheder:** Godkend, Afvis, eller Afstå. Uafgjorte taber.
* **Integritet:** Maintainere bruger Google Forms kontroller til at forhindre duplikater og kan ugyldiggøre bedrageriske, automatiserede eller spam-stemmer.

---

## 5. Pull Requests & Kode Retningslinjer
* **PR Best Practices:** Forklar ændringer klart, hold PR'er fokuserede, inkluder tests, og referer til eventuelle stemmeresultater. Kombiner ikke urelaterede ændringer.
* **Kode Kvalitet:** Følg projektkonventioner, undgå unødvendige afhængigheder/duplikering, og opdater dokumentation for brugerrettede ændringer.

---

## 6. Licensering & Upstream Kode
* Afstamet fra [OpenCode](https://github.com/anomalyco/opencode).
* Bidragsydere skal bevare tredjeparts copyright/licenser og sikre at de har den juridiske ret til at distribuere indsendt kode.

---

## 7. Maintainer Myndighed & Nødsituationer
* **Myndighed:** Maintainere gennemgår PR'er, klassificerer ændringer, løser disputer og styrer stemmer.
* **Nødændringer:** Maintainere kan omgå stemmning *kun* for kritiske sikkerhedsrettelser, alvorlige fejl eller datatab, og skal dokumentere omgangen bagefter.

---

## 8. Fællesskabs Retningslinjer & Politikændringer
* **Retningslinjer:** Vær respektfuld, konstruktiv og hold diskussioner relevante.
* **Politikopdateringer:** Ændringer til denne fil kræver godkendelse fra mindst **tre fjerdedele (3/4)** af berettigede projektstemmere.