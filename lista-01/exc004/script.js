const bandeira = document.getElementById("bandeira");

const valor = document.getElementById("valor");
const parcelas = document.getElementById("parcelas");

const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.addEventListener("click", calcular);

function calcular(){

    let venda = Number(valor.value);
    let qtd = Number(parcelas.value);

    let taxa = 0;

    switch(bandeira.value){

        case "visa":
            taxa = venda * 0.02;
            break;

        case "master":
            taxa = venda * 0.0185;
            break;

        case "elo":
            taxa = venda * 0.03;
            break;
    }

    let juros = venda * (0.015 * qtd);

    let taxaMensal = qtd * 12.50;

    let total =
    venda +
    taxa +
    juros +
    taxaMensal;

    let valorParcela =
    total / qtd;

    res.innerHTML =
    "Taxa da bandeira: R$ "
    + taxa.toFixed(2)

    + "<br><br>"

    + "Juros: R$ "
    + juros.toFixed(2)

    + "<br><br>"

    + "Taxa mensal: R$ "
    + taxaMensal.toFixed(2)

    + "<br><br>"

    + "Valor da parcela: R$ "
    + valorParcela.toFixed(2)

    + "<br><br>"

    + "Valor total: R$ "
    + total.toFixed(2);
}