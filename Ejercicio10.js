var funSaludo = function(nombre) {
    console.log('Hola ' + nombre );
}

funSaludo("Roberto");

var saludo = function(nombre) {
    console.log('Hola ' + nombre );
}("Roberto");

console.log(saludo);

saludo();