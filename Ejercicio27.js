function persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}


persona.prototype.getFullName = function() {
    return this.nombre + ' ' + this.apellido;
}

var juan = new persona("Juanito", "Pérez");
var pedro = new persona("Pedro", "López");

console.log(juan.getFullName());
console.log(pedro.getFullName());