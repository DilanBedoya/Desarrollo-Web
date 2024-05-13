// Creación del objeto post modificado
const postModified = {
  title: "The Legend of Zelda: Majora's Mask",
  page: "Nintendo Switch",
  category: "Video Games",
  details: {
    size: "12 GB",
    weight: "N/A",
    identifiers: {
      asin: "B01NCI1NQB",
      model: "SWITCH-ZELDA-MAJORA",
    },
  },
};

console.log(postModified);

// Acceso y destructuración de objetos
const {
  title,
  page,
  category,
  details: { identifiers },
} = postModified;
console.log(title, page, category, identifiers);

// Impresión del objeto completo
console.log(postModified);

// Eliminar un par de clave y valor
delete postModified.category;
console.log(postModified);

// Usando seal, no agrega ni elimina pero realiza cambios dentro del objeto
Object.seal(postModified);
console.log(Object.isSealed(postModified));
postModified.page = "Nintendo eShop";
console.log(postModified);

// Copiar objetos
const producto = {
  nombre: "Zelda Case",
  categoria: "Merchandise",
};

const info = {
  tamaño: "8 inches",
  peso: "0.2 pounds",
};

const todo = { ...producto, ...info };
console.log(todo);

// Usando this, para hacer referencia al contexto del objeto
const post = {
  nombre: "Zelda Case",
  categoria: "Merchandise",
  categorias: ["Red", "Blue", "Yellow"],
  categoriaLista: function () {
    return `categoria lista ${this.categorias[2]}`;
  },
};

console.log(post.categoriaLista);

// Obteniendo claves
console.log("Obtener las claves: ", Object.keys(post));
// Obteniendo valores
console.log("Obtener los valores: ", Object.values(post));
// Obteniendo claves y valores en un arreglo
console.log(
  "Obtener las claves y valores en un arreglo: ",
  Object.entries(post)
);

// Abreviando nombres para la creación del objeto
const nombre = "Case";
const precio = "19.99";

const newPost = {
  nombre,
  precio,
};

console.log(newPost);

// Creación del arreglo
const postArray = [
  {
    title: "The Legend of Zelda: Majora's Mask",
    page: "Nintendo Switch",
    category: "Video Games",
    details: {
      size: "12 GB",
      weight: "N/A",
      identifiers: {
        asin: "B01NCI1NQB",
        model: "SWITCH-ZELDA-MAJORA",
      },
    },
  },
  39.99,
  "Protective case for Nintendo Switch featuring iconic artwork from The Legend of Zelda: Majora's Mask. ",
];

// Accediendo a los elementos
console.log("Título del post: " + postArray[0].title);
console.log("Descripción: " + postArray[2]);
console.log("Modelo: " + postArray[0].details.identifiers.model);

// Destructuración
const [ObjDetails, price, description] = postArray;
console.log(
  `DESTRUCTURACIÓN:\ntitle:${ObjDetails}\nPrice:${price}\nDescription:${description}`
);

postArray.length < 5
  ? console.log("El array es corto")
  : console.log("El array es largo");

// Primera forma de iterar un arreglo
for (let index = 0; index < postArray.length; index++) {
  const element = postArray[index];
  console.log("\n" + element + "\n");
}
// Segunda forma de iterar con el
// método forEach
postArray.forEach((i) => console.log(i));

// Tercera forma de iterar
// Método map (No modifica el arr) los valores se pueden guardar
const newArr = postArray.map((i) => i + "map");
console.log("\nArr con map: " + newArr);

// Métodos para arrays
// push() agrega elemento al final del arr
postArray.push(14);
// unshift() agrega elemento al inicio del arr
postArray.unshift("inicio");

// pop() elimina un elemento del final del arr
postArray.pop();

// shift() elimina un elemento al inicio del arr
postArray.shift();

// slice()  es una copia sombra del arr
const copyArr = postArray.slice();
console.log("CopyArr\n" + copyArr);

// Array.isArray() Determina si es un array
Array.isArray(copyArr);
// .length Tamaño del array
console.log("Arr postArray: \n");
postArray.forEach((i) => console.log(i));

// Rest operator
const [objeto, ...rest] = postArray;
console.log("***********************");

console.log(objeto);
console.log(rest);

// Spread operator
const PostArray_newArr = [...postArray, ...newArr];
console.log("\nPostArray_newArr:\n" + PostArray_newArr);
