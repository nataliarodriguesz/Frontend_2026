const nome = document.getElementById("nome");
const btn = document.getElementById("btn");
const lista = document.getElementById("lista");

let convidados = [];

btn.addEventListener("click", adicionar);

function adicionar(){

    let texto = nome.value.trim();

    if(texto == ""){
        return;
    }

    convidados.push(texto);

    atualizar();

    nome.value = "";
}

function atualizar(){

    lista.innerHTML = "";

    for(let i = 0; i < convidados.length; i++){

        let li = document.createElement("li");

        li.innerHTML = `
            <span>${convidados[i]}</span>

            <div class="btns">
                <button onclick="concluir(this)">Concluir</button>

                <button onclick="editar(${i})">Editar</button>

                <button onclick="excluirConvidado(${i})">Excluir</button>
            </div>
        `;

        lista.appendChild(li);
    }
}

function concluir(botao){

    let nome = botao.parentElement.parentElement.querySelector("span");

    nome.classList.toggle("riscado");
}

function editar(i){

    let novoNome = prompt(
        "Novo nome:",
        convidados[i]
    );

    if(novoNome == null){
        return;
    }

    convidados[i] = novoNome;

    atualizar();
}

function excluirConvidado(i){

    convidados.splice(i, 1);

    atualizar();
}