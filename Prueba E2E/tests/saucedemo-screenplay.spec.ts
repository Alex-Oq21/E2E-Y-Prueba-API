import { test } from '@playwright/test';
import { actorCalled } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Ensure, equals } from '@serenity-js/assertions';
import { Navigate, Text } from '@serenity-js/web';
import { Autenticarse } from '../src/tasks/autenticarse';
import { AgregarProducto } from '../src/tasks/agregarProductos';
import { carroCompras } from '../src/ui/carroCompras.ui';
import { comprar } from '../src/tasks/comprar';

test.describe('Flujo de compras en Swag labs', () => {

  test('El usuario deberia poder autenticarse agregar la maleta y el bolso al carrito exitosamente y completar la compra', async ({ page }) => {

    const alexis = actorCalled('Alexis').whoCan(BrowseTheWebWithPlaywright.usingPage(page));

    await alexis.attemptsTo(
      Navigate.to('/'),
      Autenticarse.conCredenciales('standard_user', 'secret_sauce'),
      AgregarProducto.alCarrito(),
      comprar.bolso('Alexis', 'Oquendo', '08003'),

      Ensure.that(
        Text.of(carroCompras.textoCompraExitosa()),
        equals('Thank you for your order!')
      ),

      Ensure.that(
        Text.of(carroCompras.textoDescripcionCompraExitosa()),
        equals('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
      )
    );
  });
});