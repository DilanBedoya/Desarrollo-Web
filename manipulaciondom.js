//Obtener los datos de la pagina

let obtener = document.getElementById("cbp-hrmenu")

//Crear nuevo objeto
 
let crearboton = document.createElement("button")

//Asignar el tipo de elemento que deseamos en este caso boton

crearboton.type = 'button'

//Asignnamos un nombre o texto al boton, es decir el texto que visualizara el usuario

crearboton.innerText='Saludar!'

// Damos el evento o la accion que realizara el boton al ser accionado

crearboton.addEventListener('click',function(){
    alert("Accion iniciada exitosamente")
});

// Por ultimo a obtener donde se encuentra los datos de la pagina le asignamos el objeto creado 
obtener.appendChild(crearboton)


