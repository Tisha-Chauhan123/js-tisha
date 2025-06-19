const marvel_heroes = ["thor", "iron_man", "spiderman"]
const dc_heroes = ["superman", "Ironman", "spiderman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)

console.log(marvel_heroes)
console.log(dc_heroes)

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

console.log(Array.isArray("Tisha"))
console.log(Array.from("Tisha"))
console.log(Array.from({name:"Tisha"}))
