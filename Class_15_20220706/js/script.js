/*
@name summator
@description Sums a and b.
@param { Number } a
@param { Number } b
@returns { Number } summator
*/
// function summator(a, b) {
//     c = a + b;
//     return c;
// }

// function dialogs() {
//     var a = Number(prompt("Ievadiet a vērtību:")),
//         b = Number(prompt("Ievadiet b vērtību:"));
//     document.getElementById("summator_1").innerHTML =
//         a + " un " + b + " summa ir " + summator(a, b);
// }

// dialogs();

/*
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text += x + "<br>";
}
console.log(text);

document.getElementById("summator_2").innerHTML = text;

let text2 = "";
for (var i = 0; i < cars.length; i++) {
    text2 += cars[i] + "<br>";
}
console.log(text2);

document.getElementById("summator_3").innerHTML = text2;

let language = "JavaScript";

let text3 = "";
for (let x of language) {
    text3 += x + "<br>";
}

document.getElementById("summator_4").innerHTML = text3;
document.getElementById("summator_5").innerHTML = language[0];

vards = prompt("Ievadiet teikumu, kuru apstrādāt: ")
// vards = "a ab abc abcd abcdf abcdfg opoototo";
// text4 = text4 + " "; // kā varinats lai parādītu pēdējā vārda 
var burtu_skaititajs_varda = 0;
var burtu_skaititajs_teikuma = 0;
var derigo_vardu_skaits = 0;
N = 5;
for (let x of vards) {
    burtu_skaititajs_teikuma++;
    if (x == " ") {
        // console.log(x + " tā ir atstarpe");
        // console.log("Iepriekšējā vārdā bija " + burtu_skaititajs_varda + " burti")
        if (burtu_skaititajs_varda >= N) {
            // console.log("Vēl vairāk, iepriekšējā vārdā bija" + N + "un vairāk simboli");
            derigo_vardu_skaits++;

        }
        burtu_skaititajs_varda = 0;
    } else {
        burtu_skaititajs_varda++;
        // console.log(x + " tas ir " + burtu_skaititajs_varda + ".simbols vārdā");

        if (burtu_skaititajs_teikuma == vards.length) {
            // console.log("Iepriekšējā vārdā bija " + burtu_skaititajs_varda + " burti");
            if (burtu_skaititajs_varda >= N) {
                // console.log("Vēl viarāk, iepriekšējā vārdā bija " + N + " un vairāk burti");
                derigo_vardu_skaits++;
            }
            burtu_skaititajs_varda = 0;
            // console.log("Un vēl vairāk šis bija pēdējais vārds teikumā")


        }
    }
}

document.getElementById("vardi_analize").innerHTML = "Šajā teikumā:<br><b>" + vards + "</b><br>ir " + derigo_vardu_skaits + " vārdi, kuru" + " garums ir >= " + N;
*/

function burti(x, counter) {
    vards = prompt("Ievadiet teikumu, kuru apstrādāt: ")

ppp
}