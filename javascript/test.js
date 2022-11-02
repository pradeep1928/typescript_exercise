"use strict";
let productId = 1011;
let productName = 'OnePlus node 10r';
let productAvailable = true;
//Enum items can also be initialized with different values than the default value. 
//If you set a different value for one of the variables, the subsequent values will be incremented by 1.
var mobilePrice;
(function (mobilePrice) {
    mobilePrice[mobilePrice["black"] = 25000] = "black";
    mobilePrice[mobilePrice["gold"] = 25001] = "gold";
    mobilePrice[mobilePrice["silver"] = 26000] = "silver";
    mobilePrice[mobilePrice["white"] = 24500] = "white";
})(mobilePrice || (mobilePrice = {}));
// console.log('product name is ', typeof productName)
// console.log('product Id is ', typeof productId)
// console.log('product Available is ', typeof productAvailable)
console.log('mobilePrice enum', mobilePrice['gold']);
// function to calculate final amount after discount 
function calculateAmount(price) {
    let discount;
    let totalAmount;
    if (price === mobilePrice.gold) {
        discount = 5;
    }
    else if (price === mobilePrice.black) {
        discount = 8;
    }
    else if (price === mobilePrice.silver) {
        discount = 10;
    }
    else {
        discount = 12;
    }
    totalAmount = price - (price * discount / 100);
    return totalAmount;
}
// lines to populate the Actual and Final price of Black color Mobile
console.log('Actual price of the Mobile is $' + mobilePrice.gold);
console.log('The final price after discount is $' + calculateAmount(mobilePrice.gold));
