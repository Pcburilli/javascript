var c = 1
while (c <= 10){
    console.log(`Repetiu ${c} vezes.`)
    c++
} // Repetição com teste lógico no início.
console.log('-')
var x = 1
do {
    console.log(`Repetiu ${x} vezes.`)
    x++
} while(x <= 10) // Repetição com teste lógico no final.
console.log('-')
for(var y = 1;y <= 10; y++){
    console.log(`Repetiu ${y} vezes.`) 
} // Usado quando sabemos onde queremos parar a repetição. É composto por: (início; teste; incremento)