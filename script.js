let totalVotes = 0;
let option1Votes = 0;
let option2Votes = 0;

function vote(option) {
    totalVotes++;
    updateTotalVotes();

    if (option === 1) {
        option1Votes++;
        updateOptionVotes(1, option1Votes);
    } else if (option === 2) {
        option2Votes++;
        updateOptionVotes(2, option2Votes);
    }
    // Adicione mais lógica para outras opções conforme necessário.
}

function updateTotalVotes() {
    document.getElementById("totalVotes").innerText = totalVotes;
}

function updateOptionVotes(option, votes) {
    document.getElementById("option" + option + "Votes").innerText = votes;
    
    // Calcular a porcentagem
    const percentage = ((votes / totalVotes) * 100).toFixed(2);
    document.getElementById("option" + option + "Percentage").innerText = percentage;
}
