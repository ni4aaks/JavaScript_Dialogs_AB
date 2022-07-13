// funkcijas definēšanas ar apgalvojuma palīdzību

/*function square_statment(number) {
    return number * number;
}
const x = square_statment(4);
console.log(x);


//Funkcijas definēšanas ar izteiksmes palīdzību
const square = function (number) {
    return number * number;
}
const y = square(4); // x gets the value 16
console.log(y);


const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
}

console.log(factorial(5));

*/

//document.getElementById("demo").innerHTML = text;

// piemērs ar funkcijas, kuras arguments (viens no) arī ir funkcija

/* jāpiepucē no vides
function map(f, a) {
    const result = [];
    for (const v of a) {
        result[i] = f(v);
    }
    return result;
}

const square_for_array_each_element = function (x) {
    return x * x;
}

const cube_for_array_each_element = function (x) {
    return x * x * x;
}

const numbers = [0, 1, 2, 5, 10];

const square = map(cube_for_array_each_element, numbers);
console.log(cube);

const cube = map(cube_for_array_each_element, numbers);
console.log(cube);
*/

/*
function dmsToDeg(dms) {
    if (!dms) {
        return Number.NaN;
    }
    var neg = dms.match(/(^\s?-)|(\s?[SW]\s?$)/) != null ? -1.0 : 1.0;
    dms = dms.replace(/(^\s?-)|(\s?[NSEW]\s?)$/, '');
    dms = dms.replace(/\s/g, '');
    var parts = dms.match(/(\d{1,3})[.,°d ]?\s*(\d{0,2})[']?(\d{0,2})[.,]?(\d{0,})(?:["]|[']{2})?/);
    if (parts == null) {
        return Number.NaN;
    }
    // parts: 
    // 0 : degree 
    // 1 : degree 
    // 2 : minutes 
    // 3 : secondes 
    // 4 : fractions of seconde 
    var d = (parts[1] ? parts[1] : '0.0') * 1.0;
    var m = (parts[2] ? parts[2] : '0.0') * 1.0;
    var s = (parts[3] ? parts[3] : '0.0') * 1.0;
    var r = (parts[4] ? ('0.' + parts[4]) : '0.0') * 1.0;
    var dec = (d + (m / 60.0) + (s / 3600.0) + (r / 3600.0)) * neg;
    return dec;
}

function dms2deg(s) {

    // Determine if south latitude or west longitude
    var sw = /[sw]/i.test(s);

    // Determine sign based on sw (south or west is -ve) 
    var f = sw ? -1 : 1;


    // Get into numeric parts
    var bits = s.match(/[\d.]+/g);

    var result = 0;

    // Convert to decimal degrees
    for (var i = 0, iLen = bits.length; i < iLen; i++) {

        // String conversion to number is done by division
        // To be explicit (not necessary), use 
        //   result += Number(bits[i])/f
        result += bits[i] / f;

        // Divide degrees by +/- 1, min by +/- 60, sec by +/-3600
        f *= 60;
    }

    return result;
}
*/

function convertDDToDMS(deg, lng){
    var d = parseInt(deg);
    var minfloat  = Math.abs((deg-d) * 60); 
    var m = Math.floor(minfloat);
    var secfloat = (minfloat-m)*60;
    var s = Math.round(secfloat); 
    d = Math.abs(d);

    if (s==60) {
        m++;
        s=0;
    }
    if (m==60) {
        d++;
        m=0;
    }

    return {
        dir : deg<0?lng?'W':'S':lng?'E':'N',
        deg : d,
        min : m,
        sec : s
    };
}

function coordToStrWithDecimals(coord)
{   
    let centiSecs = Math.round(Math.abs(coord) * 360000)
    let frac = Math.floor(centiSecs % 100)
    let seconds = Math.floor(centiSecs / 100)
    let sec = Math.floor(seconds % 60)
    let minutes = Math.floor(seconds / 60)
    let min = minutes % 60
    let deg = Math.floor(minutes / 60)
    return deg + "°" + ((min < 10) ? "0" : "") + min + "'" + ((sec < 10) ? "0" : "") + sec + "." + ((frac < 10) ? "0" : "") + frac + '"'
}