"use strict";
// Make use of the interface to define class types to explicitly enforce that a class meets a particular contract. 
// Use implements keyword to implement interface inside a class. 
// declaring Gadget class which implements Product interface
class Gadget {
    getProductDetails() {
        return ['Samsung', 'LG', 'Moto'];
    }
    displayProductName(productId) {
        if (productId === 101) {
            return 'Product Name is Mobile';
        }
        else if (productId === 201) {
            return 'Product Name is Tablet';
        }
        return 'done';
    }
    getGadget() {
        return ['Mobile', 'Tablet', 'iPad', 'iPod'];
    }
}
// creating instance of class of interface type
const gadget = new Gadget();
// creating variable to hold return value of displayProductName function
const productNameC = gadget.displayProductName(101);
const allGadgets = gadget.getGadget();
// line to populate Product name on console
console.log(productNameC);
console.log(allGadgets);
