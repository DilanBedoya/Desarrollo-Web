//Mensajes que se van a mostrar mientras ejecutamos nuestro sistema

const messages = {
    welcome: "Bienvenido al sistema de inicio de sesión.",
    enterUsername: "Por favor, ingresa tu nombre de usuario: ",
    enterPassword: "Por favor, ingresa tu contraseña: ",
    incorrectCredentials: "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.",
    success: "Inicio de sesión exitoso. Bienvenido de nuevo, {username}!",
  };

//exportando con CommonJS
//module.exports = messages;

//Exportando con module
export{messages}