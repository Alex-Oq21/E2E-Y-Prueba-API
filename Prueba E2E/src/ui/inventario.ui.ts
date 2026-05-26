import { By, PageElement } from '@serenity-js/web';

export class inventory {

    static botonAgregarBolso = () =>
        PageElement.located(By.css('[data-test="add-to-cart-sauce-labs-backpack"]')).describedAs('botón agregar maleta');

    static botonCarroDeCompras = () =>
        PageElement.located(By.css('[data-test="shopping-cart-link"]')).describedAs('ícono del carrito');

    static botonAgregarCamiseta = () =>
        PageElement.located(By.css('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).describedAs('botón agregar camiseta');

    static botonCheckout = () =>
        PageElement.located(By.css('[data-test="checkout"]')).describedAs('botón para iniciar la compra');

}