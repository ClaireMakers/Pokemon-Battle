const Pokemon = require("./Pokemon");
const Trainer = require("./Trainer");
const Battle = require("./Battle");

const charmander = new Pokemon(20, 4, "Charmander");
const pikachu = new Pokemon(30, 2, "Pikachu");
const poliwhirl = new Pokemon(20, 3, "Poliwhirl");
const psyduck = new Pokemon(23, 1, "Psyduck");
const jigglypuff = new Pokemon(15, 7, "Jigglypuff");

console.log(charmander.getName());
console.log(poliwhirl.getHealthPoints());
console.log(psyduck.getAttackDamage());

const ash = new Trainer("Ash");
const peter = new Trainer("Peter");

ash.catchPokemon(pikachu);
ash.catchPokemon(psyduck);
ash.catchPokemon(jigglypuff);

peter.catchPokemon(charmander);
peter.catchPokemon(poliwhirl);

console.log(peter.getPokemons());
console.log(ash.getPokemons());

const battle = new Battle(ash, peter, "Pikachu", "Poliwhirl");

battle.playBattleRound();