console.log(this);

function b() {
    console.log(this);
}

var obj = {
    nombre: "Objeto",
    fun: function() {
        console.log(this);
        console.log(this.nombre);
    }
}

b();
obj.fun();