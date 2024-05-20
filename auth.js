//Importando con commonjs

//const readline = require('readline');
//const messages = require('./messages');

//importando con modules
import { messages } from "./messages.js";
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Función para validar la clave y contraseña del login
function authenticate(callback) {
  rl.question(messages.enterUsername, (username) => {
    rl.question(messages.enterPassword, (password) => {
      const isAuthenticated = username === "frevill" && password === "Montier";
      callback(isAuthenticated, username);
    });
  });
}

//exportando con common js
//module.exports = authenticate;

//exportando con modules
export {authenticate}