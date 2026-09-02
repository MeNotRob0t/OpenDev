<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — варіант open source AI-агента для кодування.</p>

---

> [!IMPORTANT]
> OpenDev **не** створено командою OpenCode і **не** афіліований з нею жодним чином.
> Цей проєкт — варіант [OpenCode](https://github.com/anomalyco/opencode) від
> [anomalyco](https://github.com/anomalyco), оригінального open source AI-агента для кодування.
> Увесь кредит за upstream-кодбазу йде авторам та контриб'юторам OpenCode.

---

### Що таке OpenDev?

OpenDev — це особистий варіант OpenCode, open source AI-агента для кодування, який запускається в вашому
терміналі. Він будується на кодовій базі OpenCode з локальними модифікаціями та конфігурацією, налаштованою
під мій спосіб роботи.

Для повного набору upstream-функцій, документації та спільноти дивіться
[**OpenCode**](https://github.com/anomalyco/opencode) та його доки на [**opencode.ai**](https://opencode.ai/docs).

### Встановлення

OpenDev запускається з джерел з [Bun](https://bun.sh).

```bash
# Встановити залежності
bun install

# Запустити dev-сервер
bun dev

#якщо хочеш, ти також можеш зібрати

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

Для upstream-бінарних установок (не модифікований OpenCode) дивись
[офіційний інсталер](https://opencode.ai/install).

### Документація

OpenDev налаштовується так само, як OpenCode. Як налаштовується OpenCode, читай в upstream-доках на
[**opencode.ai/docs**](https://opencode.ai/docs).

### Внесок

Це особистий проєкт, але внески вітаються

---

**Credits:** Створено на [OpenCode](https://github.com/anomalyco/opencode) від [anomalyco](https://github.com/anomalyco).