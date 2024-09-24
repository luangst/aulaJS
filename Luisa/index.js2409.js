/*function imprimirOlaMundo() {
    console.log("Olá Mundo!")
}
imprimirOlaMundo()


function imprimirnome(nome){
console.log(`Olá ${nome}`)
}

imprimirnome("Layla")
imprimirnome("Tainara")
imprimirnome("Emilly")*/


/*function imprimirsoma(num1, num2){
    const soma= num1 + num2
    return soma//pode ser direto num1+num2
}

const calculoDaSoma = imprimirsoma(3, 7)
console.log(imprimirsoma(3, 7))*/


/*let array= [10, 11, 12, 13, 14]

function listaNumero(array2){
  let novoArray=[]
  let a = array2 [0] / 2
  let b = array2 [4] / 2
  novoArray.push(a, b)
  return novoArray 
}

listaNumero(array)
console.log(listaNumero(array))*/


/*const listNome = function(nome){
    const nomes= (`Olá ${nome}`)
    return nomes
    }
    
const listNome2= listNome('Layla, Tainara, Emilly')
console.log(listNome2)*/



const imprimirsoma = (num1, num2) => {
    const soma= num1 + num2
    return soma
}

const calculoDaSoma = imprimirsoma(3, 7)
console.log(imprimirsoma(3, 7))
