# Seguridad

## IMPORTANTE

No aceptamos informes de seguridad generados por IA. Recibimos una gran cantidad de estos y absolutamente no tenemos los recursos para revisarlos todos. Si envías uno, será una prohibición automática del proyecto.

## Modelo de Amenazas

### Resumen

OpenCode es un asistente de codificación impulsado por IA que se ejecuta localmente en tu máquina. Proporciona un sistema de agentes con acceso a herramientas potentes, incluyendo ejecución de shell, operaciones de archivos y acceso web.

### Sin Sandbox

OpenCode **no** hace sandbox al agente. El sistema de permisos existe como una característica de UX para ayudar a los usuarios a mantenerse conscientes de las acciones que el agente está tomando - solicita confirmación antes de ejecutar comandos, escribir archivos, etc. Sin embargo, no está diseñado para proporcionar aislamiento de seguridad.

Si necesitas aislamiento real, ejecuta OpenCode dentro de un contenedor Docker o VM.

### Modo Servidor

El modo servidor es solo opt-in. Cuando está habilitado, establece `OPENCODE_SERVER_PASSWORD` para requerir HTTP Basic Auth. Sin esto, el servidor se ejecuta sin autenticación (con una advertencia). Es responsabilidad del usuario final asegurar el servidor - cualquier funcionalidad que proporcione no es una vulnerabilidad.

### Fuera de Alcance

| Categoría | Justificación |
| ------------------------------- | ----------------------------------------------------------------------- |
| **Acceso al servidor al optar** | Si habilitas el modo servidor, el acceso a la API es comportamiento esperado |
| **Escapes de sandbox** | El sistema de permisos no es una sandbox (ver arriba) |
| **Manejo de datos del proveedor LLM** | Los datos enviados a tu proveedor LLM configurado se rigen por sus políticas |
| **Comportamiento del servidor MCP** | Los servidores MCP externos que configuras están fuera de nuestro límite de confianza |
| **Archivos de configuración maliciosos** | Los usuarios controlan su propia configuración; modificarla no es un vector de ataque |

---

# Reporte de Problemas de Seguridad

Agradecemos sus esfuerzos por divulgar responsablemente sus hallazgos y haremos todo lo posible por reconocer sus contribuciones.

Para reportar un problema de seguridad, por favor use la pestaña GitHub Security Advisory ["Report a Vulnerability"](https://github.com/anomalyco/opencode/security/advisories/new).

El equipo enviará una respuesta indicando los próximos pasos en el manejo de su reporte. Después de la respuesta inicial a su reporte, el equipo de seguridad lo mantendrá informado del progreso hacia una corrección y anuncio completo, y puede solicitar información o orientación adicional.

## Escalación

Si no recibe un acuse de recibo de su reporte dentro de 6 días hábiles, puede enviar un correo electrónico a security@anoma.ly