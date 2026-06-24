const numero = document.getElementById("numero");

const btn = document.getElementById("btn");
const res = document.getElementById("res");

btn.addEventListener("click", analisar);

function analisar(){

    let cartao = numero.value;

    cartao = cartao.replaceAll(" ", "");
    cartao = cartao.replaceAll(".", "");

    if(cartao.length < 13 || cartao.length > 16){

        res.innerHTML =
        "Número inválido.";

        return;
    }

    let soma = 0;
    let inverter = false;

    for(let i = cartao.length - 1; i >= 0; i--){

        let digito = Number(cartao[i]);

        if(inverter){

            digito = digito * 2;

            if(digito > 9){
                digito = digito - 9;
            }
        }

        soma += digito;

        inverter = !inverter;
    }

    let status = "Inválido";

    if(soma % 10 == 0){
        status = "Válido";
    }

    let bandeira = "Desconhecida";
    let setor = "Financeiro";
    let banco = "Não identificado";

    if(cartao.startsWith("4")){

        bandeira = "Visa";
        banco = "Infinity Visa Bank";
    }

    else if(cartao.startsWith("5")){

        bandeira = "MasterCard";
        banco = "Infinity Master Bank";
    }

    else if(cartao.startsWith("3")){

        bandeira = "American Express";
        banco = "Infinity Amex Bank";
    }

    res.innerHTML =
    "Status: " + status

    + "<br><br>"

    + "Bandeira: " + bandeira

    + "<br><br>"

    + "Setor: " + setor

    + "<br><br>"

    + "Banco Emissor: " + banco;
}