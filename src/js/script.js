onload = function() {
    listarTarefas();
};

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
   listarTarefas();
}

function listarTarefas(){
    const listaElemento = document.getElementById('resultado');
    
    listaElemento.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        const dadoRaw = localStorage.getItem(chave);

        try {
            const tarefa = JSON.parse(dadoRaw);
            const li = document.createElement('li');
            li.textContent = tarefa.nome;
            li.classList.add("destaque");
    
            listaElemento.appendChild(li);
        } catch (e) {
           
            continue; 
        }
    }
}

function excluirTarefa(id){
   
    localStorage.removeItem(id);
    listarTarefas();
}

