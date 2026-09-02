<p align="center">
  <img src="logo.png" alt="OpenDev logo">
</p>
<p align="center">OpenDev — una variante del agente de codificación de IA de código abierto.</p>

---

> [!IMPORTANT]
> OpenDev **no** está creado por el equipo de OpenCode y **no** está afiliado a él de ninguna manera.
> Este proyecto es una variante de [OpenCode](https://github.com/anomalyco/opencode) de
> [anomalyco](https://github.com/anomalyco), el agente de codificación de IA de código abierto original.
> Todo el crédito del código base original corresponde a los autores y colaboradores de OpenCode.

---

### ¿Qué es OpenDev?

OpenDev es una variante personal de OpenCode, un agente de codificación de IA de código abierto que se ejecuta en tu
terminal. Se basa en la base de código de OpenCode con modificaciones locales y configuración ajustada
a mi forma de trabajar.

Para el conjunto completo de características upstream, documentación y comunidad, consulta
[**OpenCode**](https://github.com/anomalyco/opencode) y sus docs en [**opencode.ai**](https://opencode.ai/docs).

### Instalación

OpenDev se ejecuta desde el código fuente con [Bun](https://bun.sh).

```bash
# Instalar dependencias
bun install

# Ejecutar el servidor de desarrollo
bun dev

#si quieres, también puedes construirlo

bun build ./src/index.ts --compile --outfile ./dist/OpenDev.exe
```

Para instalaciones binarias upstream (OpenCode sin modificar), consulta el
[instalador oficial](https://opencode.ai/install).

### Documentación

OpenDev se configura de la misma manera que OpenCode. Para saber cómo se configura OpenCode, dirígete a la documentación upstream en
[**opencode.ai/docs**](https://opencode.ai/docs).

### Contribuir

Este es un proyecto personal, pero las contribuciones son bienvenidas

---

**Créditos:** Desarrollado sobre [OpenCode](https://github.com/anomalyco/opencode) por [anomalyco](https://github.com/anomalyco).