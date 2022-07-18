//const car = { type: "Fiat", model: "500", color: "white" };

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

/*console šīs funkcijas izsaukšana

person
{firstName: 'John', lastName: 'Doe', id: 5566, fullName: ƒ}
person.firstName
'John'
person.fullName
ƒ () {
        return this.firstName + " " + this.lastName;
    }
person.fullName();
'John Doe'
/*
//salīdzināt ievadīto tekstu ar objektā iekļauto masīvu
*/


let prompt_value = prompt("Enter country name:");

function EU_country_find(value, index, array) {
    console.log(prompt_value);
    console.log(value);
    return value == prompt_value;
}

const EU = {
    countries: ["Latvija", "Lietuva", "Cehija"],
    // prompt_value: prompt("Enter country name:"),
    /*  EU_country_find: function (value, index, array) {
        // console.log(this.prompt_value);
        console.log(prompt_value);
        console.log(value);
        // return value == this.prompt_value;},
        return value == prompt_value;},*/
    EU_classification: function () {
        // return this.countries.find(this.EU_country_find) == undefined ? "Not EU" : "EU";
        return thiLs.countries.find(EU_country_find) == undefined ? "Not EU" : "EU";
    },
};

// let search = prompt("Enter country name:");

// const EU = ["Latvija", "Lietuva", "Cehija"];

// function search_countries(EU, search) {
//     for (var i = " "; i < EU.length; i++) {
//         if (EU[i] == search) {
//             console.log("The grade exisits!");
//             break;
//         }
//     }
// }
// search_countries(EU, search);

