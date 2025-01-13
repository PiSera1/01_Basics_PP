// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}


/***** Erinnerung: Arrays *******/

let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
//             ["Ich","bin","Max"],
//             ["Ich","bin","Moritz"]
//         ];
      
// output(arr);
// output(arr[0]);
// output(arr[0][0]+ " " + arr[1][2]);
// output(arr[1][0]);
// output("------------");




/***** Objekte 1 Daten/Funktionen *******/
 
// let person = {
//                 firstName: "Kevin",
//                 familyName: "Wellens",
//                 salary: [120000, 160000,],
//                 sayHello: function() {
//                     return "Hallo";
//                 },
//                 sayHello2: function() {
//                     return "Hallo, ich bin " + this.firstName;
//                 }




// };


// output(person);
// output(person.firstName);
// output(person.familyName);
// output(person.salary[1]);
// output(person.sayHello());
// output(person.sayHello2());


// const txt = person.sayHello() + ", ich bin " + person.firstName +
//             " und verdiene " + person.salary[1] + " p.a."
// output(txt);


/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{{}}}


let baikal = {
            value: "10m",
            deep: {
                    deeper: {
                                deepest: "Das Licht - auf 1742m!",
                                temperature: "4 Grad Celsius"
                    }
            }
        };

output(baikal)
output(baikal.value);
output(baikal.deep.deeper.deepest);
output(baikal.deep.deeper.temperature);



// nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }


