import { Duration, Task, Wait } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { inventory } from '../ui/inventario.ui';

export const AgregarProducto = {
    alCarrito: () =>
        Task.where('#actor agrega la maleta y camiseta al carrito de compras', 
            Click.on(inventory.botonAgregarBolso()),
            Click.on(inventory.botonAgregarCamiseta()),
            //Se agrega espera que se pueda visualizar que agrega 2 productos
            Wait.for(Duration.ofSeconds(5)),
            Click.on(inventory.botonCarroDeCompras()),
            Click.on(inventory.botonCheckout())
        )
};