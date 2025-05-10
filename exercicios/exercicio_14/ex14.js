var horario = new Date().getHours()
var exp_hora = document.getElementById('p_sec')
exp_hora.innerHTML = `Agora são ${horario} horas`
if(horario >= 6 && horario < 12){
    document.getElementById('img').style.backgroundImage = "url(https://setelagoas.com.br/wp-content/uploads/2023/09/sol-calor-sl.jpg)"
    document.body.style.background ="#4170B0"
    document.getElementById('titulo').style.color ="white"
    document.getElementById('secao').style.background ="white"
    document.getElementById('p_foot').style.color ="white"
} else if(horario >= 12 && horario <= 18){
    document.getElementById('img').style.backgroundImage = "url(https://media.istockphoto.com/id/538449165/pt/foto/bela-paisagem-com-nuvens-sobre-o-mar-p%C3%B4r-do-sol-shot.jpg?s=612x612&w=0&k=20&c=01Zw-PRxdtgSgOb2NVbCb_R0rGgxQaWZgJSv_P4vhoQ=)"
    document.body.style.background ="#EB9049"
    document.getElementById('titulo').style.color ="white"
    document.getElementById('secao').style.background ="white"
    document.getElementById('p_foot').style.color ="white"
} else {
    document.getElementById('img').style.backgroundImage = "url(https://media.istockphoto.com/id/532378051/pt/foto/c%C3%A9u-de-noite-com-estrelas-e-nuvens.jpg?s=612x612&w=0&k=20&c=mhcc45q09y1kzKUSby5ZOk-RQ4b10zXKHoCwQh9L-Kc=)"
    document.body.style.background ="#022030"
    document.getElementById('titulo').style.color ="rgb(201, 201, 201)"
    document.getElementById('secao').style.background ="rgb(201, 201, 201)"
    document.getElementById('p_foot').style.color ="rgb(201, 201, 201)"
}