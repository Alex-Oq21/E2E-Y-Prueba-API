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
```

Una vez ejecute podrá visualizar por unos segundos la pantalla de inventario donde podra ver que son 2 los elementos agregados como pedía la prueba.

<img width="1287" height="803" alt="image" src="https://github.com/user-attachments/assets/7049747c-1be3-4480-9393-e63315281c78" />


Al finalizar el test podrás ver el reporte 

<img width="1915" height="945" alt="image" src="https://github.com/user-attachments/assets/2da40daa-4dc6-4ece-aaa2-0724c71acc5f" />

Donde podrás ver un paso a paso y una captura del fin de la prueba.

<img width="1875" height="943" alt="image" src="https://github.com/user-attachments/assets/895d753a-d132-4dce-998c-8e0c54cedd55" />

Para ver el reporte puedes ejecutar
```bash
 npx playwright show-report
```

O CTRL + Clic directamente cuando salga este mensaje por consola lo cual abre el reporte automaticamente
<img width="940" height="410" alt="image" src="https://github.com/user-attachments/assets/6fe5fcf5-8e75-49cc-830b-cab7914ffd7a" />






