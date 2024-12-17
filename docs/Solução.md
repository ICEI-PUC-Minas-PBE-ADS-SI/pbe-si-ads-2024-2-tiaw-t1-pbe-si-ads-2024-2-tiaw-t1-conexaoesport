<h1>Solução</h1>
 O projeto visa desenvolver uma aplicação inovadora que facilita o acesso ao esporte e atividades físicas, conectando pessoas de diferentes idades, estilos de vida e níveis de condicionamento. A solução aborda problemas como a falta de tempo, motivação, companhia e informação ao fornecer um sistema intuitivo que permite encontrar atividades próximas, criar grupos, participar de eventos e acompanhar o progresso pessoal. Através de recursos como geolocalização, gamificação, integração com dispositivos inteligentes e um sistema de matchmaking, o aplicativo promove saúde, inclusão social e bem-estar, incentivando um estilo de vida mais ativo e equilibrado.<br>
 <br>
 Contatos da aplicação

```
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


```
