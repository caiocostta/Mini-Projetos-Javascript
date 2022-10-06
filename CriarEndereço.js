function Endereco (rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
    this.exibir = function (endereco){
        for(let end in endereco){
            if(end != 'exibir'){
                console.log(`${end}: ${endereco[end]}`);
            }
        }
    }
}
const casa = new Endereco('Rua das Palmeiras', 'Osasco', 06144200)
casa.exibir(casa)