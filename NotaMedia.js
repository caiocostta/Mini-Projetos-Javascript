const notas = [70, 70, 80]

console.log(calcularMedia(notas));

function calcularMedia(nota){
    notaMedia = 0;
    for (n of nota){
        notaMedia += n;
    }
    notaMedia = notaMedia / nota.length;
    if(notaMedia < 59) return 'F';
    if(notaMedia < 69) return 'D';
    if(notaMedia < 79) return 'C';
    if (notaMedia < 89) return 'B';
    if (notaMedia > 89) return 'A';
}