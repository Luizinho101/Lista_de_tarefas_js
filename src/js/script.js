onload = function() {
    listarTarefas();
};

function teste() {
    const container = document.getElementById("resultado");
    const btn_criaTarefas = document.getElementById("btn_criarTarefa");
  
    container.innerHTML = ""; 
    btn_criaTarefas.innerHTML = "";

    const tituloTarefa = document.createElement('input');
    const descricaoTarefa = document.createElement('input');
    const botaoSalvar = document.createElement('button');
    const botaoCancelar = document.createElement('btn_Cancelar');
    
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

    botaoCancelar.type = 'button';
    botaoCancelar.textContent = "Cancelar";
    botaoCancelar.id = 'bt-cancelar';
    botaoCancelar.classList.add("botaoDeletar");

    botaoSalvar.onclick = function() {
      let inputDado = document.getElementById('input-dinamico').value;
      let inputDescricao = document.getElementById('iput_descricao').value;
        criarTarefa(inputDado, inputDescricao);

        btn_criaTarefas.textContent = "crair Nova Tarefa";
        btn_criaTarefas.id = 'teste';
        btn_criaTarefas.type = 'button';
    };
    botaoCancelar.onclick = function(){
        listarTarefas();
        btn_criaTarefas.textContent = "crair Nova Tarefa";
        btn_criaTarefas.id = 'btn_criarTarefa';
        btn_criaTarefas.type = 'button';
        
    }
    container.appendChild(tituloTarefa);
    container.appendChild(descricaoTarefa);
    container.appendChild(botaoSalvar);
    container.appendChild(botaoCancelar);
}

function criarTarefa(titulo , descricao){
    const uuid = crypto.randomUUID();
    const tarefa = {};
    tarefa.id = uuid
    tarefa.titulo = titulo;
    tarefa.descricao = descricao;

   localStorage.setItem(`${tarefa.id}`, JSON.stringify(tarefa));
   listarTarefas();
}

function listarTarefas(){
    const listaElemento = document.getElementById('resultado');
    
    listaElemento.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        let chave = localStorage.key(i);
        const dados = localStorage.getItem(chave);

        try {
            const tarefa = JSON.parse(dados);
            const li = document.createElement('li');
            const ul = document.createElement('ul');
            const div = document.createElement('div');
            const botaoDeletar = document.createElement('button');
            const botaoAtualizar = document.createElement('button');
            const botaoVer = document.createElement('button');

            ul.id = "lista1";
            div.id = 'div1';

            botaoDeletar.textContent = "Deletar";
            botaoDeletar.type = 'button';
            botaoDeletar.id = 'deletar';
            botaoDeletar.classList.add("botoes");
            botaoDeletar.classList.add("botaoDeletar");

            botaoDeletar.onclick = function(){
                localStorage.removeItem(chave);
                listarTarefas();
            }

            botaoAtualizar.textContent = "Atualizar"
            botaoAtualizar.type = 'button';
            botaoAtualizar.id = 'id_btn_atualizar';
            botaoAtualizar.classList.add("botoes");
            botaoAtualizar.classList.add("botaoAtualizar");

            botaoVer.textContent = "Ver";
            botaoVer.id = 'bt-ver';
            botaoVer.type = 'button';
            botaoVer.classList.add("botoes");
            botaoVer.classList.add("botaoVer");

            botaoVer.onclick = function(){
                mostrarTarefa(chave);
            }

            li.textContent = tarefa.titulo;
            li.classList.add("destaque");
            
            div.appendChild(botaoVer);
            div.appendChild(botaoDeletar);
            div.appendChild(botaoAtualizar);
            ul.appendChild(li);
            ul.appendChild(div);
            
            listaElemento.appendChild(ul);
            
        } catch (e) {
           
            continue; 
        }
    }
}

function mostrarTarefa(idTarefa){
    const resultado = document.getElementById('resultado');
    const tarefaString = localStorage.getItem(idTarefa);

    if(!tarefaString){
        alert("Tarefa não encontrada!");
        return;
    }
    const tarefa = JSON.parse(tarefaString);

    resultado.innerHTML = "";

    const titulo = document.createElement('li');
    const descricao = document.createElement('li');
    const ul = document.createElement('ul');

    titulo.textContent = tarefa.titulo;
    descricao.textContent = tarefa.descricao;
    ul.appendChild(titulo);
    ul.appendChild(descricao);
    resultado.appendChild(ul);
}

function excluirTarefa(id){
   
    localStorage.removeItem(id);
    listarTarefas();
}

