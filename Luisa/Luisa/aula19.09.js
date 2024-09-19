/*let nome= prompt("Qual o seu nome?")
let corFav= prompt("Qual a sua cor favorita?")

const frase = " A cor favorita de " + nome + " é " + corFav 
console.log(frase)//imprimiu certo (lembrar de dar espaço nas aspas)*/


/*let frase= prompt ("Escreva uma frase")
const fraseM= frase.toUpperCase (frase)
console.log(fraseM)//certo

const novaFrase= frase.replaceAll("o","i")
console.log(novaFrase)//certo

console.log(frase.length)//certo*/


/*let numero= prompt("digite um numero de 0 a 4")
const listaDeRaças=["golden","beagle","chihuahua","pastor alemão","buldogue"]
const lista= listaDeRaças[numero]
console.log(lista)*/


const listNum=[1,2,3,4,5,6]
console.log(listNum.length)

listNum.push(7)
console.log(listNum)

listNum.splice(3,2)
console.log(listNum)

console.log(listNum.length)