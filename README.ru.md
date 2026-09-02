<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — вариант open source AI-агента для кодирования.</p>

---

> [!IMPORTANT]
> OpenDev **не** создан командой OpenCode и **не** аффилирован с ней никаким образом.
> Этот проект — вариант [OpenCode](https://github.com/anomalyco/opencode) от
> [anomalyco](https://github.com/anomalyco), оригинального open source AI-агента для кодирования.
> Весь кредит за upstream-кодбазу идёт авторам и контрибьюторам OpenCode.

---

### Что такое OpenDev?

OpenDev — это личный вариант OpenCode, open source AI-агента для кодирования, который запускается в вашем
терминале. Он строится на кодовой базе OpenCode с локальными модификациями и конфигурацией, настроенной
под мой способ работы.

Для полного набора upstream-функций, документации и сообщества смотрите
[**OpenCode**](https://github.com/anomalyco/opencode) и его доки на [**opencode.ai**](https://opencode.ai/docs).

### Установка

OpenDev запускается из исходников с [Bun](https://bun.sh).

```bash
# Установить зависимости
bun install

# Запустить dev-сервер
bun dev

#если хочешь, можешь также собрать

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

Для upstream-бинарных установок (не модифицированный OpenCode) смотри
[официальный инсталлер](https://opencode.ai/install).

### Документация

OpenDev настраивается так же, как OpenCode. Как настраивается OpenCode, читай в upstream-доках на
[**opencode.ai/docs**](https://opencode.ai/docs).

### Вклад

Это личный проект, но вклады приветствуются

---

**Credits:** Построено на [OpenCode](https://github.com/anomalyco/opencode) от [anomalyco](https://github.com/anomalyco).