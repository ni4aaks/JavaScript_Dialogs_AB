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
*/

const EU = {
    countrys: ['Latvija', 'Lietuva', 'Cehija'],

    EU_classification: function () {
        return this.countrys == prompt("Enter country name") ? "EU" : "Not EU"
    }
};