var persona = {
    nombre: "Juanito",
    apellido: "Pérez",
    getNombre: function(lang) {
        var nombreCompleto = this.nombre + ' ' + this.apellido + '(' + lang + ')';
        return nombreCompleto; 
    }
};

var persona2 = {
    nombre: "Pedrita",
    apellido: "López"
};

console.log( persona.getNombre.apply(persona2, ['español']));