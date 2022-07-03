var x = [3, 2, 1];

console.log("Pirms" + x[0] + " " + bx[2] + " " + x[3]);

if (x[1] > x[0]) {
    [x[0], x[1]] = [x[1], x[0]];
}
if (x[2] > x[0]) {
    x[0] = x[0] + x[2];
    x[2] = x[0] - x[2];
    x[0] = x[0] - x[2];
}
if (x[2] > x[1]) {
    x[1] = x[1] + x[2];
    x[2] = x[1] - x[2];
    x[1] = x[1] - x[1];
}

document.getElementById("sequence_after").innerHTML = "Pirmais" + x;

// console.log("a= " + a + " b= " + b + " c= " + c);