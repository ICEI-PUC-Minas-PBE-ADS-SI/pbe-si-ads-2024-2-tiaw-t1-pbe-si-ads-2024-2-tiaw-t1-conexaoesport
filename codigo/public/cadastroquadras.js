
    let nome = document.getElementById("nome");
    let descricao = document.getElementById("descricao");
    let contato = document.getElementById("contato");

    function addcard() {
        const nomeInput = nome.value.trim();
        const descricaoInput = descricao.value.trim();
        const contatoInput = contato.value.trim();

        if (nomeInput && descricaoInput && contatoInput) {
            const novoCard = {
                nome: nomeInput,
                descricao: descricaoInput,
                contato: contatoInput,
                imagem: "img/futeboi.jfif", // Substitua pelo caminho da imagem desejada.
            };

            // Recupera os dados existentes ou inicializa um array vazio
            const cardsExistentes = JSON.parse(localStorage.getItem("cards")) || [];
            cardsExistentes.push(novoCard);

            // Salva os dados atualizados no localStorage
            localStorage.setItem("cards", JSON.stringify(cardsExistentes));

            alert("Card adicionado com sucesso!");
            nome.value = "";
            descricao.value = "";
            contato.value = "";
        } else {
            alert("Preencha todos os campos!");
        }
    }

