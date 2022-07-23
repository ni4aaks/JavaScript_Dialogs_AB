//Masīva elementu salīdzināšanas izmantojot funkcijas

/*
let grades = [91, 66, 77, 84, 66];
let search = 66;

function searchGrades(grades, search) {
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] == search) {
            console.log(`The grades ${search} exisit`);
            break;
        }
    }
}
searchGrades(grades, search);
*/

// saīstinātā versijia 1. versija

/*
let grades = [91, 66, 77, 84, 66];
let search = 66;

function searchGrades(grades, search) {
    for (currentGrade of grades) {
        if (currentGrade == search) {
            console.log(`The grades ${search} exisit`);
            break;
        }
    }
}
searchGrades(grades, search);
*/
