/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check !
4. Ausgabe in Konsole :  check!
*/

// module: calculator | tests:
// agreement : "+","-","*",":","/"
const ERROR_STR_CAL = "Can't divide by 0";
const ERROR_STR_DIV = "Can't Divide by 0!";



output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));

function calculator(a,b,op) {
    switch (op) {
        case "+":
            return add(a,b);
        case "-":
            return sub(a,b);
        case "*":
            return mult(a,b);
        case "/":
        case ":":
            return div(a,b);
        default:
            return ERROR_STR_CAL;
    }
}





// output(add(3,2));
// output(sub(10,7));
// output(mult(4,6));
// output(div(4,2));
// output(div(3,2));
// output(div(3,-2));
// output(div(0,2));
// output(div(3,0));
// output(div(0,0));



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
function div(a,b) {

    if (b == 0) {
        return ERROR_STR_DIV;
    }
    return a / b ;
}

//     if (b != 0) {
//        return a / b
//      } else {
//         return ERROR_STR_DIV;
//      }
//  }

// module: output | test:
// output("hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}
