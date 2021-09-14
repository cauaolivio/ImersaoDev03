function convert() {
    clearValues();

    var inputValue = document.getElementById("value").value;

    var realValue = parseFloat(inputValue * 5).toFixed(2);

    var convertedValueElement = document.getElementById("convertValue");
    var message = `O resultado em real é R$${realValue}`;

    convertedValueElement.innerHTML = message;

}

function clearValues() {
    var convertedValueElement = document.getElementById("convertValue");

    convertedValueElement.innerHTML = "";
}