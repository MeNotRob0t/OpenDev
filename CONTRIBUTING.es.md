# Contribuir

¡Gracias por contribuir! Este proyecto es una variante de [OpenCode](https://github.com/anomalyco/opencode).

Las contribuciones se revisan según su tamaño e impacto.

## Tipos de Cambios

| Tipo de Cambio | ¿Votación Requerida? | ¿Quién Vota? | Umbral de Aprobación |
| :--- | :--- | :--- | :--- |
| **Cambios Pequeños** | No | — | — |
| **Nuevas Características** | Sí | Todos | >= 2/3 |
| **Cambios Mayores** | Sí | Votantes de Proyecto Elegibles | >= 3/4 |

---

## Todas las votaciones se realizan usando Google Forms

---

## 1. Cambios Pequeños
> **No se requiere votación.** Fusionados por los mantenedores cuando están listos.

* **Ejemplos:** Correcciones de bugs/errores/seguridad, optimizaciones menores, correcciones de docs/typos y pequeños refactorings no-breaking.

---

## 2. Nuevas Características
> **Votación pública requerida.** Abierta para todos. Pasa con aprobación **>= 2/3** (calculado como `Aprobar / (Aprobar + Rechazar)`).

* **Flujo de trabajo:**
  1. Abre un Issue/Discusión de GitHub detallando la propuesta.
  2. Los mantenedores clasifican el cambio y abren una votación pública en Google Forms.
  3. Si pasa, implementa la característica y abre un pull request referenciando la votación.

---

## 3. Cambios Mayores
> **Votación de votantes del proyecto requerida.** Restringida a votantes de proyecto elegibles. Pasa con aprobación **>= 3/4**.

* **Ejemplos:** Reestructuraciones arquitectónicas, reemplazo de componentes mayores y breaking changes.
* **Flujo de trabajo:** Igual que nuevas características, pero restringida a votantes del proyecto y requiere umbral **>= 3/4**.

---

## 4. Votación e Integridad
* **Plataforma:** Realizada mediante un Google Form designado vinculado en el README/Discusiones.
* **Opciones:** Aprobar, Rechazar o Abstenerse. Los empates fallan.
* **Integridad:** Los mantenedores usan controles de Google Forms para prevenir duplicados y pueden invalidar votos fraudulentos, automatizados o spam.

---

## 5. Pull Requests y Directrices de Código
* **Mejores Prácticas PR:** Explicar cambios claramente, mantener PRs enfocados, incluir tests y referenciar cualquier resultado de votación. No combinar cambios no relacionados.
* **Calidad del Código:** Seguir convenciones del proyecto, evitar dependencias/duplicación innecesaria y actualizar documentación para cambios visibles al usuario.

---

## 6. Licenciamiento y Código Upstream
* Derivado de [OpenCode](https://github.com/anomalyco/opencode).
* Los contribuyentes deben preservar copyrights/licencias de terceros y asegurar que tienen el derecho legal para distribuir el código enviado.

---

## 7. Autoridad de Mantenedores y Emergencias
* **Autoridad:** Los mantenedores revisan PRs, clasifican cambios, resuelven disputas y gestionan votaciones.
* **Cambios de Emergencia:** Los mantenedores pueden omitir la votación *solo* para correcciones críticas de seguridad, bugs severos o pérdida de datos, y deben documentar la omisión después.

---

## 8. Directrices de la Comunidad y Cambios de Política
* **Directrices:** Ser respetuoso, constructivo y mantener discusiones relevantes.
* **Actualizaciones de Política:** Cambios a este archivo requieren aprobación de al menos **tres cuartos (3/4)** de los votantes de proyecto elegibles.