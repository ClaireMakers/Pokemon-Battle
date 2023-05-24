class Battle {
  constructor(trainer1, trainer2, pokemonName1, pokemonName2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemonName1 = pokemonName1;
    this.pokemonName2 = pokemonName2;
    this.pokemon1 = {};
    this.pokemon2 = {};

    this.getPokemonsForBattle();
  }

  getPokemonsForBattle() {
    let pokemonsTrainer1 = this.trainer1.getPokemons();
    let pokemonsTrainer2 = this.trainer2.getPokemons();

    const pokemon1ForRound = pokemonsTrainer1.filter((pokemon) => {
      return (pokemon.getName() === this.pokemonName1);
      // if (pokemon.getName() === this.pokemonName1) {
      //   return true;
      // }
    });

    const pokemon2ForRound = pokemonsTrainer2.filter((pokemon) => {
      if (pokemon.getName() === this.pokemonName2) {
        return true;
      }
    });

    this.pokemon1 = pokemon1ForRound[0];
    this.pokemon2 = pokemon2ForRound[0];
    console.log(this.pokemon1);
  }

  // need to "choose" two pokemons from the trainers pokemons
  // need to play a battle round
  // battle round will see the pokemon take away healthpoints from each other hp - attackDamage
    playBattleRound() {
      this.pokemon1.healthPoints = this.pokemon1.healthPoints - this.pokemon2.attackDamage;
       
      this.pokemon1.setHealthPoints(
         this.pokemon1.getHealthPoints() - this.pokemon2.getAttackDamage()
       );  
      
        this.pokemon2.setHealthPoints(
            (this.pokemon2.getHealthPoints() - this.pokemon1.getAttackDamage())
        );
      
      if (this.pokemon1.getHealthPoints() > this.pokemon2.getHealthPoints())
        return this.pokemon1;
      else
        return this.pokemon2;
  }
}

module.exports = Battle;