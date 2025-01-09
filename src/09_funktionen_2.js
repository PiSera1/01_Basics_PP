/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole :  check!
*/


output(add(3,2));
output(sub(10,7));
output(mult(4,6));
output(div(4,2));
output(div(3,2));
output(div(3,-2));
output(div(0,2));
output(div(3,0));
output(div(0,0));


// module: addition a + b | test:

function add(a, b) {
    return a + b;
}

// module: subtraction a - b | test:

function sub(a, b) {
    return a - b;
}

// module: multiplication a * b | test:

function mult(a, b) {
    return a * b;
}

// module: division a / b | test:

function div(a, b) {
    return a / b;
}





// module: output | test:
// output("hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}
