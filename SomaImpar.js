somar(10)

function somar(limite){
    multiploTres = 0
    multiploCinco = 0
    
    for(i=1; i <= limite; i++){
        if(i % 3 == 0){
            multiploTres = multiploTres + i;
        }
        if(i % 5 == 0){
            multiploCinco = multiploCinco + i;
        }
    }
    console.log(multiploTres + multiploCinco)
}