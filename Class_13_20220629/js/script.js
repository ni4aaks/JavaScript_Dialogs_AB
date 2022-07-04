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

var text5 = "",
    dalit = [2, 3, 4, 6, 8];


for (let i = 1; i < 25; i++) {
    text5 = text5 + i;
    var flag = 1;
    for (let k = 0; k < dalit.length; k++) {
        if (i % dalit[k] == 0) {
            if (flag == 1) {
                flag = 0;
                text5 = text5 + " dalās ar skaitli ";
            }
            text5 = text5 + dalit[k] + ",";
        }
    }
    if (flag == 0) {
        text5 = text5.slice(0, text5.length - 1);
    }


    if (i % 2 == 0) {
        text5 = text5 + " pāra skaitlis ";
    } else {
        text5 = text5 + " nepāra skaitlis ";
    }
    text5 = text5 + "<BR>";
}
document.getElementById("for_automatic_count_odd_until_10_with_even_descripttion_new").innerHTML = text5;
