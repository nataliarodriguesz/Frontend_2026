# 🐾 Atividade 07 – Bichinho Virtual

---

## 📚 Sobre a Atividade

Essa atividade consiste em desenvolver um **Bichinho Virtual interativo**, capaz de mudar de estado conforme o tempo passa e de reagir às ações do usuário.

* A criatura possui diferentes estados visuais:

  * Normal
  * Bravo
  * Comendo
  * Alimentado
  * Morto
* O usuário pode alimentar a criatura através de um botão de comida.
* Caso fique muito tempo sem ser alimentada, a criatura muda de estado automaticamente.
* O projeto também conta com um sistema de alternância entre cenário diurno e noturno.

---

## 🎮 Funcionamento

A lógica principal da aplicação é baseada em um contador de tempo:

* Inicialmente a criatura permanece em estado **Normal**.
* Após determinado tempo sem receber alimento, ela fica **Brava**.
* Se continuar sem ser alimentada, ela passa para o estado **Morto**.
* Ao clicar no botão de comida, a criatura muda para o estado **Comendo**, depois para **Alimentado** e retorna ao estado **Normal**.

Além disso, foi implementado um sistema de troca de cenário entre **Dia** e **Noite**, controlado por um botão de alternância.

---

## 🌙 Cenários

O projeto utiliza dois cenários:

* **Modo Dia** – Ambiente claro e colorido.
* **Modo Noite** – Ambiente escuro com estrelas animadas.

A mudança de cenário pode ser realizada através de um botão de alternância presente na interface.

---

## 🎨 Estrutura e Organização

* A criatura é exibida através de uma tag `<img>`.
* Os diferentes estados utilizam imagens distintas controladas pelo JavaScript.
* O botão de alimentação executa a função responsável por alterar os estados da criatura.
* O cenário é aplicado através da propriedade `background-image` do CSS.
* As estrelas do modo noturno são geradas dinamicamente pelo JavaScript.
* O projeto também possui um botão secreto contendo uma imagem especial como easter egg.

---

## ⚙️ Tecnologias utilizadas

* **HTML5** – Estrutura da aplicação.
* **CSS3** – Estilização da interface, cenários e animações.
* **JavaScript** – Controle dos estados da criatura, temporizadores e interações do usuário.

> O projeto foi desenvolvido utilizando manipulação de DOM, eventos, temporizadores (`setInterval` e `setTimeout`) e alteração dinâmica de estilos e imagens.

---

## ✨ Funcionalidades

* Mudança automática de estados da criatura.
* Alimentação através de interação do usuário.
* Sistema de sobrevivência baseado em tempo.
* Cenário diurno e noturno.
* Estrelas animadas no modo noturno.
* Campo para nomear a criatura.
* Easter egg oculto na interface.

---

## 🔗 Arquivos Principais

* `main.html` – Estrutura da página.
* `style.css` – Estilização e animações.
* `script.js` – Lógica do bichinho virtual e das interações.

---
