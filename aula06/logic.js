let players = [
    {
        name: "Jogador01",
        victories: 0,
        draw: 0,
        defeats: 0,
        points: 0
    },

    {
        name: "Jogador02",
        victories: 0,
        draw: 0,
        defeats: 0,
        points: 0
    }
]

players[0].points = calculatePoints(players[0]);
players[1].points = calculatePoints(players[1]);

displaysPlayers(players);

function calculatePoints(player) {
    let points = (player.victories * 3) + player.draw;

    return points;
}


function displaysPlayers(players) {
    let element = "";

    for (let i = 0; i < players.length; i++) {
        element += `<tr><td>${players[i].name}</td>`;
        element += `<td>${players[i].victories}</td>`;
        element += `<td>${players[i].draw}</td>`;
        element += `<td>${players[i].defeats}</td>`;
        element += `<td>${players[i].points}</td>`;
        element += `<td><button onClick="addVictory(${i})">Vitória</button></td>`;
        element += `<td><button onClick="addDraw(${i})">Empate</button></td>`;
        element += `<td><button onClick="addDefeats(${i})">Derrota</button></td>`;
        element += `</tr>`
    }

    let tablePlayers = document.getElementById("tablePlayers");

    tablePlayers.innerHTML = element;
}

function addVictory(i) {
    let player = players[i];

    player.victories++;
    player.points = calculatePoints(player);
    displaysPlayers(players);
}

function addDraw(i) {
    let player = players[i];

    player.draw++;
    player.points = calculatePoints(player);
    displaysPlayers(players);
}

function addDefeats(i) {
    let player = players[i];

    player.defeats++;
    displaysPlayers(players);
}