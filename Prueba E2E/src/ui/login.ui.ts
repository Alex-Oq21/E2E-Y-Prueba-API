import { By, PageElement } from '@serenity-js/web';

export class LoginUI {
  static inputUsuario = () => 
    PageElement.located(By.css('[data-test="username"]')).describedAs('campo de usuario');

  static inputContrasena = () => 
    PageElement.located(By.css('[data-test="password"]')).describedAs('campo de contraseña');

  static botonLogin = () => 
    PageElement.located(By.css('[data-test="login-button"]')).describedAs('botón de iniciar sesión');
}