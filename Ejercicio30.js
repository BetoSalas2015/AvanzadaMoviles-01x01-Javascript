function Paladin(nombre) {
    this. nombre = nombre;
    this.vida = 100;
    this.mana = 100;
    this.nivel = 9;
    this.topeVida = 100;
    this.topeMana = 100;
    this.exp = 0;
    this.expGanada = 10;
    this.topeExp = 100;

    this.curar = function(jugadorDestino) {
        if(this.mana >= 15) {
            jugadorDestino.vida += 25; 
            this.mana -= 15;
        }
        else {
            console.log("No tengo maná");
        }
        this.exp += this.expGanada;
        if(this.exp > this.topeExp)
            this.levelUp();

    }

    this.meditar = function() {
        this.mana += 15;
        this.vida += 10;
        this.exp += this.expGanada;
        if(this.exp > this.topeExp)
            this.levelUp();

    }

    this.atacar = function(jugadorDestino) {
        jugadorDestino.vida -= 20;
        if(jugadorDestino.vida <= 0) {
            console.log(jugadorDestino.nombre + " ha muerto");
        }
        this.exp += this.expGanada;
        if(this.exp > this.topeExp)
            this.levelUp();
    }

    this.levelUp = function() {
        this.nivel++;
        this.topeVida *= 1.15;
        this.topeMana *= 1.2;
        this.topeExp *= 1.2;
        this.expGanada *= 1.1;
        this.mana = this.topeMana;
        this.vida = this.topeVida;

        if(this.nivel === 10) {
            this.exorcizar = function(jugadorDestino) {
                if(jugadorDestino instanceof Paladin)
                    jugadorDestino.vida -= 80; 
            }
            else {
                console.log("Destino invalido");
            }
        }
            

    }
}

var Cathelwinn = new Paladin("Cathelwinn");
var Jessian = new Paladin("Jessian");

console.log( Cathelwinn );
console.log( Jessian );

Cathelwinn.atacar( Jessian );
Cathelwinn.atacar( Jessian );
Cathelwinn.atacar( Jessian );
Cathelwinn.curar( Jessian );
Cathelwinn.curar( Jessian );
Cathelwinn.curar( Jessian );
Cathelwinn.atacar( Jessian );
Cathelwinn.atacar( Jessian );
Cathelwinn.meditar();
Cathelwinn.meditar();
Cathelwinn.meditar();
Cathelwinn.exorcizar(Jessian);


console.log(Jessian);
console.log( Cathelwinn );
