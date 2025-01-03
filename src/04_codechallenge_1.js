/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

const zahl1 = Number(prompt("Zahl 1 = "));
const zahl2 = Number(prompt("Zahl 2 = "));
const summe = zahl1 + zahl2;

console.log("Summe = " + summe);

