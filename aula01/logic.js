function calculateAvarage() {
    let grade01 = parseFloat(document.getElementById("grade01").value);
    let grade02 = parseFloat(document.getElementById("grade02").value);
    let grade03 = parseFloat(document.getElementById("grade03").value);
    let grade04 = parseFloat(document.getElementById("grade04").value);

    let message = document.getElementById("avarageMessage");
    
    if (!checkGrade(grade01, grade02, grade03, grade04)) {
        let avarage = ((grade01 + grade02 + grade03 + grade04) / 4).toFixed(1)
        message.innerHTML = `A média é ${avarage}`;
    }

    clearValues();
}

function checkGrade(g1, g2, g3, g4) {
    if (isNaN(g1) && g1 == 0 && isNaN(g2) && g2 == 0 && isNaN(g3) && g3 == 0 && isNaN(g4) && g4 == 0) {
        alert("Erro: Notas inválidas. Digite novamente...")
    }
}


function clearValues() {
    document.getElementById("grade01").value = "";
    document.getElementById("grade02").value = "";
    document.getElementById("grade03").value = "";
    document.getElementById("grade04").value = "";
}
