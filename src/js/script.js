
onload = function() {
    renderizaTarefas();
};

function renderizaTarefas (){
    const listaElemento = document.getElementById('resultado');

    listaElemento.innerHTML = '';

    let tarefa = listarTarefas();

    tarefa.forEach(tarefa => {

        const li = document.createElement('li');
        const ul = document.createElement('ul');
        const div = document.createElement('div');
        const botaoDeletar = document.createElement('button');
        const botaoAtualizar = document.createElement('button');
        const botaoVer = document.createElement('button');


        li.textContent = tarefa.titulo;
        li.classList.add("destaque");


        botaoDeletar.textContent = "Deletar";
        botaoDeletar.type = 'button';
        botaoDeletar.id = 'deletar';
        botaoDeletar.classList.add("botoes");
        botaoDeletar.classList.add("botaoDeletar");
        botaoDeletar.onclick = function (){
            excluirTarefa(tarefa.id)
        }


        botaoAtualizar.textContent = "Atualizar";
        botaoAtualizar.type = 'button';
        botaoAtualizar.id = 'id_btn_atualizar';
        botaoAtualizar.classList.add("botoes");
        botaoAtualizar.classList.add("botaoAtualizar");

        botaoVer.textContent = "Ver";
        botaoVer.type = 'button';
        botaoVer.id = 'id_btn_ver';
        botaoVer.classList.add("botoes");
        botaoVer.classList.add("botaoVer");
        botaoVer.onclick = function (){
            renderizaTarefa(tarefa.id);
        }

  
        div.appendChild(botaoVer);
        div.appendChild(botaoDeletar);
        div.appendChild(botaoAtualizar);
        ul.appendChild(li);
        ul.appendChild(div);
                
        listaElemento.appendChild(ul);
    });
}

function renderizaTarefa(idTarefa){
    const listaElemento = document.getElementById('resultado');
    const btn_criaTarefas = document.getElementById("btn_criarTarefa");
    btn_criaTarefas.innerHTML = "";

    listaElemento.innerHTML = '';

    const dadosBrutos = listarTarefa(idTarefa);
    const tarefa = JSON.parse(dadosBrutos);

    let liTitulo = document.createElement('li');
    let liDescricao = document.createElement('li');
    const ul = document.createElement('ul');
    const btn_voltar = document.createElement('button');

    btn_voltar.textContent = 'Voltar';
    btn_voltar.type = 'button';
    btn_voltar.id = 'id_bnt_voltar';
    btn_voltar.classList.add("botoes");
    btn_voltar.classList.add("botaoVer");

    btn_voltar.onclick = function (){
        renderizaTarefas();
        btn_criaTarefas.textContent = "crair Nova Tarefa";
        btn_criaTarefas.id = 'btn_criarTarefa';
        btn_criaTarefas.type = 'button';
    }

    liTitulo.textContent = tarefa.titulo;
    liDescricao.textContent = tarefa.descricao;

    ul.appendChild(liTitulo);
    ul.appendChild(liDescricao);
   
    listaElemento.appendChild(ul);
    listaElemento.appendChild(btn_voltar);

}

function renderizarCriacaoTarefa(){
    const container = document.getElementById("resultado");
    const btn_criaTarefas = document.getElementById("btn_criarTarefa");
    container.innerHTML = ""; 
    btn_criaTarefas.innerHTML = "";

    const tituloTarefa = document.createElement('input');
    const descricaoTarefa = document.createElement('input');
    const botaoSalvar = document.createElement('button');
    const botaoCancelar = document.createElement('button');

    tituloTarefa.type = 'text';
    tituloTarefa.placeholder = 'Titulo da tarefas';
    tituloTarefa.id = 'input-dinamico';
    tituloTarefa.style.display = 'block';

    descricaoTarefa.type = 'text';
    descricaoTarefa.placeholder = 'Descrição da terefa';
    descricaoTarefa.id = 'iput_descricao';

    botaoSalvar.type = 'button';
    botaoSalvar.textContent = "Salvar Dados";
    botaoSalvar.id = 'btn-enviar';
    botaoSalvar.classList.add("botaoVer");

    botaoSalvar.onclick = function() {
      let inputDado = document.getElementById('input-dinamico').value;
      let inputDescricao = document.getElementById('iput_descricao').value;

        criarTarefa(inputDado, inputDescricao);

        btn_criaTarefas.textContent = "crair Nova Tarefa";
        btn_criaTarefas.id = 'btn_criarTarefa';
        btn_criaTarefas.type = 'button';
    };

    botaoCancelar.type = 'button';
    botaoCancelar.textContent = "Cancelar";
    botaoCancelar.id = 'bt-cancelar';
    botaoCancelar.classList.add("botaoDeletar");

    botaoCancelar.onclick = function(){
        renderizaTarefas();
        btn_criaTarefas.textContent = "crair Nova Tarefa";
        btn_criaTarefas.id = 'btn_criarTarefa';
        btn_criaTarefas.type = 'button';
        
    }


    container.appendChild(tituloTarefa);
    container.appendChild(descricaoTarefa);
    container.appendChild(botaoSalvar);
    container.appendChild(botaoCancelar);
}


function listarTarefas(){

    let lista = []

    for (let i = 0; i < localStorage.length; i++) {
        let chave = localStorage.key(i);
        const dados = localStorage.getItem(chave);

        try {
            const tarefa = JSON.parse(dados);
            lista.push(tarefa);
            
        } catch (e) {
           
            continue; 
        }
    }
    return lista;
}

function listarTarefa(id){
    let tarefa;
    if(id == null){
        alert("ID null");
    }else{
        tarefa = localStorage.getItem(id);
        if(tarefa == null){
             alert(`Id não encontrado `);
        }
    }
    return tarefa;
}


function excluirTarefa(id){
   
    localStorage.removeItem(id);
    renderizaTarefas();
}

function criarTarefa(titulo , descricao){
    const uuid = crypto.randomUUID();
    const tarefa = {};
    tarefa.id = uuid
    tarefa.titulo = titulo;
    tarefa.descricao = descricao;
    

   localStorage.setItem(`${tarefa.id}`, JSON.stringify(tarefa));
   renderizaTarefas();
}
