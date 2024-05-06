//Funciones en javaScript


//Uso de funcion y reutilización 

function Welcome(){
    console.log("Bienvenidos a nuestro trabajo de funciones");
    console.log("Trabajando con JS");
}

Welcome()

//Funciones declaradas y expresadas 

function declarada(){
    console.log("Esto es una función declarada");
}
declarada()

const expresada = function(){
    console.log("Esto es una función desexpresada");
}
expresada()

//Funciones anonimas 

//esta función se ejecuta automaticamente porque esta contenida dentro
//otra acción 

console.log(function(){
    return "Este mensaje es generado por una función anónima"
}());

//Esta funcion se ejecuta automaticamente porque esta entre
//parentesis 

(function(){
    console.log("función para validar el precio final de un producto en mobileStore")
})

()

//En una función se puede especificar los parámetros necesarios para ejecutarla
function Calcular_precio(Price1,Price2){
    
    return "El precio total de su compra es = " + (Price1 + Price2);
}
//Como javascript es un lenguaje de tipado dinámico no debemos especificar
//el tipo de variable, el lenguaje lo detecta

console.log(Calcular_precio(5,9))

//Aquí podemos especificar parametros opcionales para un función
//si el usuario no manda nada se llena con un valor por defecto
function get_names(nameOne, nameTwo = "invitado") {
    //agregue un condicional, por cuestiones de nuestro lenguaje
    if (nameTwo === "invitado") {
        return "Sean bienvenidos " + nameOne + " e " + nameTwo;
    } else {
        return "Sean bienvenidos " + nameOne + " y " + nameTwo;
    }
}

//en el primer ejemplo mandamos dos valores
console.log(get_names('Dilan','Alexis'))
//en el segundo solo uno y el otro se llena por defecto
console.log(get_names('Dilan'))

//En una función se pueden especificar parametros rest
//Estos son aquellos que te permite capturar un numero INDEFINIDO
//De parametros

const precioCarrito = function(a,b,...args){
    let suma = 0;
    var total = suma+a+b
    if(args.length>0) args.forEach(e =>total+=e)
    return total
}

//Podemos mandar el numero de parametros que nos apetezca
console.log(precioCarrito(10,20,40,50,10,5,18))
console.log(precioCarrito(10,20))

//Las funciones pueden retornar todo tipo de valores
function retorno(){
    
    //return "hola Js"
    //return 123 
    //return true 
    return ['Peter','Mike','Camila','Joe']
    //return {
    //name:"Freddy",
    //lastname:"Villavicencio",
    //age:21
    //}
    //return function(){
    //return "Hello Js"
    //}
}
console.log(retorno())

// esta es una función clásica de JavaScript
function login(user,password){
    console.log("Usuario y password válidos");
}


//Esta es un función flecha
//Se declara utilizando la sintaxis de flecha () => {}

const validarMail = (user,email)=>{
    console.log("El email ha sido verificado")
}

//otro ejemplo de funcion flecha mas simplificado
const registrarAvatar = (photo)=>console.log("El avatar ha sido registrado");

login()

validarMail()

registrarAvatar()

//las arrow function tambien existe el "this"
//pero tiene una semantica diferente
//Este es un ejemplo 

const persona = {
    nombre: "Dilan",
    saludar: function () {
    setTimeout(() => {
        console.log("Hola, mi nombre es " + this.nombre)
        }, 5000);
    },
}
persona.saludar()

