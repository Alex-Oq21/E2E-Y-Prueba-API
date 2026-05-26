# Se recomienda descargar cada proyecto por separado, Prueba E2E se hizo en Visual studio code y el proyecto Karate con IntelliJ IDE, se recomienda ejecutarlos en los mismos IDE donde se realizaron.

---

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

Paso 1: Damos click en terminal en la parte superior del IDE

Paso 2: Una vez abre la terminal en la parte derecha encontraremos un simbolo + y una flecha hacia abajo, damos click en la flecha hacia abajo.

Paso 3: Una vez damos click en la felcha hacia abajo, se despliegan varias opciones, damos click  en Git Bash

<img width="1503" height="814" alt="image" src="https://github.com/user-attachments/assets/5ed293db-e699-4b46-b082-81fa3f68d223" />



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


<img width="940" height="410" alt="image" src="https://github.com/user-attachments/assets/a6199a64-35e7-4729-b237-46886a14d2ad" />


==============================================================================================================================================================================================================

#  API Testing Suite - Swagger PetStore

Este módulo contiene la automatización de pruebas para los servicios REST de **PetStore**, desarrollada con **Karate Framework**. Se enfoca en validar el ciclo de vida completo de un recurso (Mascota) aplicando aislamiento de escenarios y manejo dinámico de datos.

---

## 🛠️ Tecnologías y Prácticas Aplicadas

* **Karate Framework (v1.5.0):** Automatización BDD (Behavior Driven Development) nativa para APIs.
* **Separación de Payloads (Data-Driven):** Los cuerpos de las peticiones JSON se gestionan en archivos externos (`.json`) independientes de la lógica del test (`.feature`).

---

## 🏗️ Cobertura de Pruebas

El script `petstore.feature` interactúa directamente con los EndPoints, cubriendo el siguiente flujo:

1. **Añadir Mascota (`POST /pet`)
2. **Consultar por ID (`GET /pet/{petId}`)
3. **Actualizar Mascota (`PUT /pet`)
4. **Consultar por Estatus (`GET /pet/findByStatus`)

---
Para este proyecto, la creación fue por medio del comando: mvn archetype:generate -DarchetypeGroupId=io.karatelabs -DarchetypeArtifactId=karate-archetype -DarchetypeVersion=1.5.0 -DgroupId=com.petstore -DartifactId=petstore

Para su ejecución solo es usar el runner, no es necesario usar comandos de ejecución con mvn

<img width="1878" height="1008" alt="image" src="https://github.com/user-attachments/assets/184164ad-03a2-493c-9838-5089afd416db" />


Al ejecutarlo por consola sale los resultados, pero al final puedes ver la url al reporte

<img width="1636" height="462" alt="image" src="https://github.com/user-attachments/assets/e0391981-647d-44f5-9f11-433ef364e518" />

Una vez abierto puedes ver el resultado de cada escenario con su response para verificar la respuesta

<img width="1900" height="943" alt="image" src="https://github.com/user-attachments/assets/18e5ad55-8309-48df-9ae5-6b3c20d4ecb5" />










