class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemons = [];
    }

    catchPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
    
    getPokemons() {
        return this.pokemons;
    }
}

module.exports = Trainer;