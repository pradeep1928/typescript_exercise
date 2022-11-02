"use strict";
// declaring a Tuple
let productAvailableT;
// assigning value to Tuple
productAvailableT = ["samsung J5", false];
// Adding new value to Tuple
productAvailableT.push("Redmi note 8", true, "OnePlus nod t2", true);
console.log("-----", productAvailableT);
let productNameT;
let availability;
// logic to check product availability based on datatype of declared Tuple variable
for (let item of productAvailableT) {
    console.log("item--------", item);
    if (typeof item === "string") {
        productNameT = item;
    }
    else if (typeof item === 'boolean') {
        availability = item;
        if (availability == true) {
            console.log(`The product ${productNameT} is available`);
        }
        else if (availability == false) {
            console.log(`The product ${productNameT} is not available`);
        }
    }
}
