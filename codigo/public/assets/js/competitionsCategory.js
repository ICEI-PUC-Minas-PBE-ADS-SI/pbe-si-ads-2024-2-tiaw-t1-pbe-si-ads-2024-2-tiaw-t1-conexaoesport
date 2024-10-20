


// PARTIDAS PARA TESTE

const competitionsData = [
    {
        id: 1,
        sport: "Futebol",
        name: "Torneio de Verão",
        date: "2024-11-01",
        location: "Estádio Municipal",
        description: "Torneio de verão com equipes regionais.",
        participants: ["jorginho ", "felipe ", "joão ", "maria "],
        invite_link: "",
        matches: [
            { matchId: 1, matchName: "Jogo 1: Equipe A vs Equipe B", date: "2024-11-02" },
            { matchId: 2, matchName: "Jogo 2: Equipe B vs Equipe C", date: "2024-11-03" }
        ]
    },
    {
        id: 2,
        sport: "Basquete",
        name: "Campeonato Escolar",
        date: "2024-10-25",
        location: "Ginásio Central",
        description: "Campeonato de basquete entre escolas.",
        participants: ["jorginho ", "felipe ", "joão ", "maria "],
        invite_link: "",
        matches: [
            { matchId: 3, matchName: "Partida A: Escola X vs Escola Y", date: "2024-10-26" },
            { matchId: 4, matchName: "Partida B: Escola Y vs Escola Z", date: "2024-10-27" }
        ]
    },

    {
        id: 3,
        sport: "Vôlei",
        name: "Partida de Quadra",
        date: "2024-10-25",
        location: "Ginásio Central",
        description: "Campeonato de basquete entre escolas.",
        participants: ["jorginho ", "felipe ", "joão ", "maria "],
        invite_link: "",
        matches: [
            { matchId: 3, matchName: "Partida Z", date: "2024-10-26" },
            { matchId: 4, matchName: "Partida C", date: "2024-10-27" }
        ]
    },

    {
        id: 4,
        sport: "Tênis",
        name: "Partida de Quadra",
        date: "2024-10-25",
        location: "Ginásio Central",
        description: "Campeonato de basquete entre escolas.",
        participants: ["jorginho ", "felipe ", "joão ", "maria "],
        invite_link: "",
        matches: [
            { matchId: 3, matchName: "Partida A", date: "2024-10-26" },
            { matchId: 4, matchName: "Partida B", date: "2024-10-27" }
        ]
    }
];


localStorage.setItem('competitions', JSON.stringify(competitionsData));


function filterSports() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const sport = card.getAttribute("data-sport").toLowerCase();
        if (sport.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


function searchSport(sport) {
    const resultsContainer = document.getElementById("matchesContainer");
    resultsContainer.innerHTML = ""; 

    const competitions = JSON.parse(localStorage.getItem('competitions'));
    const competition = competitions.find(comp => comp.sport.toLowerCase() === sport.toLowerCase());
    
    if (competition && competition.matches) {
        competition.matches.forEach(match => {
            const matchElement = document.createElement("div");
            matchElement.classList.add("match");
            matchElement.textContent = match.matchName;

            matchElement.addEventListener("click", function() {
                localStorage.setItem('selectedMatch', JSON.stringify(match));
                window.location.href = "competition.html";
            });

            resultsContainer.appendChild(matchElement);
        });
    } else {
        resultsContainer.textContent = "Nenhuma partida encontrada.";
    }
}
