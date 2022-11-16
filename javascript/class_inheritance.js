"use strict";
// declaring Product class
class ProductI {
    constructor(productIdI) {
        this.productIdI = productIdI;
    }
    getProduct() {
        console.log('Product id is : ' + this.productIdI);
    }
}
// declaring Gadget class which extends properties from Product class
class GadgetI extends ProductI {
    constructor(productName, productIdI) {
        super(productIdI);
        this.productName = productName;
    }
    getProduct() {
        super.getProduct();
        console.log('Product id is : ' + this.productIdI + ' Product name is : ' + this.productName);
    }
}
// Gadget class object creation
const gI = new GadgetI('Tablet', 1234);
// line to invoke getProduct method with the help of Gadget object
gI.getProduct();
