const nome = document.getElementById("nome");

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");

const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.addEventListener("click", calcular);

function calcular(){

    let nota1 = Number(n1.value);
    let nota2 = Number(n2.value);
    let nota3 = Number(n3.value);

    let media = (nota1 + nota2 + nota3) / 3;

    if(media >= 7){

        res.innerHTML =
        nome.value + " foi aprovado. Média: "
        + media.toFixed(2);

        res.style.color = "blue";
    }

    else if(media >= 4){

        let falta = 10 - media;

        res.innerHTML =
        nome.value + " está em exame. Média: "
        + media.toFixed(2)
        + " | Faltam "
        + falta.toFixed(2)
        + " pontos para 10";

        res.style.color = "green";
    }

    else{

        res.innerHTML =
        nome.value + " foi reprovado. Média: "
        + media.toFixed(2);

        res.style.color = "red";
    }
}