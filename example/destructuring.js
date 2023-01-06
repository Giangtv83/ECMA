const firstName = "Tran";
const lastName = "Van Giang";

console.log(`Name ${firstName} ${lastName}`)

const [a, ...b] = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(a, b); //1, 2, [3, 4, 5]

//oject = { key:value }
const person = { //oject literal
    name: "John",
    age: 20,
    add: {
        city: "Ha Noi",
    }
};
//const myName = person.name;
const { name, age, add: { city } } = person;
console.log(city);

function showInfo({ name, age, add: { city } }) {
    console.log(name, age, city);
}
showInfo(person);

const [firstValue, secondValue] = [1, 2];