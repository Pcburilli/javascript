let adc = document.getElementById('adc')
let fin = document.getElementById('fin')
let tab = document.getElementById('res')
let valores = []

adc.addEventListener('click',adicionar)
fin.addEventListener('click',finalizar)

function adicionar(){
    let num = Number(document.getElementById('numero').value)

    if (num < 1 || num > 100 || isNaN(num)){
        alert('Número digitado está incorreto ou não foi digitado.')
    } else if (valores.indexOf(num) != -1) {
        alert('O número já foi digitado.')
    } else {
        tab.innerHTML += `<option>Valor ${num} adicionado.</option>`
        valores.push(num)
        let res = document.getElementById('res2').innerHTML = ''
    }
}

function finalizar(){
    valores.sort()
    let res = document.getElementById('res2')
    let total = 0
    for (let x = 0; x < valores.length; x++){
        total = total + valores[x]
    }
    let media = total / valores.length
    res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados`
    res.innerHTML += `<br><br>O maior valor informado foi ${valores[valores.length - 1]}.`
    res.innerHTML += `<br><br>O menor valor informado foi ${valores[0]}.`
    res.innerHTML += `<br><br>Somando todos os valores, temos ${total}.`
    res.innerHTML += `<br><br>A média dos valores digitados é ${media.toFixed(2)}.`
}
