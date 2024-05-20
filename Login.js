//importando con commonJS

//const authenticate = require('./auth');
//const messages = require('./messages');

//Importando con Modules
import { authenticate } from "./auth.js";
import { messages } from "./messages.js";

//Imporamos los modulos para usarlos en nuestro archivo principal

//Ejecutamos nuestro programa. 
console.log(messages.welcome);

//Usamos un operador ternario para la verificación 
authenticate((isAuthenticated, username) => {
    console.log(isAuthenticated ? messages.success.replace('{username}', username) : messages.incorrectCredentials);
});
