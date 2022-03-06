let obj = {
  nombre: "Miguel",
  edad: 44,
  apellidos: "Frausto",
  keypress: function () {
    console.log("Se ha pressnado una tecla");
  },
  mouseOver: function () {
    console.log("El puntero del mouse esta arriba");
  },
};
// en ambos casos muestra Miguel
// El primero mediante el parametro nombre y el otro mediante la key del obj
console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "keypress";
console.log(obj[myKey]);
myKey = "mouseOver";
console.log(obj[myKey]);

/* Al llamar mediante la key los parametros
Se muestra en pantalla, pero en el caso de las funciones del
no se muestran mas que un [Function: nombre] de la función
esto indica que las funciones se pasaron como  obj sin ejecutarse
*/

let myArray = [];

myArray.push(4);
myArray.push("una cadena");
myArray.push(obj);
myArray.push(function () {
  console.log("hola desde el array");
});
console.log(myArray);

/*Al llamar el array se muestra el valor int, la cedena string y el object que creamos
con todas sus caracteristicas que contiene incluido la función la cual aparece como anonymous*/
console.log(myArray[2]["mouseOver"]);

/* Si la llamo simplemente desde su valor no se ejecuta, necesita tener agregados
los parentesis para indicar que se va ejecutar de lo contrario no se ejecuta  */
// ejecución
console.log(myArray[2].mouseOver());
// De esta manera si muestra el text debido a la función ejecutada
// por alguna razón aparece un despues del texto de la función mouseOver
console.log(myArray[3]());
// También ejecuta la función pero después de esta aparece un undefined

let funcArray = [];

funcArray.push(() => {
  console.log("Function 1");
});

funcArray.push(() => {
  console.log("Function 2");
});

funcArray.push(() => {
  console.log("Function 3");
});

funcArray.forEach((f) => {
  f();
});

// Esta vez se ejecutaron y no apareció ningun undefined
