import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { LoginUI } from '../ui/login.ui';

export const Autenticarse = {
    conCredenciales: (usuario: string, clave: string) =>
        Task.where('#actor intenta autenticarse en la aplicacion',
            Enter.theValue(usuario).into(LoginUI.inputUsuario()),
            Enter.theValue(clave).into(LoginUI.inputContrasena()),
            Click.on(LoginUI.botonLogin())
        )
};