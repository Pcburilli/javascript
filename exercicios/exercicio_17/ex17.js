function contar(){
    inicio = Number(document.getElementById('inicio').value)
    fim = Number(document.getElementById('fim').value)
    passo = Number(document.getElementById('passo').value)
    if (inicio.value == '' || fim.value == ''){
        alert('Preencha os dados corretamente.')
    } else if(passo <= 0){
        alert('Passo inválido.')
    } else {
        if (inicio < fim){
        document.getElementById('res1').innerText = 'Contagem:'
        res = document.getElementById('res2')
        res.innerText = ''
        for(var x = inicio;x <= fim; x = x + passo){
            res.innerText += ` ${x} \u{1F449}`
        }
        res.innerText += `Fim`
        } else{
        document.getElementById('res1').innerText = 'Contagem:'
        res = document.getElementById('res2')
        res.innerText = ''
        for(var x = inicio; x >= fim; x = x - passo){
            res.innerText += `${x} \u{1F449}`
        }
        res.innerText += ` Fim`
        }
    }
}