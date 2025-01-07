/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

*/

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});


// Eingabe des Namens
const name = prompt('Bitte gebe einen Namen ein: ');

// Eingabe des Alters
const age = +prompt('Bitte gebe das Alter ein: ');

// Funktion zur Bestimmung des Getränks basierend auf dem Alter
function getGetraenk(alter) {
    let getraenk;
    if (alter > 0 && alter < 6) {
        getraenk = "Milch";
    } else if (alter >= 6 && alter <= 12) {
        getraenk = "Saft";
    } else if (alter >= 13 && alter <= 17) {
        getraenk = "Cola";
    } else if (alter >= 18) {
        getraenk = "Wein";
    } else {
        getraenk = "Ungültiges Alter";
    }
    console.log(`${name} trinkt ${getraenk}.`);
}

// Aufruf der Funktion
getGetraenk(age, name);