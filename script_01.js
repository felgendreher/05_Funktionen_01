"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo Thilo!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Aufruf (call)
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    let firstName = "Anna"; // what happens in Vegas, ...
    console.log("Hallo " + firstName + "!");
}

// console.log(firstName);  // .. stays in Vegas!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) {

    const cond1 = (firstName == "");
    const cond2 = (firstName == undefined);

    // if (cond1 || cond2 )
    if (!(firstName > " ")) // Numerisches Aquivalent ASCII
    {
        firstName = "Nobody";
    }

    console.log("Hallo " + firstName + "!");
}

// Argumente (args) --> Daten für Parameter
// ausgabeNamenParam("Riccardo"); // Argument(e)
// ausgabeNamenParam("Anna");
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("Vorname?"));

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName,familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!");
}

ausgabeNamenParams("Maxine","Mütze");
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

