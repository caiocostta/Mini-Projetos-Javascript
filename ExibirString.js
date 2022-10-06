const filme = {
    titulo: "Vingadores",
    ano: 2018,
    diretor: "Caio"
}

exibirPropriedade(filme);

function exibirPropriedade(obj){
    for(let o in obj){
        if(typeof obj[o] == 'string' || typeof obj[o] == 'String'){
            console.log(o, obj[o])
        }
    }
}