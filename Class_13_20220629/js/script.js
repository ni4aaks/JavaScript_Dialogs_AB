console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

//const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// for (  ;  ;  ){}
// for (sā - darbības ciklu uzsākot ; n - nosacījumms cikla turpināšanai ; so - soļu veikšana) {}
// sā -> n 9nosacījums ir spēkā) -> so -> n(-"-") -> so -> n (nav spēkā)
// pārējām pie nākās darbības aiz cikla

let text = "";
for (let i = 1; i < 5; i++) {

    text = text + i + "<br>";
}
console.log(text);
document.getElementById("for_automatic_count").innerHTML = text;
/*
text += cars[0] + "<br>";
text = text + cars[0] + "<br>"
*/

let text2 = "";
for (let i = 1; i < 11; i++) {
    if (i % 2 == 0)
        text2 = text2 + i + "<br>";
}
console.log(text2);
document.getElementById("for_automatic_count_odd_until_10").innerHTML = text2;

let text3 = "";
for (let i = 1; i < 11; i++) {
    if (i % 2 > 0)
        text3 = text3 + i + "<br>";
}
console.log(text3);
document.getElementById("for_automatic_count_even_until_10").innerHTML = text3;

let text4 = "";
for (let i = 1; i < 11; i++) {
    if (i % 2 > 0)
        text4 = text4 + i + "Pāra skaitļi <br>";
    else
        text4 = text4 + i + "Nepāra skaitļi <br>";
}
console.log(text4);
document.getElementById("for_automatic_count_odd_until_10_with_even_descripttion").innerHTML = text4;