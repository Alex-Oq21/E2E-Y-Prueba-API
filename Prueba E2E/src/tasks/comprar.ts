import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { carroCompras } from '../ui/carroCompras.ui';

export const comprar = {
    bolso: (nombre: string, apellido: string, codigoPostal: string) => 
        Task.where('#actor compra maleta y camiseta', 
            Enter.theValue(nombre).into(carroCompras.campoNombre()),
            Enter.theValue(apellido).into(carroCompras.campoApellido()),
            Enter.theValue(codigoPostal).into(carroCompras.campoCodigoPostal()),
            Click.on(carroCompras.botonContinuar()),
            Click.on(carroCompras.botonFinalizar())
        )
}