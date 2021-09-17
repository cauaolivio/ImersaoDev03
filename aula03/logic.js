let randomValue = parseInt(Math.random() * 11);
let chances = 0;

function guess() {
    let resultElement = document.getElementById("result");
    let valueGuess = parseInt(document.getElementById("value").value);

    if (valueGuess > 10 || valueGuess < 0) {
        resultElement.innerHTML = `Erro: o número precisa ser entre 0 e 10`;
        alterButton();
    } else {
        if (valueGuess == randomValue) {
            resultElement.innerHTML = `Acertou!! O número é o ${randomValue}`;
            alterButton();
        } else {
            if (randomValue > valueGuess) {
                resultElement.innerHTML = `Errou: O número secreto é maior que ${valueGuess}`;
                chances++;
            } else if (randomValue < valueGuess) {
                resultElement.innerHTML = `Errou: O número secreto é menor que ${valueGuess}`;
                chances++;
            }
        }

        if (chances >= 3) {
            if (valueGuess != randomValue) {
                resultElement.innerHTML = `Errou: O número secreto era ${randomValue}`;
                alterButton();
            }
        }
    }



}

function alterButton() {
    document.getElementById("btnPlay").disabled = false;
    document.getElementById("btnGuess").disabled = true;
}


function playAgain(params) {
    document.getElementById("btnPlay").disabled = true;
    document.getElementById("btnGuess").disabled = false;

    document.getElementById("value").value = "";
    chances = 0;
    randomValue = parseInt(Math.random() * 11);
}

