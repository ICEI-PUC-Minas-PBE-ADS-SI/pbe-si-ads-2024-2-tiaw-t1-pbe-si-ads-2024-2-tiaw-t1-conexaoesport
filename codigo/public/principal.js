
function carregarCards() {
    const containerCards = document.querySelector(".contcards");

   
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    containerCards.innerHTML = "";

    if (cards.length === 0) {
        containerCards.innerHTML = "<p>Nenhum card encontrado. Adicione novos cards!</p>";
        return;
    }

  
    cards.forEach((card, index) => {
        const cardHTML = `
            <div class="card">
                <img width="150px" src="${card.imagem}" alt="Imagem de ${card.nome}">
                <h1>${card.nome}</h1>
                <p>${card.descricao}</p>
                <h2>Contato</h2>
                <p>${card.contato}</p>
                <button class="btn-remover" data-index="${index}">Remover</button>
            </div>
        `;
        containerCards.innerHTML += cardHTML;
    });

    
    const botoesRemover = document.querySelectorAll(".btn-remover");
    botoesRemover.forEach(botao => {
        botao.addEventListener("click", removerCard);
    });
}


function removerCard(event) {
   
    const index = event.target.getAttribute("data-index");

   
    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    
    cards.splice(index, 1);

    
    localStorage.setItem("cards", JSON.stringify(cards));

   
    carregarCards();
}


window.onload = carregarCards;
