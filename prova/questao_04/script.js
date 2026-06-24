function revelar(){

    document.querySelector(".card-img-top").src =
    "imagens/_vinicius_junior.png";

    document.getElementById("Nome").innerHTML =
    'Vinícius José Paixão de Oliveira Júnior <span id="Rank" class="badge text-bg-success">9,5</span>';

    const data = document.getElementById("Data_Nas");
    const altura = document.getElementById("Alutra");
    const posicao = document.getElementById("Posição ");

    data.innerHTML =
    "12/07/2000 (25 anos)";

    altura.innerHTML =
    "1,76 m";

    posicao.innerHTML =
    "Ponta-esquerda / Atacante";

    data.classList.remove("placeholder");
    altura.classList.remove("placeholder");
    posicao.classList.remove("placeholder");

    data.classList.add("card-text");
    altura.classList.add("card-text");
    posicao.classList.add("card-text");
}