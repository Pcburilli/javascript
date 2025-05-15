let idades = [92,31,41]

console.log(idades)

idades.push(38) //adicionando valor
console.log(idades)

console.log(idades.length)//contando os valores no vetor

idades.sort() //colocando em ordem crescente
console.log(idades)

for (let x = 0; x < idades.length; x++){
    console.log(idades[x])
}
console.log('//') 
for (let y in idades) {
    console.log(idades[y])
}
console.log('//')
let valor = 54
let onde = idades.indexOf(valor) // procurando um valor no array
if (onde == -1) {
    console.log(`O valor ${valor} não foi encontrado.`)
} else {
    console.log(`O número ${valor} está na posisão ${onde}`)
}