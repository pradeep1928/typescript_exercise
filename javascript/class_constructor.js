"use strict";
// A constructor is a function that gets executed automatically whenever an instance of a class is created using a new keyword.
// To create a constructor, a function with the name as a "constructor" is used.
// declaring a Product class
class CProduct {
    // constructor declaration
    constructor(productId) {
        this.productId = productId;
    }
    getProductId() {
        return 'Product id is : ' + this.productId;
    }
}
// creation of Product class object
const product = new CProduct(1234);
// line to populate the product id details
console.log(product.getProductId());
