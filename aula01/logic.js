// Variables

var name = prompt("Digite o nome do aluno que deseja registrar as notas: ");

var grade01 = parseFloat(prompt("Digite a nota do primeiro Bimestre: "));
var grade02 = parseFloat(prompt("Digite a nota do segundo Bimestre: "));
var grade03 = parseFloat(prompt("Digite a nota do terceiro Bimestre: "));
var grade04 = parseFloat(prompt("Digite a nota do quarto Bimestre: "));


calculateAvarage(grade01, grade02, grade03, grade04);

// function to calculate the average
function calculateAvarage(g1, g2, g3, g4) {
    console.log(g1);
    if (!isNaN(g1) && g1 != 0 && !isNaN(g2) && g2 != 0 && !isNaN(g3) && g3 != 0 && !isNaN(g4) && g4 != 0) {
        var avarage = ((g1 + g2 + g3 + g4) / 4).toFixed(1);
        console.log(avarage);

        alert(`A média do aluno ${name} é de ${avarage}`);
    } else {
        alert("Dados inválidos!")
    }
}




