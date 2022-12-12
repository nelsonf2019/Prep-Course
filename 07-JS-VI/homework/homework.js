// Do not change any of the function names

const readingTime = require("henry-reading-time/lib/reading-time");

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
   
      let letra = nombre[0].toUpperCase();    
      let otra = nombre.slice(1);//slice: empíeza a tomar la posicion a partir del numero inidicado
      return letra + otra;
  
   
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
      // let suma = n1+n2
      // cb(suma)
  cb(n1,n2);
}
 

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = 0;
  // numeros.forEach(elementosDelAarray =>{
  //   suma = suma + elementosDelAarray;
  // });
  numeros.forEach(element => {
    suma = suma + element;
  });
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // var  Arrray = []
  // for(let i = 0; i < Arrray.length; i++){
  //   cb(array[i]);
  // }
  array.forEach(element => {
    cb(element);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let nuevoArray = []

  // for(let i = 0; i < array.length; i++){
    
  //   nuevoArray.push = cb(array[i])
  // }
  array.forEach(element => {
    nuevoArray.push = cb(element);
  });
  return nuevoArray;

  // var nuevoArray = array.map(function(numero){
  //   return cb(numero)
  // })
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código: 
  var nuevoArray =[] //una palabra tambien es un array con posiciones
  for(let i = 0; i < array.length; i++){
  
    if(array[i][0] === 'a') {
        nuevoArray.push(array[i][0])
    }  
  }

  return nuevoArray;
  // var nuevoAarray = array.map(function(palabra)){
    // if(palabra[0] === 'a'){

  //      }
    //  }

  }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
