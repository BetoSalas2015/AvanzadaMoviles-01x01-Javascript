function Jugador(nombre) {
    this. nombre = nombre;
    this.vida = 100;
    this.mana = 100;

    this.curar = function(jugadorDestino) {
        if(this.mana >= 15) {
            jugadorDestino.vida += 25; 
            this.mana -= 15;
        }
        else {
            console.log("No tengo maná");
        }

    }

    this.atacar = function(jugadorDestino) {
        jugadorDestino.vida -= 20;
        if(jugadorDestino.vida <= 0) {
            console.log(jugadorDestino.nombre + " ha muerto");
        }
    }
}

var Cathelwinn = new Jugador("Cathelwinn");
var Jessian = new Jugador("Jessian");

console.log( Cathelwinn );
console.log( Jessian );

Cathelwinn.atacar( Jessian );
Cathelwinn.atacar( Jessian );
Cathelwinn.curar( Jessian );
Cathelwinn.curar( Jessian );
Cathelwinn.atacar( Jessian );
Cathelwinn.atacar( Jessian );

console.log(Jessian);
console.log( Cathelwinn );
