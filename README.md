# 🧪 Suite de Pruebas: E2E & API Testing

Este repositorio contiene dos proyectos de pruebas automatizadas independientes: una suite de pruebas End-to-End (E2E) para la interfaz web y una suite de pruebas para servicios REST (API).

---

## 💻 1. Pruebas E2E (Playwright + Serenity/JS)

Esta solución automatiza los flujos de la plataforma **SauceDemo**. Está construida bajo un enfoque de código limpio y escalable.

*   **Tecnologías:** Playwright, TypeScript.
*   **Framework de Reportes:** Serenity/JS.
*   **Patrón de Diseño:** Screenplay Pattern.

### ⚠️ Nota de Ejecución (Importante)
Por compatibilidad de scripts y entorno, se recomienda **no utilizar PowerShell** para la ejecución de comandos, ya que puede restringir la ejecución del framework. Utilice **Git Bash** como terminal dentro de Visual Studio Code.

### Ejecución de las Pruebas E2E
Abra su terminal Git Bash en la raíz del proyecto E2E y ejecute el siguiente comando para correr la prueba en modo visible (headed):

```bash
npx playwright test saucedemo-screenplay.spec.ts --headed
