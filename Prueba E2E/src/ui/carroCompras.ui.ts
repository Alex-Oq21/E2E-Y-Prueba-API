import { By, PageElement } from '@serenity-js/web';

export class carroCompras {

    static campoNombre = () =>
        PageElement.located(By.css('[data-test="firstName"]')).describedAs('Campo nombre usuario');

    static campoApellido = () =>
        PageElement.located(By.css('[data-test="lastName"]')).describedAs('Campo apellido usuario');

     static campoCodigoPostal = () =>
        PageElement.located(By.css('[data-test="postalCode"]')).describedAs('Campo Codigo postal');


     static botonContinuar = () =>
        PageElement.located(By.css('[data-test="continue"]')).describedAs('Boton para continuar');

     static botonFinalizar = () =>
        PageElement.located(By.css('[data-test="finish"]')).describedAs('Boton para finalizar compra');

      static textoCompraExitosa = () =>
        PageElement.located(By.css('[data-test="complete-header"]')).describedAs('texto de confirmacion de la compra');

     static textoDescripcionCompraExitosa = () =>
        PageElement.located(By.css('[data-test="complete-text"]')).describedAs('texto descripcion de despacho de la compra');
    
}