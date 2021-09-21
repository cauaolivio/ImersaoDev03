let cards = [
    {
        name: "Fred",
        attributes: {
            humor: 90,
            agilidade: 100,
            defesa: 40
        }
    },
    {
        name: "Chico",
        attributes: {
            humor: 100,
            agilidade: 50,
            defesa: 70
        }
    },
    {
        name: "Bira",
        attributes: {
            humor: 75,
            agilidade: 40,
            defesa: 30
        }
    },
    {
        name: "Paulo",
        attributes: {
            humor: 70,
            agilidade: 80,
            defesa: 10
        }
    },
    {
        name: "Danilo",
        attributes: {
            humor: 77,
            agilidade: 10,
            defesa: 70
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

    displayOptions();
    console.log(cardPlayer)
}

function displayOptions() {
    let options = document.getElementById("options");
    let optionsText = "";

    for (let attribute in cardPlayer.attributes) {
        optionsText += `<input type="radio" name = "attribute" value="${attribute}">` + attribute;
    }

    options.innerHTML = optionsText;
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
    let resultElement = document.getElementById("result");

    let cardPlayerValue = cardPlayer.attributes[selectedAttribute];
    let cardMachineValue = cardMachine.attributes[selectedAttribute];

    if (cardPlayerValue > cardMachineValue) {
        resultElement.innerHTML = "Você venceu a máquina!!";
    } else if (cardMachineValue > cardPlayerValue) {
        resultElement.innerHTML = "Você perdeu para a máquina!!";
    } else {
        resultElement.innerHTML = "Empatou!!"
    }

    console.log(cardMachine)
}