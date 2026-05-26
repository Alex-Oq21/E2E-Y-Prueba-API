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


¡De una, Alejo! Para que el proyecto de Karate quede impecable de cara a una revisión técnica, lo ideal es poner un README.md dentro de la misma carpeta petstore. Así, cuando abran esa carpeta específica de la API, verán las instrucciones exactas de qué se probó, cómo funciona la arquitectura y cómo correrlo.

Aquí tienes el formato melo y estructurado para Karate:

Markdown
# 🎯 API Testing Suite - Swagger PetStore

Este módulo contiene la automatización de pruebas para los servicios REST de **PetStore**, desarrollada con **Karate Framework**. Se enfoca en validar el ciclo de vida completo de un recurso (Mascota) aplicando las mejores prácticas de diseño para pruebas de API.

---

## 🛠️ Tecnologías y Prácticas Utilizadas

* **Karate Framework (v1.4.1):** Automatización BDD nativa para APIs sin necesidad de código estructurado en Java.
* **Data-Driven Testing (Payloads Externos):** Separación estricta de la lógica del test (`.feature`) y los datos de entrada (`.json`) para facilitar el mantenimiento.
* **Aislamiento de Escenarios:** Cada caso de prueba es independiente, asegurando reportes limpios y detección rápida de fallas (Principios FIRST).
* **Inyección Dinámica:** Uso de variables dinámicas (`* set`) y manejo de IDs basados en marcas de tiempo para evitar colisiones de datos en ambientes públicos.

---

## 🏗️ Casos de Prueba Automatizados

El script `petstore.feature` cubre los siguientes escenarios interactuando directamente con los EndPoints REST:

1.  **Añadir una mascota a la tienda:** Petición `POST /pet` validando persistencia y estructura inicial (`available`).
2.  **Consultar por ID:** Petición `GET /pet/{petId}` confirmando que los datos corresponden a la mascota creada previamente.
3.  **Actualizar Mascota:** Petición `PUT /pet` modificando dinámicamente el nombre y cambiando el estatus a `"sold"` (vendido).
4.  **Consultar por Estatus:** Petición `GET /pet/findByStatus` enviando Query Params y validando mediante aserciones difusas (`contains`) que el registro modificado figure en la lista global del servidor.

---

## 📂 Estructura de Archivos Clave

```text
petstore/
├── src/test/java/
│   └── examples/
│       └── petstore/
│           ├── payload/
│           │   ├── createPet.json      # Template JSON de creación
│           │   └── updatePet.json      # Template JSON de actualización
│           ├── petstore.feature         # Scripts de prueba (Gherkin)
│           └── PetStoreRunner.java      # Ejecutor JUnit 5
└── pom.xml
