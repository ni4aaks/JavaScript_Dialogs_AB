## if un else izmantošana

a = 10;

10
if (a > 10) {console.log(a +"ie lielāks par 150");}
undefined
a >150
false
a = 250;
250
if (a > 150) {console.log(a +"ie lielāks par 150");}
VM466:1 250ie lielāks par 150
undefined
a = 150;
150
if (a = 15) {console.log(a +"ie lielāks par 150");}
VM516:1 15ie lielāks par 150
undefined
if (a > 150) {console.log(a +"ie lielāks par 150");}
undefined
a = 0;
0
if (a) {console.log(a +"ir 'apaļā' nule - 00000000.....");}
undefined
a = 156;
156
if (a) {console.log(a +"nav 'apaļā' nule - 00000000.....");}
VM731:1 156nav 'apaļā' nule - 00000000.....
undefined
a = 156;
156
if (a % 2 = 0) {console.log(a + " nedaļas ar 2");}
VM967:1 Uncaught SyntaxError: Invalid left-hand side in assignment
a = 156;
156
if (a % 2 === 0) {console.log(a + " nedaļas ar 2");}
VM1028:1 156 nedaļas ar 2
undefined
a = 153;
153
if (a % 2 === 0) {console.log(a + " nedaļas ar 2");}
undefined
a != 0;
true
if (a != 0) {console.log(a + " nav apaļa nulle - 0000000");}
VM1215:1 153 nav apaļa nulle - 0000000
undefined
a != 0;
true
if (a != 0) {console.log(a + " nav apaļa nulle - 0000000"); } else {console.log(a + " ir apaļa nulle - 000000000....");}
VM1423:1 153 nav apaļa nulle - 0000000
undefined
a = 799; 
799
if (a != 0) {console.log(a + " nav apaļa nulle - 0000000"); } else {console.log(a + " ir apaļa nulle - 000000000....");}
VM1466:1 799 nav apaļa nulle - 0000000
undefined
if (a){console.log("a mainīgā vertība (" + a + ") nav apaļa nulle - 00000000");} else{console.log("a manīgā vertība ("+ a + ") ir apaļa 'nulle' - 00000000")}
VM1968:1 a mainīgā vertība (799) nav apaļa nulle - 00000000
undefined
a = 0;
0
if (a != 0) {console.log(a + " nav apaļa nulle - 0000000"); } else {console.log(a + " ir apaļa nulle - 000000000....");}
VM2048:1 0 ir apaļa nulle - 000000000....
undefined

valoda = "LV";
'LV'
if (valoda == "LV") {sveiciens = "Sveiki! Runāsim latviski";} else {sveiciens = "Hello! Let's speak in English";}
console.log(sveiciens);
VM3408:2 Sveiki! Runāsim latviski
undefined
valoda = "ENG";
'ENG'
if (valoda == "LV") {sveiciens = "Sveiki! Runāsim latviski";} else {sveiciens = "Hello! Let's speak in English";}
console.log(sveiciens);
VM3458:2 Hello! Let's speak in English
undefined
time = 9;
9
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
'Good morning'
console.log(greeting);
VM3562:1 Good morning
undefined
time = 10;
10
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} console.log(greeting);
VM3671:7 Good day
undefined
time = 22;
22
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} console.log(greeting);
VM3709:7 Good evening
undefined


## samainīt vērtības

let a = 5, b = 7;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);