const pacote = document.getElementById("pacote");

const pessoas = document.getElementById("pessoas");

const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.addEventListener("click", calcular);

function calcular(){

    let qtd = Number(pessoas.value);

    let valorPessoa = 0;

    switch(pacote.value){

        case "standard":
            valorPessoa = 50;
            break;

        case "premium":
            valorPessoa = 80;
            break;

        case "deluxe":
            valorPessoa = 120;
            break;
    }

    let bruto = valorPessoa * qtd;

    let taxa = bruto * 0.10;

    let total = bruto + taxa;

    let desconto = 0;

    if(qtd > 100){

        desconto = total * 0.05;

        total = total - desconto;
    }

    res.innerHTML =
    "Custo bruto: R$ "
    + bruto.toFixed(2)

    + "<br><br>"

    + "Taxa de serviço: R$ "
    + taxa.toFixed(2)

    + "<br><br>"

    + "Desconto: R$ "
    + desconto.toFixed(2)

    + "<br><br>"

    + "Total final: R$ "
    + total.toFixed(2);
}