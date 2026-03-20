    let listaTarefas = {};
    let tarefa = {}
    let id = 1;


function capturaDados(){
    let tarefaNome = document.getElementById('nometarefa').value;
    let dataInicioTarefa = document.getElementById('dataInicio').value;
    let dataFimTarefa = document.getElementById('dataFim').value;

 
    adicionarNaLista(tarefaNome, dataInicioTarefa, dataFimTarefa);
}

function adicionarNaLista (nomeTarefa ,dataInicio, dataFinal){
    tarefa.nomeTarefa =  nomeTarefa;
    tarefa.dataInicio = dataInicio;
    tarefa.dataFinal = dataFinal;

    let idTarefa = 0;

    idTarefa = id;
    tarefa.id = idTarefa;

    listaTarefas[idTarefa] = tarefa;

    console.log(listaTarefas[idTarefa]);
    id++;
}