


function inputDados(){

    const uuid = crypto.randomUUID();
    const tarefa = {};

    let dataInicio = document.getElementById('dataInicio').value;
    let dataFinal  = document.getElementById('dataFim').value;
    let nomeTarefa  = document.getElementById('nometarefa').value;

    tarefa.id = uuid;
    tarefa.dataInicio = dataInicio;
    tarefa.dataFinal = dataFinal;
    tarefa.nome = nomeTarefa;
    return tarefa;
}

function criarTarefa(){
    let tarefaCadastro = inputDados ();

   localStorage.setItem(`${tarefaCadastro.id}`, JSON.stringify(tarefaCadastro));
}