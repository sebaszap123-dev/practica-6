var Emitter = require("./emitter");

var emtr = new Emitter();
emtr.on("greet", () => {
  console.log("Somewhere only we kwon");
});

var emtr = new Emitter();
emtr.on("greet", () => {
  console.log("Your greet for cry with a good song is here!");
});

console.log("Saludo muy x");
emtr.emit("greet");

// Muy hermosamente se ejecutan ambas funciones,
// sinceramente me gusta mucho entender como se puede llamar funciones.
// mediante "mapeos" de los nombres en los objectos

emtr.on("jump", () => {
  console.log("Someone jumped!");
});

console.log(emtr);
emtr.emit("jump");
// La forma que tiene emtr actualmente es la siguiente
/* Emitter {
  events: [
    greet: [ [Function (anonymous)] ],
    jump: [ [Function (anonymous)] ]
  ]
}*/

// guardando en el array events las funciones
