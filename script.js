function calcular(){
    //pegar o value das notas
    const notaPortugues = parseInt(document.getElementById('notaPortugues').value)
    const notaMatematica = parseInt(document.getElementById('notaMatematica').value)
    const notaHistoria = parseInt(document.getElementById('notaHistoria').value)
    const notaCiencias = parseInt(document.getElementById('notaCiencias').value)
    
    //somar todos
    let soma = notaPortugues + notaMatematica + notaHistoria + notaCiencias;

    //dividir por 4
    let resultadoFinal = soma / 4;
    
    let resultadoNota = document.getElementById('resultadoNota');
    
    //exibir calculo no resultado
    resultadoNota.innerHTML = resultadoFinal;

    const descricao = document.getElementById('descricao');
    if (resultadoFinal >= 60) {
        let mensagemSucesso = 'Você está acima da média!'
        descricao.innerHTML = mensagemSucesso;
    } else{
        let mensagemErro = 'Que pena :( se esforce um pouco mais'
        descricao.innerHTML = mensagemErro;
    }
}