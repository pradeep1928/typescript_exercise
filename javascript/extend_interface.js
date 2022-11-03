"use strict";
// An interface can be extended from an already existing one using the extends keyword.
// In the code below, extend the productList interface from both the Category interface and Product interface.
// declaring a variable which is type of ProductList interface
const productDetailsE = {
    categoryName: 'Gadget',
    productName: 'Mobile',
    productId: 1234,
    list: ['Samsung', 'Motorola', 'LG']
};
// assigning list value of productDetailsE variable into another variable
const listProduct = productDetailsE.list;
// assigning productName value of productDetailsE variable into another variable
const pname = productDetailsE.productName;
// line to populate Product name
console.log('Product Name is ' + pname);
// line to populate Product list
console.log('Product List is ' + listProduct);
