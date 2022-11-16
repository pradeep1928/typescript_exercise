"use strict";
// abstract class Product declaration
class ProductAb {
    getFeatures() {
        return 'Features';
    }
}
// declaring Gadget class extending abstract class Product
class GadgetAb extends ProductAb {
    getProductName() {
        return 'Product name is Mobile';
    }
    getFeatures() {
        return 'This product has camera feature';
    }
}
// declaring Clothing class extending abstract class Product
class Clothing extends ProductAb {
    getProductName() {
        return 'Product name is Shirt';
    }
}
// Gadget class object creation
const gAb = new GadgetAb();
// line to invole getProductName() through Gadget object
console.log(gAb.getProductName());
console.log(gAb.getFeatures());
// Clothing class object creation
const c = new Clothing();
// line to invole getProductName() through Clothing object
console.log(c.getProductName());
