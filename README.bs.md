<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — varijanta open source AI agenta za kodiranje.</p>

---

> [!IMPORTANT]
> OpenDev **nije** izgrađen od strane OpenCode tima niti je **povezan** s njim na bilo koji način.
> Ovaj projekat je varijanta [OpenCode](https://github.com/anomalyco/opencode) od
> [anomalyco](https://github.com/anomalyco), originalnog open source AI agenta za kodiranje.
> Svi krediti za upstream kodbazu idu autorima i saradnicima OpenCode-a.

---

### Šta je OpenDev?

OpenDev je lična varijanta OpenCode-a, open source AI agenta za kodiranje koji se pokreće u
vašem terminalu. Gradi se na OpenCode kodbazi sa lokalnim modifikacijama i konfiguracijom podešenom
za moj način rada.

Za pun upstream set funkcija, dokumentaciju i zajednicu, pogledajte
[**OpenCode**](https://github.com/anomalyco/opencode) i njegovu dokumentaciju na [**opencode.ai**](https://opencode.ai/docs).

### Instalacija

OpenDev se pokreće iz izvornog koda sa [Bun](https://bun.sh).

```bash
# Instaliraj zavisnosti
bun install

# Pokreni dev server
bun dev

# ako želiš, možeš ga i build-ovati

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

Za upstream binarne instalacije (neizmenjen OpenCode), pogledaj
[zvanični instaler](https://opencode.ai/install).

### Dokumentacija

OpenDev se konfiguriše na isti način kao OpenCode. Za to kako se OpenCode konfiguriše, idite na upstream docs na
[**opencode.ai/docs**](https://opencode.ai/docs).

### Pridones

Ovo je lični projekat, ali su pridonesi dobrodošli

---

**Krediti:** Izgrađeno na [OpenCode](https://github.com/anomalyco/opencode) od strane [anomalyco](https://github.com/anomalyco).