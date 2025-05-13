function contar(){
    inicio = Number(document.getElementById('inicio').value)
    fim = Number(document.getElementById('fim').value)
    passo = Number(document.getElementById('passo').value)
    if (inicio === ''|| fim === '' || passo == ''){
        alert('preencha os dados corretamente.')
    } else{
        document.getElementById('res1').innerText = 'Contagem:'
        res = document.getElementById('res2')
        res.innerText = `${inicio}`
        inicio = inicio + passo
        for(var x = inicio;x <= fim; x = x + passo){
                res.innerText = `${`${res.innerText} -> ${x}`}`
            }
        }
        res.innerText = `${`${res.innerText} -> Fim`}`
}