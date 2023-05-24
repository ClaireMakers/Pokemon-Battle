class Pokemon {
    #healthPoints
    #attackDamage

    constructor(healthPoints, attackDamage, name) {
        this.#healthPoints = healthPoints;
        this.#attackDamage = attackDamage;
        this.name = name;
    }

    getName() {
        return this.name;  
    }

    getHealthPoints() {
        return this.#healthPoints;
    }

    getAttackDamage() {
        return this.#attackDamage;
    }

    setHealthPoints(healthPoints) {
        this.#healthPoints = healthPoints;
    }
}

module.exports = Pokemon;
