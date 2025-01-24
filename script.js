function calcular(){
    
    //pegar o value das notas
    const notaPortugues = parseInt(document.getElementById('notaPortugues').value)
    const notaMatematica = parseInt(document.getElementById('notaMatematica').value)
    const notaHistoria = parseInt(document.getElementById('notaHistoria').value)
    const notaCiencias = parseInt(document.getElementById('notaCiencias').value)
    
    //somar todos e dividir por 4
    let resultado = (notaPortugues + notaMatematica + notaHistoria + notaCiencias) / 4;
    
    let resultadoNota = document.getElementById('resultadoNota');
    
    //exibir calculo no resultado
    resultadoNota.innerHTML = resultado;

    const descricao = document.getElementById('descricao');
    if (resultado >= 60) {
        let mensagemSucesso = 'Você está acima da média!'
        descricao.innerHTML = mensagemSucesso;
    } else{
        let mensagemErro = 'Que pena :( você não atingiu a média!'
        descricao.innerHTML = mensagemErro;
    }
}