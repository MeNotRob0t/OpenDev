# Bezpieczeństwo

## WAŻNE

Nie akceptujemy raportów bezpieczeństwa wygenerowanych przez AI. Otrzymujemy ich dużą liczbę i absolutnie nie mamy zasobów, aby je wszystkie przejrzeć. Jeśli prześlesz jeden, nastąpi automatyczne wykluczenie z projektu.

## Model Zagrożeń

### Przegląd

OpenCode to asystent programowania napędzany AI, który działa lokalnie na Twojej maszynie. Zapewnia system agentów z dostępem do potężnych narzędzi, w tym wykonywania shell, operacji na plikach i dostępu do sieci.

### Brak Sandboxa

OpenCode **nie** umieszcza agenta w sandboxie. System uprawnień istnieje jako funkcja UX, aby pomóc użytkownikom zostać świadomymi działań, które podejmuje agent - prosi o potwierdzenie przed wykonaniem poleceń, zapisywaniem plików itd. Nie jest jednak zaprojektowany do zapewniania izolacji bezpieczeństwa.

Jeśli potrzebujesz prawdziwej izolacji, uruchom OpenCode w kontenerze Docker lub maszynie wirtualnej.

### Tryb Serwera

Tryb serwera jest tylko opt-in. Gdy włączony, ustaw `OPENCODE_SERVER_PASSWORD`, aby wymagać HTTP Basic Auth. Bez tego serwer działa bez uwierzytelniania (z ostrzeżeniem). Odpowiedzialność za zabezpieczenie serwera spoczywa na użytkowniku końcowym - każda funkcjonalność, którą udostępnia, nie jest luką.

### Poza Zakresem

| Kategoria | Uzasadnienie |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Dostęp do serwera przy opt-in** | Jeśli włączysz tryb serwera, dostęp do API to oczekiwane zachowanie |
| **Ucieczki z sandboxa** | System uprawnień nie jest sandboxem (patrz wyżej) |
| **Obsługa danych dostawcy LLM** | Dane wysyłane do skonfigurowanego dostawcy LLM podlegają ich politykom |
| **Zachowanie serwera MCP** | Zewnętrzne serwery MCP, które konfigurujesz, są poza naszą granicą zaufania |
| **Złośliwe pliki konfiguracyjne** | Użytkownicy kontrolują własną konfigurację; jej modyfikacja nie jest wektorem ataku |

---

# Zgłaszanie Problemów Bezpieczeństwa

Cenimy Twoje starania o odpowiedzialne ujawnienie Twoich odkryć i zrobimy wszystko, by docenić Twój wkład.

Aby zgłosić problem bezpieczeństwa, proszę użyć karty GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new).

Zespół wyśle odpowiedź wskazującą kolejne kroki w obsłudze Twojego zgłoszenia. Po wstępnej odpowiedzi na Twoje zgłoszenie, zespół bezpieczeństwa będzie Cię informować o postępach w kierunku naprawy i pełnego ogłoszenia, i może poprosić o dodatkowe informacje lub wskazówki.

## Eskalacja

Jeśli nie otrzymasz potwierdzenia swojego zgłoszenia w ciągu 6 dni roboczych, możesz wysłać e-mail na adres security@anoma.ly