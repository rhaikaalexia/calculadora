function limpar () {
    document.getElementById("xPontoA").value = "";
    document.getElementById("xPontoB").value = "";
    document.getElementById("yPontoA").value = "";
    document.getElementById("yPontoB").value = "";
    document.getElementById("display").value = "";
}
 function calcularDistancia () {
    var xPontoA = Number(document.getElementById("xPontoA").value);
    var xPontoB = Number(document.getElementById("xPontoB").value);
    var yPontoA = Number(document.getElementById("yPontoA").value);
    var yPontoB = Number(document.getElementById("yPontoB").value);

    var primeiraParte = Math.pow((xPontoB - xPontoA) , 2)
    var segundaParte = Math.pow((yPontoB - yPontoA), 2)
    var soma = primeiraParte + segundaParte;
    var resultado = Math.sqrt(soma)
    document.getElementById("display").value = resultado.toFixed(2);


 }  
 function calcularPontoMedio () {
    var xPontoA = Number(document.getElementById("xPontoA").value);
    var xPontoB = Number(document.getElementById("xPontoB").value);
    var yPontoA = Number(document.getElementById("yPontoA").value);
    var yPontoB = Number(document.getElementById("yPontoB").value);

    var primeiraParte = (xPontoA + xPontoB) / 2;
    var segundaParte = (yPontoA + yPontoB) / 2;

document.getElementById("display").value =  `PM = (${primeiraParte},${segundaParte})`;

 }
function Coeficiente(){
    var xPontoA = Number(document.getElementById("xPontoA").value);
    var xPontoB = Number(document.getElementById("xPontoB").value);
    var yPontoA = Number(document.getElementById("yPontoA").value);
    var yPontoB = Number(document.getElementById("yPontoB").value);

    var parteSuperior = yPontoA - yPontoB;
    var parteInferior = xPontoA - xPontoB;
    var m = parteSuperior / parteInferior; 

    document.getElementById("display").value = `m = ${m}`;
} 
function calcularEquaçaodaReta() {
    var xPontoA = Number(document.getElementById("xPontoA").value);
    var xPontoB = Number(document.getElementById("xPontoB").value);
    var yPontoA = Number(document.getElementById("yPontoA").value);
    var yPontoB = Number(document.getElementById("yPontoB").value);

    var mat = [
        [xPontoA, xPontoB, 1, xPontoA],
        [yPontoA, yPontoB, 1, yPontoA],
    ]

    var n1 = ((-1 * mat[0][1]) * mat[1][0]); 
    var x1 = ((-1 * mat[0][2]) * mat[1][1]);
    var y1 = ((-1 * mat[0][3]) * mat[1][2]);

    var n2 = mat[0][0] * mat[1][1];
    var x2 = mat[0][1] * mat[1][2];
    var y2 = mat[0][2] * mat[1][3];

    var somaX = x1 + x2;
    var somaY = y1 + y2;
    var somaN = n1 + n2; 

    somaX = (somaX > 0 ? `+${somaX}` : somaX);
    somaY = (somaY > 0 ? `+${somaY}` : somaY);
    somaN = (somaN > 0 ? `+${somaN}` : somaN);

    document.getElementById("display").value = `${somaX}x ${somaY}y ${somaN} = 0 `
}