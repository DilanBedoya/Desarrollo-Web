
//console.log("Hellow world")

//variables

const sistemaOperativo='iOS'

let precioIphone=2149.00 

//Uso del let
let estadoUno = true


if (estadoUno) {
     let estadoUno = false
    //console.log(estadoUno)
 }
//console.log(estadoUno)


for (let i =0; i<10; i++){
   // console.log(i)
}

const estadoDos=true

if(estadoDos){
    const estadoDos= false
   // console.log(estadoDos)
}
//console.log(estadoDos)

//const i
for(i=0; i<10; i++){
    //console.log(i)
}

//STRINGS


let chip="A17 Pro"


    //Metodos
    let formUsername = 'Monica'
    //console.log("Numero de letras: ",formUsername.length)
    let emailUser = 'monica@gmail.com'
    //console.log("Encotrar el patrón:",emailUser.includes("@gmail.com"));
    let nombreProducto="iPhone 15 Pro Max"
    //console.log("Convertir a mayúsculas y presentar en la UI:",nombreProducto.toUpperCase());
    let addressUser = 'VENECIA E4S2'
    //console.log("Convertir a minusculas",addressUser.toLowerCase());
    let formLastName = '    Jana  '
    //console.log("Útil para quitar espacios adelante y atrás en el campo del formulario:",formLastName.trim());
    let discountProduct = "El precio de descuento es del 20%"
    //console.log("Útil para reemplazar el precio de un descuento:",discountProduct.replace('20%','50%'));
    let detailProduct = "El procesador A17 Pro permite al iPhone 15 Pro Max realizar tareas exigentes con facilidad, como jugar a juegos de alta gama o editar vídeos en 4K. "
    //console.log("Útil para hacer el efecto leer más o expander de un texto largo:",detailProduct.slice(0,50)+'....');
    let creditCardUser = "1234 5678 9851 9937"
    //console.log("Útil para cortar número de tarjeta de crédito en el proceso de facturación:",creditCardUser.substring(15,19));
    let numFlight = "AA4569"
    //console.log("Útil para saber el prefijo del vuelo que indica la aerolínea:",numFlight.charAt(0)+numFlight.charAt(1));
    let userAdmin = "Dilan Bedoya"
    let avatarUser = userAdmin.split(" ")
    //console.log("Útil para cortar un texto y colocar como avatar de perfil:",avatarUser[0].charAt(0),avatarUser[1].charAt(0));

//Template Literals

const name = "Dilan"
const lastName= "Bedoya"
const city ="Quito"
const age = 21
const active = false
//console.log(name+"-"+lastName+"-"+city)
//console.log(`${name} - ${lastName} - ${city} - ${active ? age : 'No se encuentra activo'}`);

//Numeros

// Es importante reconocer el tipo de valor asignado
const numeroVidas = "20"
const numeroPuntos = 20

//console.log(numeroPuntos,numeroVidas);
//console.log(typeof(numeroPuntos), typeof(numeroVidas));

//console.log("suma:",numeroPuntos+20);
//console.log("resta:",numeroPuntos-20);
//console.log("multiplicación:",numeroPuntos*20);
//console.log("división:",numeroPuntos/20);
//console.log("módulo:",numeroPuntos%20);


// Importante el manejo de operadores de incremento y decremento
let numeroPuntosActual = 20

//console.log(++numeroPuntosActual );
//console.log(numeroPuntosActual++);

let numeroVidasActual = 20

//console.log(--numeroVidasActual);
//console.log(numeroVidasActual--);

    //Metodos
    //console.log("El método Math es un: ", Math);
    //console.log("Para obtener la constante PI:",Math.PI);
    //console.log("Para redondear el precio de un producto: ", Math.round(2.43));
    //console.log("Para sacar la raíz cudrada de un valor:", Math.sqrt(25));
    //console.log("Para sacar el valor absoluto de un valor:",Math.abs(-450));
    //console.log("Para sacar el exponente de un valor:", Math.pow(2,5));
    //console.log("Para obtener el valor mínimo de entre 2 valores:", Math.min(10,4));
    //console.log("Para obtener el valor máximo de entre 2 valores:", Math.max(58,-4));
    //console.log("Para obtener el valor random de entre o a 20:", Math.round(Math.random()*20));

    //PRESEDENCIA DE OPERACIONES
    //la multiplicación tiene mayor precedencia que la suma y se ejecuta primero, a pesar de que la suma se escribe primero en el código.
    //console.log(3 + 4 * 5)
    //console.log(4 * 3 ** 2)
    //console.log(200 * 0.2)
    //console.log(200 * 1.12)

    //CONVERSIONES
    let edadJugador = "20"
    let precioJuego = "525.63"

    //console.log(Number.parseInt(edadJugador));
    //console.log(Number.parseFloat(precioJuego));

   // console.log(Number.isInteger(edadJugador));

    //console.log(`${+edadJugador + +precioJuego}`);

//BOLEANOS

// operadores de asignación 
let saldoTarjetaUsuario = 500
let saldoTarjeta = 1000
let estadoCuenta
let emailConfirmado=null


// operadores de asignación de adición
saldoTarjetaUsuario += 100
//console.log(saldoTarjetaUsuario);

// operadores de comparación
saldoTarjetaUsuario="1000"
//console.log(saldoTarjeta == saldoTarjetaUsuario)
// evalua tipo de dato y contenido
//console.log(saldoTarjeta === saldoTarjetaUsuario)
//console.log(estadoCuenta === emailConfirmado);


// operadores aritméticos
//console.log(saldoTarjeta + parseInt(saldoTarjetaUsuario));


// operadores lógicos 
//console.log(saldoTarjeta != saldoTarjetaUsuario);

// evalua tipo de dato y contenido
//console.log(saldoTarjeta !== parseInt(saldoTarjetaUsuario));

//OPERADOR TERNARIO
const respuesta = saldoTarjeta <= saldoTarjetaUsuario ? "Pagar" : "Seguir consumiendo"
//console.log(respuesta);

//CONDICIONALES SIMPLES

const carritoCompras1 = []

// utilizando el condicional clásico
if (carritoCompras1.length===0)
{
    console.log("Agregar productos")
}

// utilizando operador ternario
carritoCompras1.length===0 ? console.log("Agregar productos") :""

//CONDICIONALES DOBLES

const carritoCompras = ['Tv','Pc','Tablet','Laptop']

// utilizando el condicional clásico
if (carritoCompras.length!=0)
{
    console.log("Proceder al pago de los productos")
}
else{
    console.log("Agregar productos")
}

// utilizando operador ternario
console.log(carritoCompras.length!==0 ? "Proceder al pago de los prodcutos": "Agregar productos")

//CONDICIONALES MULTIPLES

const actividadSiri = 2

switch (actividadSiri) {
    case 1:
        console.log("Prender el equipo");
    break;
    case 2:
        console.log("Prender la tv");
    break;
    case 3:
        console.log("Cerrar cortinas");
    break;
    default:
        console.log(`No existe tarea para la actividad ${actividadSiri}`);
    break;
}

//FOR
const contador1 = 10

for (let i = contador1; i >= 0; i--) {
    
    i <=0 ? console.log("Comida lista"):console.log(i);
}

//WHILE
let contador = 10
while (contador >= 0)
{
    contador<=0 ? console.log("Comida lista"):console.log(contador)
    contador--
}

//DO-WHILE

let contador3 = 10

do {
    contador3<=0 ? console.log("Comida lista"):console.log(contador3)
    contador3--
} while (contador3 >= 0);

//ForEach - Forof - Forin -Map

const tareasPendientes = ['Trabajar','Estudiar','Nadar','Viajar','Aprender Js']
const usuario ={
    nombre:"Dilan",
    apellido:"Bedoya",
}

// uso del forEach 
// imprimirá el índice de cada tarea seguido de un guion y luego el nombre de la tarea en la consola.
tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// uso del for of -> usado para arreglos
for (const t of tareasPendientes) {
    console.log(`${t}`)
}


// uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}

// uso del map -> retorna un nuevo arreglo
const nuevasTareas = tareasPendientes.map((t)=> t)
console.log(nuevasTareas);