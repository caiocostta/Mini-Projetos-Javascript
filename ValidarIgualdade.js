function Endereco (rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const casa = new Endereco('Rua das Palmeiras', 'Osasco', 06144200)
const casa2 = new Endereco('Rua das Palmas', 'Osasco', 06144215)

function saoIguais(local, local2){
    for(endereco in local){
        for (endereco2 in local2){
            if(local[endereco] === local2[endereco2]){
                return true;
            }else{
                return false;
            }
        }
    }
}

console.log(saoIguais(casa, casa2))

function temEnderecoMemoriaIguais(local, local2){
    return local === local2;
}

console.log(temEnderecoMemoriaIguais(casa, casa2))