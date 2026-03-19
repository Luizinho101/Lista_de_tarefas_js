
function capturaDados(){
    let tarefa = document.getElementById('nometarefa').value;
    let dataInicioTarefa = document.getElementById('dataInicio').value;
    let dataFimTarefa = document.getElementById('dataFim').value;

    document.getElementById("resultado").innerHTML = "Você digitou: " + tarefa;
    document.getElementById("resultado2").innerHTML = "Você digitou: " + dataInicioTarefa;
    document.getElementById("resultado3").innerHTML = "Você digitou: " + dataFimTarefa;

    
}

function adicionarNaLista (){

}