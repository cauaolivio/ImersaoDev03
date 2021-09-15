function convert() {
    let select = document.getElementById("option").value;

    if (select == "dollar") {
        convertDollar();
    } else if (select == "euro") {
        convertEuro();
    } else if (select == "poundSterling") {
        convertPoundSterling();
    }
}


function convertDollar() {
    clearValues();

    let inputValue = document.getElementById("value").value;

    let realValue = parseFloat(inputValue * 5).toFixed(2);

    let convertedValueElement = document.getElementById("convertValue");
    let message = `O resultado em real é R$${realValue}`;

    convertedValueElement.innerHTML = message;
}


function convertEuro() {
    clearValues();

    let inputValue = document.getElementById("value").value;

    let realValue = parseFloat(inputValue * 6).toFixed(2);

    let convertedValueElement = document.getElementById("convertValue");
    let message = `O resultado em real é R$${realValue}`;

    convertedValueElement.innerHTML = message;
}

function convertPoundSterling() {
    clearValues();

    let inputValue = document.getElementById("value").value;

    let realValue = parseFloat(inputValue * 7).toFixed(2);

    let convertedValueElement = document.getElementById("convertValue");
    let message = `O resultado em real é R$${realValue}`;

    convertedValueElement.innerHTML = message;
}

function clearValues() {
    let convertedValueElement = document.getElementById("convertValue");

    convertedValueElement.innerHTML = "";
}

