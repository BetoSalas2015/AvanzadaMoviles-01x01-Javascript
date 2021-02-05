function mapForEach( arr, fn) {
    var arr2 = [];
    for(var i = 0; i < arr.length; ++i) {
        arr2.push( fn( arr[i] ) );
    }
    return arr2;
}

var arreglo1 = [1, 2, 3];
var arreglo2 = mapForEach( arreglo1, function(value) { 
    return value * 2;
});

var arreglo3 = mapForEach(arreglo1, function(value) {
    return ((value % 2) === 0);
} );

console.log( arreglo1 );
console.log( arreglo2 );
console.log( arreglo3 );