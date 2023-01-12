// spread -> copy
const person = {
    name: "Giang",
    age: 20,
    child: {
        name: "Dinh",
    }
};

// Sử dụng spread operator để copy
// const info = {
//     ...person,
//     address: "Thai Binh",
// };


// Sử dụng Object assign để copy
// const info = Object.assign({}, person, { address: "Thai Binh" });

// Deep copy

const info = structuredClone(person); // <=> JSON.parse(JSON.stringify(person))
info.address = "Nam Dinh";

info.child.name = "Tuan";

console.log("Person", person);
console.log("Info", info);

// array
// const numbers = [1, 2, 3, 4];
// const newNumers = [...numbers, 5];
// console.log("numbers", numbers);
// console.log(newNumers);

const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
];
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    const product = {
        id: 4,
        name: "Product D",
    };
    console.log([...products, product]);
});