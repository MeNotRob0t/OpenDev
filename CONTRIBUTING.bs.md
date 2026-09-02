# Pridones

Hvala na pridonesu! Ovaj projekat je varijanta [OpenCode](https://github.com/anomalyco/opencode).

Pridonesi se pregleduju na osnovu njihove veličine i uticaja.

## Vrste promeni

| Vrsta promene | Glasanje potrebno? | Ko glasa? | Prag odobrenja |
| :--- | :--- | :--- | :--- |
| **Male promene** | Ne | — | — |
| **Nove funkcije** | Da | Svi | >= 2/3 |
| **Veće promene** | Da | Odbrojivi glasači projekta | >= 3/4 |

---

## Sva glasanja se vrše pomoću Google Forms

---

## 1. Male promene
> **Glasanje nije potrebno.** Spajaju se od strane održavatelja kada su spremne.

* **Primjeri:** Popravke bagova/grešaka/sigurnosti, male optimizacije, ispravke dokumentacije/tipkovnih grešaka i male nelomljive refaktorizacije.

---

## 2. Nove funkcije
> **Javno glasanje potrebno.** Otvoreno za sve. Prođe s odobrenjem **>= 2/3** (izračunava se kao `Odobreno / (Odobreno + Odbijeno)`).

* **Tijek rada:**
  1. Otvorite GitHub Issue/Raspravu s detaljima prijedloga.
  2. Održavatelji klasificiraju promjenu i otvaraju javno Google Forms glasanje.
  3. Ako prođe, implementirajte funkciju i otvorite pull request koji upućuje na glasanje.

---

## 3. Veće promene
> **Glasanje glasača projekta potrebno.** Ograničeno na odbrojive glasače projekta. Prođe s odobrenjem **>= 3/4**.

* **Primjeri:** Arhitektonski preinake, zamjena većih komponenti i lomljive promjene.
* **Tijek rada:** Isti kao za nove funkcije, ali ograničen na glasače projekta i zahtijeva prag **>= 3/4**.

---

## 4. Glasanje i integritet
* **Platforma:** Provodi se putem određenog Google Forms povezanog u README/Raspravama.
* **Opcije:** Odobri, Odbij, ili Uzdrži se. Neriješeni gube.
* **Integritet:** Održavatelji koriste kontrole Google Forms za spriječavanje duplikata i mogu proglasiti nevažećim prijevara, automatizirane ili spam glasove.

---

## 5. Pull Requesti i smjernice za kod
* **Najbolje prakse PR-a:** Objasnite promjene jasno, držite PR-e usmjerenim, uključite testove i referencirajte bilo kakve rezultate glasanja. Ne kombinirajte nesrodne promjene.
* **Kvaliteta koda:** Slijedite konvencije projekta, izbjegavajte nepotrebne ovisnosti/duplikacije i ažurirajte dokumentaciju za promjene koje korisnici vide.

---

## 6. Licenciranje i upstream kod
* Izvedeno iz [OpenCode](https://github.com/anomalyco/opencode).
* Pridonesitelji moraju očuvati autorska prava/licence trećih strana i osigurati da imaju pravnu moć distribucije predloženog koda.

---

## 7. Ovlaštenje održavatelja i nužda
* **Ovlaštenje:** Održavatelji pregleduju PR-e, klasificiraju promjene, rješavaju sporove i upravljaju glasanjima.
* **Nužne promjene:** Održavatelji mogu zaobići glasanje *samo* za kritične sigurnosne popravke, teške bugove ili gubitak podataka, i moraju to dokumentirati nakon toga.

---

## 8. Smjernice zajednice i promjene politika
* **Smjernice:** Budite poštentni, konstruktivni i održavajte rasprave relevantnima.
* **Ažuriranja politika:** Promjene u ovoj datoteci zahtijevaju odobrenje od najmanje **tri četvrtine (3/4)** odbrojivih glasača projekta.