function mostrarImagem(){

    if(document.getElementById("tabela")){
        return;
    }

    const imagem = document.createElement("img");

    imagem.id = "tabela";

    imagem.src = "imagens/Tabela_Jogos.png";

    imagem.style.width = "800px";

    imagem.style.display = "block";

    imagem.style.margin = "20px auto";

    document.body.appendChild(imagem);
}