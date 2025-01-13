/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

// function output(text) {
//     console.log(text);
// }

// function getSentence(words, punctuationType) {
//     let sentence = words.join(' ');
//     let punctuation;

//     switch (punctuationType) {
//         case 'S':
//             punctuation = '.';
//             break;
//         case 'Q':
//             punctuation = '?';
//             break;
//         case 'E':
//             punctuation = '!';
//             break;
//         default:
//             punctuation = '.';
//     }

//     return sentence + punctuation;
// }


function getSentence(arr,op) {
    const GAP = " ";
    const PUNCT = getPunct(op);  // . ? !
    let str = ""; 

    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length-1) {
            str += arr[i] + GAP;
        } else {
            str += arr[i] + PUNCT; 
        }
    }
     return str;
}


function getPunct(op) {
    switch (op) {
        case "S":
           return "."; 
        case "Q":
            return "?";
        case "E":
            return "!";
        default:
            return "#";
    }
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}

