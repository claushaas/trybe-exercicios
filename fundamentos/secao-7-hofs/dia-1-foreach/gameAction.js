const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragonStrength) => Math.floor(Math.random() * (dragonStrength + 1 - 15)) + 15

const warriorDamage = (warriorStrength, weponDamage) => Math.floor(Math.random() * (warriorStrength * weponDamage) + 1 - warriorStrength) + warriorStrength

const mageDamage = (mageIntelligence, mageMana) => ({
  damage: Math.floor(Math.random() * ((mageIntelligence * 2)+ 1 - mageIntelligence)) + mageIntelligence,
  mana: mageMana < 15 ? 'Não possui mana suficiente' : 15,
})

const gameActions = {
  warriorRound: (callback) => {
    const damage = callback(warrior.strength, warrior.weaponDmg)
    dragon.healthPoints -= damage
    warrior.damage += damage
  },
  mageRound: (callback) => {
    const damage = callback(mage.intelligence, mage.mana)
    dragon.healthPoints -= damage.damage
    mage.mana -= damage.mana
  },
  dragonRound: (callback) => {
    const damage = callback(dragon.strength)
    mage.healthPoints -= damage
    warrior.healthPoints -= damage
    dragon.damage += damage
  }
};