//Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. 
function act1() {
    // Recibir un numero
    let numero = prompt("Escribe un numero");
    // sacar cubo y cuadrado del 1 hasta llegar al numero dado por el usuario
    document.write("<table>");
    for (let i = 1; i <= numero; i++) {
        document.write("<tr>");
        document.write("<td>");
        document.write(i + "     ");
        document.write("</td>");
        document.write("<td>");
        document.write(Math.pow(i, 2) + "     ");
        document.write("</td>");
        document.write("<td>");
        document.write(Math.pow(i, 3));
        document.write("</td>");
        document.write("</tr>");
    }
    document.write("</table>");

    document.write('<br><br><a href="lab4.html"> Regresar a la página principal</a>');
    //imprimir en una tabla los cubos y cuadrados de dichos numeros

}



function act2() {
    //declarar variables aleatorias para sumar
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    //sumar dos variables
    let answer = num1 + num2;
    //medir el tiempo que se tarda en contestar 
    let time1 = performance.now();
    let respuesta = prompt(num1 + " + " + num2);
    let time2 = performance.now();
    let n = parseInt(respuesta);
    if (n == answer) {
        document.write("Correcto! " + "tardaste: " + Math.round((time2 - time1) / 1000) + " segundos en contestar.");
    } else {
        document.write("Incorrecto! " + "Tardaste: " + Math.round((time2 - time1) / 1000) + " segundos en contestar.");
    }
    document.write('<br><br><a href="lab4.html"> Regresar a la página principal</a>');
}

function act3() {

    let arreglo = [10];
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for (let i = 0; i < 10; i++) {
        arreglo[i] = Math.floor(Math.random() * 20 - 10);
        document.write(arreglo[i] + ", ");
    }

    for (i = 0; i < 10; i++) {
        if (arreglo[i] > 0) {
            positivos++;
        } else if (arreglo[i] == 0) {
            ceros++;
        } else if (arreglo[i] < 0) {
            negativos++;
        }
    }
    document.write("<br> Numeros positivos encontrados = " + positivos + "<br>Ceros encontrados = " + ceros + "<br>Numeros negativos encontrados = " + negativos);

    document.write('<br><br><a href="lab4.html"> Regresar a la página principal</a>');
}

function act4() {
    let matriz = []
    let suma = 0;

    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10);
            document.write(matriz[i][j] + ", ")
            suma = suma + matriz[i][j];
        }
        document.write("<br>");
    }
    let promedio = suma / (25);
    document.write("<br>Promedio = " + promedio);

    document.write('<br><br><a href="lab4.html"> Regresar a la página principal</a>');
}


function act5() {

    let num = prompt("Número a invertir = ")
    num = num + "";
    document.write(num.split("").reverse().join(""));
    document.write('<br><br><a href="lab4.html"> Regresar a la página principal</a>');
}

function act6() {
    let num = Math.floor(Math.random() * 1024)
    document.write("Número = " + num);
    let arr = new Array(15);
    for (let i = 0; num >= 1; ++i) {
        arr[i] = num % 2;
        num = Math.floor(num / 2);
    }
    document.write("<br>Binario = " + arr.reverse().join(""));

    let count1s = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == 1) {
            count1s++;
        }
    }
    if (count1s % 2 == 0) {
        document.write("<br>Paridad par");
    } else if (count1s % 2 == 1) {
        document.write("<br>Paridad impar");
    }

    document.write('<br><br><a href="lab4.html"> Regresar a la página principal</a>');
}
