exibirTipo(35)

function exibirTipo(limite){
    for(let i = 1; i <= limite;){
        if(i % 2 == 0){
            console.log(i, "Par")
            i++
        }else{
            console.log(i, "Impar")
            i++
        }
    }
}