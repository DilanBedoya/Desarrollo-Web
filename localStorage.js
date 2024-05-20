//Codigo utilizado para la ejemplificación 

//Guardamos información en el local storage
"use strict";
fetch('https://jsonplaceholder.typicode.com/users/1')
     .then(response => response.json())
     .then(json => {
         {
             let usuario ={
                 name:json.name,
                 username:json.username,
                 email:json.email
             }
             guardarLocalStorage(usuario)
         }
     })
 const guardarLocalStorage = (data)=>{
     localStorage.setItem('user',JSON.stringify(data))
}

//Usamos una funcion get para obtener esa información
 "use strict";
 const obtenerLocalStorage =()=>{
     const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "No hay data"
     console.log(respuesta);
 }
 obtenerLocalStorage()

 //Eliminamos la información del local storage. 
"use strict";
 const eliminarlocalStorage =()=>{
     !localStorage.key("user") ? console.log("No hay clave" ): localStorage.removeItem("user")
 }
 eliminarlocalStorage()