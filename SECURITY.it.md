# Sicurezza

## IMPORTANTE

Non accettiamo rapporti di sicurezza generati dall'IA. Ne riceviamo un gran numero e non abbiamo assolutamente le risorse per esaminarli tutti. Se ne invii uno, sarà un ban automatico dal progetto.

## Modello delle Minacce

### Panoramica

OpenCode è un assistente di programmazione basato su IA che viene eseguito localmente sul tuo computer. Fornisce un sistema di agenti con accesso a potenti strumenti, inclusa l'esecuzione della shell, operazioni sui file e accesso web.

### Nessuna Sandbox

OpenCode **non** esegue la sandbox dell'agente. Il sistema dei permessi esiste come funzionalità UX per aiutare gli utenti a rimanere consapevoli delle azioni che l'agente sta intraprendendo - richiede conferma prima di eseguire comandi, scrivere file, ecc. Tuttavia, non è progettato per fornire isolamento di sicurezza.

Se hai bisogno di un vero isolamento, esegui OpenCode all'interno di un container Docker o una VM.

### Modalità Server

La modalità server è solo opt-in. Quando abilitata, imposta `OPENCODE_SERVER_PASSWORD` per richiedere l'autenticazione HTTP Basic. Senza questa, il server viene eseguito senza autenticazione (con un avvertimento). È responsabilità dell'utente finale proteggere il server - qualsiasi funzionalità fornisca non è una vulnerabilità.

### Fuori Ambito

| Categoria | Giustificazione |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Accesso al server quando opt-in** | Se abiliti la modalità server, l'accesso API è un comportamento atteso |
| **Fughe dalla sandbox** | Il sistema dei permessi non è una sandbox (vedi sopra) |
| **Gestione dati del provider LLM** | I dati inviati al tuo provider LLM configurato sono governati dalle loro politiche |
| **Comportamento del server MCP** | I server MCP esterni che configuri sono fuori dal nostro perimetro di fiducia |
| **File di configurazione malevoli** | Gli utenti controllano la propria configurazione; modificarla non è un vettore di attacco |

---

# Segnalazione di Problemi di Sicurezza

Apprezziamo i vostri sforzi per divulgare responsabilmente i vostri risultati e faremo ogni sforzo per riconoscere i vostri contributi.

Per segnalare un problema di sicurezza, utilizzate la scheda GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new).

Il team invierà una risposta che indica i prossimi passi nella gestione della vostra segnalazione. Dopo la risposta iniziale alla vostra segnalazione, il team di sicurezza vi terrà informati sui progressi verso una correzione e un annuncio completo, e potrà richiedere informazioni o indicazioni aggiuntive.

## Escalation

Se non ricevete una conferma della vostra segnalazione entro 6 giorni lavorativi, potete inviare un'e-mail a security@anoma.ly