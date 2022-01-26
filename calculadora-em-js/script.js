function calculadora() {
    const operaçao = Number(prompt ('Escolha uma operação!\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/)'));

    if (!operaçao || operaçao >= 5 || operaçao <= 0) {
        alert('Erro - Operação Inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'))
        let n2 = Number(prompt('Insira o segundo valor:'))

        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperaçao()
        }

        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperaçao()
        }
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperaçao()
        }
        function divisao(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperaçao()
        }

        function novaOperaçao(){
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2){
                alert('Até mais!');
            } else {
                alert('Digite uma opção válida!')
                novaOperaçao();
            }
        }

        if (operaçao == 1){
            soma();
        } else if (operaçao == 2){
            subtracao();
        } else if (operaçao == 3){
            multiplicacao();
        } else if (operaçao == 4){
            divisao();
        } 

    }
}

calculadora()