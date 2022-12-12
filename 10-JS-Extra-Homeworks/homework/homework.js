// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  // let arreglo = []
  // for(let props in objeto ){
  //   arreglo.push(props, objeto[props]);  
  // }
  let arreglo = []
  for(let key in objeto ){
    arreglo.push(key, objeto[key]);  // ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  }
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for (let i = 0; i < string.length; i++) {
    
    if(!objeto.hasOproperty(string[i])){
      objeto[string[i]]= 0;
    }
    objeto[string[i]]++;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let min = ""
  let may = ""
  for (let i = 0; i < s.length; i++) {
    if( s[i] === s[i].toUpperCase()){
        may += s[i]
    }else{
      min += s[i]
    }    
  }
  return may + min;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frase = str.split(" ").map(function(element){ 
    return element.split("").reverse().join("")
  }).join(" ") //split en este caso separa las palabras(arreglo de palabras)
  //.map recorre el arreglo palabra obtenida del split, luego con la funcion
  // busca elemento para juntarlo, dar vuelta esa palabra y juntar, por ultimo el 
  // junta nuevamente la palabra con un espacio entre palabras
 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let string = numero.toString();
  let stringInvertida = "";

  string = stringInvertida.split("").reverse().join("")
  if (string = stringInvertida){
      return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let letras = "";
  for (let i = 0; i < cadena.length; i++) {
       if (cadena[i] !=="a" && cadena[i] !=="b" && !cadena[i] !=="c") {
          letras += cadena[i]
       }
       return letras;
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

                                //para recorrer el indice de una array con string lo hacemos
                                //con menos -1, porque si no da undefined, entonces empieza desde el cero 
  var condition = true;
  while (condition) {
   condition = false;
    for (let i = 0; i < array.length - 1; i++) {
      if(arr[i].length > arr[i+1]){
        var palabraLarga = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = palabraLarga
        condition = true;  
      }
  }
  }
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  var nuevoArray = []
  for (let i = 0; i < arreglo1.length; index++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]) {
          nuevoArray.push(arreglo2[j]) ;
      }      
    }
    
  }
  return nuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

