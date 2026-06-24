const cria = document.getElementById("b");
const estrelas = document.getElementById("estrelas");

const fundoDia = "imagens/background.png";
const fundoNoite = "imagens/background_noite.png";

const estados = {
    normal: "imagens/b_n.png",
    puto: "imagens/b_p.png",
    morto: "imagens/b_d.png",
    comendo: "imagens/b_c.png",
    alimentado: "imagens/b_a.png",
}

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador(){

    if(intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {

        contador++;

        console.log("tempo:", contador);

        if(contador == 30){
            cria.src = estados.puto;
        }

        if(contador == 60){
            cria.src = estados.morto;
        }

    }, 1000);
}

function alimentar(){

    if(contador >= 60){

        alert("Game over!");

        return;
    }

    cria.src = estados.comendo;

    contador = 0;

    if(time_click) clearTimeout(time_click);

    if(time_out) clearTimeout(time_out);

    time_click = setTimeout(() => {

        cria.src = estados.alimentado;

        time_out = setTimeout(() => {

            cria.src = estados.normal;

        }, 2000);

    }, 1000);
}

for(let i = 0; i < 50; i++){

    const estrela = document.createElement("div");

    estrela.classList.add("estrela");

    estrela.style.left = Math.random() * 100 + "%";
    estrela.style.top = Math.random() * 100 + "%";

    estrela.style.animationDelay =
    Math.random() * 2 + "s";

    estrelas.appendChild(estrela);
}

function trocarTema(){

    const toggle =
    document.getElementById("toggleTema");

    document.body.style.opacity = 0.8;

    setTimeout(() => {

        if(toggle.checked){

            document.body.style.backgroundImage =
            `url('${fundoNoite}')`;

            estrelas.style.opacity = 1;
        }
        else{

            document.body.style.backgroundImage =
            `url('${fundoDia}')`;

            estrelas.style.opacity = 0;
        }

        document.body.style.opacity = 1;

    }, 200);
}

function ferlini(){
    alert("1 pontinho na média");
}

controlador();