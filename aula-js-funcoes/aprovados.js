const alunos = [
    {
        nome: 'Kauê',
        nota: 7,
        turma: '1A'
    },
    {
        nome: 'Rafael',
        nota: 3,
        turma: '1A',
    },
    {
        nome: 'Evilyn',
        nota: 5,
        turma: '1A',
    },
    {
        nome: 'Karolina',
        nota: 8,
        turma: '1B',
    },
];

function alunosAprov (alunos, media){
    let aprovados = [];

    for(let i = 0; i < alunos.lenght; i++){

        let {nota, nome} = alunos[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprov(alunos, 5));
