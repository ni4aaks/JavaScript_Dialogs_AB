/*
text = "";
var i = 1;
for (; i < 5;) { //savādāk for cikla pieraksts
    text = text + i + "<br>";
    i++;
}
console.log(text);
document.getElementById("for_automatic_count_nonclassic").innerHTML = text;

text = "";
var i = 1;
while (i < 5) {  // while cikla izmantošanas iespējas
    text = text + i + "<br>";
    i++;
}
console.log(text);
document.getElementById("while_automatic_count").innerHTML = text;

text = "";
for (let i = 1; i < 5; i++) {
    text = text + i + "<br>";
    if (i == 3) {
        break
    }

}
document.getElementById("for_automatic_count_classic").innerHTML = text;

text = "do while:<br>";
var i = 1;
do {
    text = text + i + "<br>";
    i++;
} while (i < 5 && i == 2);

console.log(text);
document.getElementById("do_while_automatic_count").innerHTML = text;
*/