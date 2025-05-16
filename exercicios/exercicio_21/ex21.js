let adc = document.getElementById('adc')
let fin = document.getElementById('fin')
let tab = document.getElementById('res')
let num_id = document.getElementById('numero')
let valores = []

adc.addEventListener('click',adicionar)
num_id.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})
fin.addEventListener('click',finalizar)

function adicionar(){
    let num = Number(num_id.value)
    if (num < 1 || num > 100 || isNaN(num)){
        alert('Número digitado está incorreto ou não foi digitado.')
    } else if (valores.indexOf(num) != -1) {
        alert('O número já foi digitado.')
    } else {
        valores.push(num)
        tab.innerHTML += `<option>Valor ${num} adicionado.</option>`
        let res = document.getElementById('res2').innerHTML = ''
    }
    num_id.value = ''
    num_id.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Não é possível finalizar.')
    } else{
        valores.sort((a,b) => a - b)
        let res = document.getElementById('res2')
        let total = 0
        for (let x = 0; x < valores.length; x++){
            total = total + valores[x]
        }
        let media = total / valores.length
        res.innerHTML = `
            <p class="p_res">Ao todo, temos ${valores.length} números cadastrados.</p>
            <p class="p_res">O maior valor informado foi ${valores[valores.length - 1]}.</p>
            <p class="p_res">O menor valor informado foi ${valores[0]}.</p>
            <p class="p_res">Somando todos os valores, temos ${total}.</p>
            <p class="p_res">A média dos valores digitados é ${media.toFixed(2)}.</p>`
    }
}
