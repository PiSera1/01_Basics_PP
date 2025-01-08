/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Manuel!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen(); // call

function ausgabeNamen() {
    // interne Variable | what happens in VEGAS ...
    let firstName = "Manuel";
    console.log("Hallo, " + firstName + "!");
}

//console.log/firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamen2("Markus"); // Argument --> Daten für Parameter
ausgabeNamen2("Manuel");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");
}