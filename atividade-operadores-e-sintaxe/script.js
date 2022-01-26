function comparar(n1, n2){
    const igualdade = n1 === n2;
    const soma = n1 + n2;

    let maior10 = soma > 10;
    let maior20 = soma > 20;

    let primeira = '';
    primeira = igualdade ? '' : 'não '

    let segunda = '';
    segunda = maior10 ? '' : 'não '

    let terceira = '';
    terceira = maior20 ? '' : 'não '
    
    return `Os Numeros ${n1} e ${n2} ${primeira}são iguais. O valor de sua soma é ${soma}. Que ${segunda}é maior que 10 e ${terceira}é maior que 20.`
}

console.log(comparar(20, 20));
