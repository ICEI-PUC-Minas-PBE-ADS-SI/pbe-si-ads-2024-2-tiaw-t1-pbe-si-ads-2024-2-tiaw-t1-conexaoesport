document.addEventListener('DOMContentLoaded', function() {
    const selectedMatch = JSON.parse(localStorage.getItem('selectedMatch'));

    if (selectedMatch) {
        const competitions = JSON.parse(localStorage.getItem('competitions'));
        const competition = competitions.find(comp => comp.matches.some(match => match.matchId === selectedMatch.matchId));

        if (competition) {
            document.getElementById('competitionName').textContent = selectedMatch.matchName;
            document.getElementById('competitionDate').textContent = selectedMatch.date;
            document.getElementById('competitionLocation').textContent = competition.location || "Localização não disponível";
            document.getElementById('competitionId').textContent = selectedMatch.matchId;
            document.getElementById('competitionParticipants').textContent = competition.participants;

            document.getElementById('competitionLink').textContent = competition.invite_link || "Nenhum link salvo";
        }
    }

    document.getElementById('saveLinkBtn').addEventListener('click', function() {
        const linkInput = document.getElementById('linkInput').value;
        const competitions = JSON.parse(localStorage.getItem('competitions'));
        const competition = competitions.find(comp => comp.matches.some(match => match.matchId === selectedMatch.matchId));

        if (competition && linkInput) {
            competition.invite_link = linkInput; 
            localStorage.setItem('competitions', JSON.stringify(competitions)); 
            document.getElementById('linkMessage').textContent = "Link salvo com sucesso!";
            
          
            document.getElementById('competitionLink').textContent = competition.invite_link;

            document.getElementById('linkInput').value = ""; 
        } else {
            document.getElementById('linkMessage').textContent = "Por favor, insira um link válido ou a competição não foi encontrada.";
        }
    });
});