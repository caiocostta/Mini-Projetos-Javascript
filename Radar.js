verificarVelocidade(81);

function verificarVelocidade(velocidade){
    if(velocidade <= 70){
        console.log('Ok!')
    }else{
        const pontos = Math.floor(((velocidade - 70)/5))
        console.log(pontos)
    }
}