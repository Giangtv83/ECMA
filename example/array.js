const products = ["Product A", "Product B", "Product C"];

for (let i = 0; i <= products.length; i++) {
    console.log("For", products[i]);
};

for (let i in products) {
    console.log("For..in", products[i]);
};

for (let item of products) {
    console.log("For..of", item);
};

products.forEach(function (item, i) {
    console.log("ForEach", `${item} co index la: ${i}`);
});

const productList = [
    { id: 1, name: "Product A", price: 300 },
    { id: 2, name: "Product B", price: 400 },
    { id: 3, name: "Product C", price: 500 }
];

const productListElement = document.querySelector("#productList");

//Ex showproduct su dung forEach
// const showProducts = (item => {
//     let result = "";
//     productList.forEach((item) => {
//         result += `<div>${item.name}</div>`;
//     });
//     productListElement.innerHTML = result;
// });
// showProducts();

//map - method
const newProductList = productList.map((item) => {
    return `${item.name} + ahihi`;
});


// Ex: showproduct su dung map
const showProducts = () => {
    productListElement.innerHTML = productList.map((item) => `<div>${item.name}</div>`).join("");
}
showProducts();