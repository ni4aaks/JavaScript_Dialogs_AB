a = 45; // mainīgās vertības definēšana

/*
a++;
++a;
a= a + a;

var b = 10;
b = 100;
const c =1000;
c = 0;
let b = 3;
*/


// console.log(a++);
// console.log(++a);

// var b = 10;
// console.log(b);

// const c = 100;
// console.log(c);

// let b = 3;
// console.log(b); // kļuda jo jau b ir definēt ar var
// document.getElementById("demo").innerHTML = 456 || 0;

//Pievieno scripta daļu p(paragrafam)
// let person = "John Doe", carName = "Volvo", price = 200; virākas vērtības

// Vairākas vērtības
// let person = "John Doe",
// carName = "Volvo",
// price = 200;

//'scope' - koda bloks, nodalām ar šādām figur iekavām - {}
// var atslēgas vārds ļauj nodefinēt globālo mainīgo - pieejams visā koda garumā

let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;


// 'scope' - skripta bloks, nodalāms ar šādām irkavām - {}
// var atslēgas vārds ļauj nodefinēt globālo mainīgo - pieejams visā koda garumā
var a = 45;
console.log("a vērtība (no 'galvena zara' pirms scope):" + a);
{
    console.log("a vērtība pirms pārdefinēšanas (no 'scope):" + a);
    var a = 46;
    console.log("a vērtība pēc pārdefinēšanas (no 'scope'):" + a);
}
console.log("a vērtība (no 'galvenā zara' pirms  scope):" + a);

//let atslēgas vārds ļauj nodefinēt lokālo mainīgo - pieejams koda bloks norobežotā ar {} - scope, vērtība var tikt manīta
let b = 60;
console.log("b vērtība (no 'galvena zara' pirms scope):" + b);

{
    let b = 61;
    console.log("b vērtība pēc pārdefinēšanas (no 'scope')):" + b);
}
console.log("b vērtība (no 'galvena zara' pirms scope)):" + b);

//const atslēgas vārds ļāuj nodefinēt lokālo konstanti - pieejams kods blokā norobežota ar {} - scope, vērtība nevar tikt mainīta
const c = 100;
console.log("c vērtība pirms pārdefinēšanas (no scope'):" + c);
{
    const c = 101;
    console.log("c vērtība pirms pārdefinēšanas (no 'scope'):" + c);
    console.log("c vērtība pēc pārdefinēšanas (no 'scope'):" + c);
}
console.log("c vērtība (no 'galvenā zara' pēc scope):" + c);

