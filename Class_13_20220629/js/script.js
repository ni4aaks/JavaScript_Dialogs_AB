console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
console.log(text);
document.getElementById("automatic_count").innerHTML = text;
/*
text += cars[0] + "<br>";
text = text + cars[0] + "<br>"
*/