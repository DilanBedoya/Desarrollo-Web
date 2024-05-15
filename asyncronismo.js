let API = 'https://rickandmortyapi.com/api/character/2';


async function getName2(pasarApi) {
    try {
        const response = await fetch(pasarApi)
        const data = await response.json()
        let name = data.name
        console.log(`Nombre del personaje: ${name}`);
    
    } catch (error) {
        console.log(`Ha ocurrido un error: ${error}`);
    }

}


async function asincronismo() {
    console.log("Obteniendo personaje de la API de Rick y Morty");
    await new Promise(resolve => setTimeout(resolve, 2000)); //simular asincronismo
    getName2(API);
}

asincronismo()



//función para obtener personaje de la api - método desactualizado

// function getName(pasarApi) {
//     fetch(pasarApi)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             let name = data.name
//             console.log(name);
//         })
//         .catch(error => {
//             console.log('Error al obtener el personaje: ', error);
//         });
// }



// Asincronismo con callbacks - puede ocurrir callback hell
// function asincronismo(callback) {
//     console.log("Obteniendo personaje de la API de rick y morty");
//     setTimeout(() => {
//         return getName2(API);
//     }, 2000)
// }


