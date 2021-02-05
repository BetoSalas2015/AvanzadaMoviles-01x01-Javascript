var a = 3;
console.log( typeof a );

var b = "hola";
console.log( typeof b);

var c = {};
console.log( typeof c );

var d = [];
console.log( typeof d );
console.log( Object.prototype.toString.call(d) );

function persona(name) {
    this.name = name;
}

var e = new persona('juan');
console.log( typeof e );
console.log( e instanceof persona );

console.log(typeof undefined);
console.log(typeof null );