'use strict'

const superheroes = ['spiderman', 'batman', 'thor'];
console.log(superheroes);

for (let hero of superheroes) {
    console.log(hero);
}

console.log('use for index loop');
for (let index = 0; index < superheroes.length; index++) {
    console.log(superheroes[index]);
}
console.log('use for in loop');
for (let index in superheroes) {
    console.log(superheroes[index]);
}

// array methods
const mineHeroes = superheroes.map((hero) => {
    return hero + "_mine";
})
console.log(mineHeroes);