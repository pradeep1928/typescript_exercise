"use strict";
// declaring a empty string array
const cart = [];
// arrow function logic to push values into cart array
const pushtoCart = (item) => { cart.push(item); };
// logic to add items into cart
function addtoCart(...productName) {
    for (const item of productName) {
        pushtoCart(item);
    }
    return cart;
}
// to populate value on console
console.log('Cart Items are:' + addtoCart(' Moto G Play, 4th Gen', ' Apple iPhone 5s'));
