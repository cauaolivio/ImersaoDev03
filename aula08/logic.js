let cards = [
    {
        name: "Fred",
        img: "./imgs/fred.png",
        attributes: {
            humor: 90,
            agilidade: 100,
            tadinho: 40
        }
    },
    {
        name: "Chico",
        img: "./imgs/chico.png",
        attributes: {
            humor: 100,
            agilidade: 50,
            tadinho: 80
        }
    },
    {
        name: "Bira",
        img: "./imgs/bira.png",
        attributes: {
            humor: 75,
            agilidade: 40,
            tadinho: 95
        }
    },
    {
        name: "Paulo",
        img: "./imgs/paulo.png",
        attributes: {
            humor: 70,
            agilidade: 80,
            tadinho: 100
        }
    },
    {
        name: "Danilo",
        img: "./imgs/danilo.png",
        attributes: {
            humor: 77,
            agilidade: 10,
            tadinho: 20
        }
    },
]

let cardMachine = 0;
let cardPlayer = 0;

function drawCards() {
    let cardDrawMachine = parseInt(Math.random() * cards.length);
    cardMachine = cards[cardDrawMachine];

    let cardDrawPlayer = parseInt(Math.random() * cards.length);

    while (cardDrawMachine == cardDrawPlayer) {
        cardDrawPlayer = parseInt(Math.random() * cards.length);
    }
    cardPlayer = cards[cardDrawPlayer];

    document.getElementById("btnDraw").disabled = true;
    document.getElementById("btnPlay").disabled = false;

    displayPlayerCard();
}

function getSelectedAttribute() {
    let radioAttributes = document.getElementsByName("attribute");

    for (let i = 0; i < radioAttributes.length; i++) {
        if (radioAttributes[i].checked == true) {
            return radioAttributes[i].value;
        }
    }
}

function play() {
    let selectedAttribute = getSelectedAttribute();
    let divResult = document.getElementById("result");

    if (cardPlayer.attributes[selectedAttribute] > cardMachine.attributes[selectedAttribute]) {
        htmlResult = "<p class='result-final'>Venceu</p>";
    } else if (cardPlayer.attributes[selectedAttribute] < cardMachine.attributes[selectedAttribute]) {
        htmlResult = "<p class='result-final'>Perdeu</p>";
    } else {
        htmlResult = "<p class='result-final'>Empatou</p>";
    }

    divResult.innerHTML = htmlResult;


    document.getElementById("btnPlay").disabled = true;
    displayMachineCard();
}

function displayPlayerCard() {
    let divPlayerCard = document.getElementById("card-player");
    divPlayerCard.style.backgroundImage = `url(${cardPlayer.img})`;

    let frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHmtl = "<div id='options' class='card-status'>"

    let optionsText = "";
    for (let attribute in cardPlayer.attributes) {
        optionsText += `<div><input type="radio" name="attribute" value="${attribute}">` + attribute + " " + cardPlayer.attributes[attribute] + "</div>";
    }

    let name = `<p class="card-subtitle">${cardPlayer.name}</p>`;

    divPlayerCard.innerHTML = frame + name + tagHmtl + optionsText + "</div>";
}

function displayMachineCard() {
    let divMachineCard = document.getElementById("card-machine");
    divMachineCard.style.backgroundImage = `url(${cardMachine.img})`;

    let frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHmtl = "<div id='options' class='card-status'>"

    let optionsText = "";
    for (let attribute in cardMachine.attributes) {
        optionsText += `<p type="text" name = "attribute" value="${attribute}">` + attribute + " " + cardMachine.attributes[attribute] + "</p>";
    }

    let name = `<p class="card-subtitle">${cardMachine.name}</p>`;

    divMachineCard.innerHTML = frame + name + tagHmtl + optionsText + "</div>";
}