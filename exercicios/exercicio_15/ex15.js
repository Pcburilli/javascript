function checar(){
    var ano_atual = new Date().getFullYear()
    var ano_nasc = Number(document.getElementById('ano_nasc').value)
    var idade = ano_atual - ano_nasc
    var sexo_m = document.getElementById('ra_masculino').checked
    if (ano_nasc > ano_atual || ano_nasc == ''){
        alert('Data inválida. Tente novamente.')
    }else if(sexo_m == true){
        document.getElementById('secao').style.height = "340px"
        document.getElementById('p_sec').innerHTML = `Detectamos Homem com ${idade} anos.`
        document.getElementById('p_sec').style.textAlign = 'center'
        document.getElementById('p_sec').style.margin = 'auto'
        if (idade <= 4){
            document.getElementById('img').style.backgroundImage = 'url(https://begenerous.com.br/wp-content/uploads/2024/05/saltos-de-desenvolvimento-750x750.jpg)'
        }else if(idade <= 12){
            document.getElementById('img').style.backgroundImage = 'url(https://media.istockphoto.com/id/1399611777/pt/foto/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?s=612x612&w=0&k=20&c=7Jcx5NsIbyqPE2xWamyWQtuwECSox0wmoXvat3elBX8=)'
        }else if(idade < 18){
            document.getElementById('img').style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2017/08/04/18/01/young-2580894_1280.jpg)'
        }else if(idade < 35){
            document.getElementById('img').style.backgroundImage = 'url(https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
        }else if(idade < 60){
            document.getElementById('img').style.backgroundImage = 'url(https://media.istockphoto.com/id/1490764451/pt/foto/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?s=612x612&w=0&k=20&c=_GkBpsbyy9PahRkIgjGc3RFrLUeH6j-hq14SzpNd9gk=)'
        }else if(idade <= 110) {
            document.getElementById('img').style.backgroundImage = 'url(https://img.freepik.com/fotos-gratis/velho-sorridente-com-oculos_23-2148740051.jpg?semt=ais_hybrid&w=740)'
        }else {
            document.getElementById('img').style.backgroundImage = 'url(https://media.istockphoto.com/id/928418862/pt/vetorial/skull-and-bones-icon.jpg?s=612x612&w=0&k=20&c=aRa2CPnvwMGBXrOIxeYvqI_KQgEBtq0M_MFvJYzSFHA=)'
        }
    }else {
        document.getElementById('secao').style.height = "340px"
        document.getElementById('p_sec').innerHTML = `Detectamos Mulher com ${idade} anos.`
        document.getElementById('p_sec').style.textAlign = 'center'
        document.getElementById('p_sec').style.margin = 'auto'
        if (idade <= 4){
            document.getElementById('img').style.backgroundImage = 'url(https://cdn.dooca.store/1707/products/mg-7665-1.jpg?v=1637058135)'
        }else if(idade <= 12){
            document.getElementById('img').style.backgroundImage = 'url(https://img.freepik.com/fotos-gratis/alegre-garotinha-de-cabelos-pretos-em-pe-no-parque-da-cidade-garoto-aproveitando-o-tempo-de-lazer-ao-ar-livre-no-verao-tiro-medio-vertical-conceito-de-infancia_74855-12725.jpg?semt=ais_hybrid&w=740)'
        }else if(idade < 18){
            document.getElementById('img').style.backgroundImage = 'url(https://thumbs.dreamstime.com/b/retrato-da-menina-bonita-anos-78012435.jpg)'
        }else if(idade < 35){
            document.getElementById('img').style.backgroundImage = 'url(https://static.stealthelook.com.br/wp-content/uploads/2023/11/mulher-negra-carol-figueiredo-cabelo-natural-20231127160756.jpg)'
        }else if(idade < 60){
            document.getElementById('img').style.backgroundImage = 'url(https://media.istockphoto.com/id/1345871399/pt/foto/mugshot-of-confident-adult-woman.jpg?s=612x612&w=0&k=20&c=4nEZo_evYyXcEixIDHE4zNNAVahliJviERGaUsvF3lU=)'
        }else if(idade <= 122) {
            document.getElementById('img').style.backgroundImage = 'url(https://forbes.com.br/wp-content/uploads/2025/05/Life_A-idosa-sucede-Inah-Canabarro-Lucas-freira-brasileira-que-faleceu-aos-116-anos-768x512.jpg)'
        }else {
            document.getElementById('img').style.backgroundImage = 'url(https://media.istockphoto.com/id/928418862/pt/vetorial/skull-and-bones-icon.jpg?s=612x612&w=0&k=20&c=aRa2CPnvwMGBXrOIxeYvqI_KQgEBtq0M_MFvJYzSFHA=)'
        }
    }
}