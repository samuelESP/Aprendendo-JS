const alunos = [
    {
        nota : 10,
        nome : 'Lucas',
        turma: '1B',
    },
    {
        nota : 4,
        nome : 'Joaquim',
        turma : '3A',
    },
    {
        nota : 7,
        nome : 'Maria', 
        turma: '4C', 
    },

]


function alunosAprovados(arr, media) {
    let aprovados =[];

    for(let i = 0; i < arr.length; i++) {
        const { nota, nome } = alunos[i];
    
        if(nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}
console.log('Os alunos aprovados são: ')
console.log(alunosAprovados(alunos,9))