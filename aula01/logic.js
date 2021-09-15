// Variables

let name = prompt("Digite o nome do aluno que deseja registrar as notas: ");

let grade01 = parseFloat(prompt("Digite a nota do primeiro Bimestre: "));
let grade02 = parseFloat(prompt("Digite a nota do segundo Bimestre: "));
let grade03 = parseFloat(prompt("Digite a nota do terceiro Bimestre: "));
let grade04 = parseFloat(prompt("Digite a nota do quarto Bimestre: "));


calculateAvarage(grade01, grade02, grade03, grade04);

// function to calculate the average
function calculateAvarage(g1, g2, g3, g4) {
    console.log(g1);
    if (!isNaN(g1) && g1 != 0 && !isNaN(g2) && g2 != 0 && !isNaN(g3) && g3 != 0 && !isNaN(g4) && g4 != 0) {
        let avarage = ((g1 + g2 + g3 + g4) / 4).toFixed(1);
        alert(`A média do aluno ${name} é de ${avarage}`);
    } else {
        alert("Dados inválidos!")
    }
}




