"use strict";
// logic to display the Product details with interface object as parameter
function getProductDetails(productobj) {
    return 'The product name is : ' + productobj.productName + "\nThe product id is : " + productobj.productId;
}
// declaring a variable having interface properties
const prodObject = { productId: 1001, productName: 'Mobile' };
// declaring variable and invoking Product details function
const productDetails = getProductDetails(prodObject);
// line to populate the created product on console
console.log(productDetails);
// logic to display the Product details with interface object as parameter
// tslint:disable-next-line:adjacent-overload-signatures
function getProductDetailsD(productobj) {
    return 'The product name is : ' + productobj.productName;
}
// declaring a variable along with interface properties
const prodObjectD = { productId: 1001, productName: 'Mobile', productCategory: 'Gadget' };
// declaring variable and invoking Product details function
const productDetailsD = getProductDetails(prodObject);
// line to populate the created product variable on console
console.log(productDetailsD);
