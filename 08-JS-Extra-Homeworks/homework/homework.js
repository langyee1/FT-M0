// No cambies los nombres de las funciones.

const { mayuscula } = require("../../07-JS-VI/homework/homework");

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
  var matriz = [];
  for (var i = 0 ; i < Object.keys(objeto).length ; i++){
      matriz.push([Object.keys(objeto)[i],Object.values(objeto)[i]]);
    }
  return matriz; 
  //for(var index in objeto){
    //matriz.push([index,objeto[key]]);
  //}
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 
  // var temp = String.prototype.split(string);
  // console.log(temp);

//   var objOfCharacts = {};
//   for(let i = 0; i < string.length; i++){
//     let counterLetter = 1;
//     if(!objOfCharacts[string[i]]){
//     objOfCharacts = {
//       ...objOfCharacts,
//       [string[i]]: counterLetter,
//     }
//   }
//   else {
//     objOfCharacts = {
//       ...objOfCharacts,
//       [string[i]]: objOfCharacts[string[i]] + 1
//     }
//   }
// }
//   return objOfCharacts;

  var obj = {};
  var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (var i=0;i<abc.length;i++){
    var temp = 0;
    for(var j=0;j<string.length;j++){
      if(abc[i]===string[j]){
        temp += 1;
      } 
    }
  if(temp === 0){
    continue; 
  }
  else {
    obj[abc[i]] = temp;
  }
    
}

return obj; 
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = '';
  var minus = '';
  // var r = '';
  for(var i=0;i<s.length;i++){
    if(s[i]===s[i].toUpperCase()){
      mayus = mayus + s[i];
    }
    else {
      minus = minus + s[i];
    }
  }
  return mayus.concat('',minus);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function reverse(palabra){
    var nueva = '';
    for (var i = palabra.length-1; i >= 0; i--) {
      nueva = nueva + palabra[i];
    }
    return nueva; 
  }
  var array1 = str.split(' ');
  var array2 = array1.map(element => reverse(element));
  
  return array2.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var check = 'Es capicua'; 
  for (var i = 0 ; i <  Math.floor(numero.toString().length/2) ; i++){
    if(numero.toString()[numero.toString().length-i-1] !== numero.toString()[i]){
      check = 'No es capicua'; 
    }
  } 

  return check; 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = cadena.split('').filter(elemento => elemento !== 'a' && elemento !== 'b' && elemento !== 'c');
  return array.join(''); 

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
 
  var nuevo =[]; 
  for(var i=0; i<arr.length; i++){
    nuevo.push([arr[i].length,arr[i]]);
  }
  
  nuevo = nuevo.sort(); 
  console.log(nuevo);

  for(var i=0;i<arr.length;i++) {
    nuevo[i] = nuevo[i][1];
  }

  return nuevo; 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevo = [];
  for(var i=0 ; i < Math.max(arreglo1.length,arreglo2.length) ; i++){
    for(var j=0 ; j < Math.max(arreglo1.length,arreglo2.length) ; j++){
      if(arreglo1[i]===arreglo2[j]){
        nuevo.push(arreglo1[i]);
      }
    }
  }
  return nuevo; 
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

