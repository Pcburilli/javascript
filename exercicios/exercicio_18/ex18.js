function tabuada() {
    var num = Number(document.getElementById('numero').value)
    var res = document.getElementById('res')
    if (num.valueOf() == '') {
        alert('Digite um número.')
    } else{
        res.innerHTML = ''
        for (var x = 1; x <=10; x++) {
            res.innerHTML = res.innerHTML + `<option value="valor${x}">${num} x ${x} = ${num * x}</option>`
        }
    }
}