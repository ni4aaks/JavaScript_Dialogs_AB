var c = 3,
    d = 4,
    e = 1;

if (c > d && c > e) {
    console.log("Vislielākais ir c=" + c)
    if (d > e) {
        console.log("Nākamais ir d=" + d)
        console.log("Mazākais ir e=" + e)
    }
    else {
        console.log("Nākamais ir e=" + e)
        console.log("Mazākais ir d=" + d)
    }

}
else if (d > c && d > e) {
    console.log("Vislielākais ir d=" + d)
    if (c > e) {
        console.log("Nākamais ir c=" + c)
        console.log("Mazākais ir e=" + e)
    }
    else {
        console.log("Nākamais ir e=" + e)
        console.log("Mazākais ir c=" + c)
    }
}
else {
    console.log("Vislielākais ir e=" + e)
    if (d > c) {
        console.log("Nākamais ir d=" + d)
        console.log("Mazākais ir c=" + c)
    }
    else {
        console.log("Nākamais ir c=" + c)
        console.log("Mazākais ir d=" + d)
    }
}

// document.getElementById("sequence_before").innerHTML = "c + d" + e;

let a = 5, b = 7;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);