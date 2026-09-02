# Współpraca

Dziękujemy za współpracę! Ten projekt jest wariantem [OpenCode](https://github.com/anomalyco/opencode).

Współpraca jest recenzowana na podstawie jej wielkości i wpływu.

## Typy Zmian

| Typ Zmiany | Wymagane Głosowanie? | Kto Głosuje? | Próg Zatwierdzenia |
| :--- | :--- | :--- | :--- |
| **Małe Zmiany** | Nie | — | — |
| **Nowe Funkcje** | Tak | Wszyscy | >= 2/3 |
| **Duże Zmiany** | Tak | Uprawnieni Głosujący Projektu | >= 3/4 |

---

## Wszystkie głosowania odbywają się za pomocą Google Forms

---

## 1. Małe Zmiany
> **Głosowanie nie wymagane.** Scalane przez opiekunów, gdy są gotowe.

* **Przykłady:** Naprawy bugów/błędów/bezpieczeństwa, drobne optymalizacje, korekty docs/literówek i małe refaktoryzacje niełamiące.

---

## 2. Nowe Funkcje
> **Wymagane publiczne głosowanie.** Otwarte dla wszystkich. Przechodzi z zatwierdzeniem **>= 2/3** (obliczane jako `Zatwierdź / (Zatwierdź + Odrzuć)`).

* **Przepływ Pracy:**
  1. Otwórz Issue/Dyskusję na GitHub ze szczegółami propozycji.
  2. Opiekunowie klasyfikują zmianę i otwierają publiczne głosowanie w Google Forms.
  3. Jeśli przejdzie, zaimplementuj funkcję i otwórz pull request odwołujący się do głosowania.

---

## 3. Duże Zmiany
> **Wymagane głosowanie głosujących projektu.** Ograniczone do uprawnionych głosujących projektu. Przechodzi z zatwierdzeniem **>= 3/4**.

* **Przykłady:** Przeprojektowania architektoniczne, zamiana dużych komponentów i breaking changes.
* **Przepływ Pracy:** Tak jak przy nowych funkcjach, ale ograniczone do głosujących projektu i wymaga progu **>= 3/4**.

---

## 4. Głosowanie i Integralność
* **Platforma:** Przeprowadzane poprzez wyznaczony Google Form linkowany w README/Dyskusjach.
* **Opcje:** Zatwierdź, Odrzuć lub Wstrzymaj się. Remisy przegrywają.
* **Integralność:** Opiekunowie używają kontroli Google Forms do zapobiegania duplikatom i mogą unieważnić głosy oszustwa, zautomatyzowane lub spam.

---

## 5. Pull Requests i Wytyczne Kodowe
* **Najlepsze Praktyki PR:** Wyjaśnij zmiany jasno, trzymaj PR-y skupione, dołącz testy i odwołaj się do wyników głosowania. Nie łącz niezależnych zmian.
* **Jakość Kodu:** Przestrzegaj konwencji projektu, unikaj niepotrzebnych zależności/duplikacji i aktualizuj dokumentację dla zmian widocznych dla użytkownika.

---

## 6. Licencjonowanie i Kod Upstream
* Pochodny z [OpenCode](https://github.com/anomalyco/opencode).
* Współpracownicy muszą zachować prawa autorskie/licencje stron trzecich i upewnić się, że mają prawo do dystrybucji przesłanego kodu.

---

## 7. Autorytet Opiekunów i Sytuacje Nagłe
* **Autorytet:** Opiekunowie recenzują PR-y, klasyfikują zmiany, rozstrzygają spory i zarządzają głosowaniami.
* **Zmiany Nagłe:** Opiekunowie mogą pominąć głosowanie *tylko* dla krytycznych napraw bezpieczeństwa, poważnych błędów lub utraty danych, i muszą to udokumentować później.

---

## 8. Wytyczne Społeczności i Zmiany Polityki
* **Wytyczne:** Bądź szanujący, konstruktywny i trzymaj dyskusje na temat.
* **Aktualizacje Polityki:** Zmiany w tym pliku wymagają zatwierdzenia od co najmniej **trzech czwartych (3/4)** uprawnionych głosujących projektu.