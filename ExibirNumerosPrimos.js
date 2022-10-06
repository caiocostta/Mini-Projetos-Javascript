exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let i = 2; i <= limite; i++){

        if(ehPrimo(i)) console.log(i);
    }
}

function ehPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor == 0){
            return false;
        }
    }
    return true;
}