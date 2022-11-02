let productId: number = 1011;
let productName: string = 'OnePlus node 10r'
let productAvailable: boolean = true

//Enum items can also be initialized with different values than the default value. 
//If you set a different value for one of the variables, the subsequent values will be incremented by 1.
enum mobilePrice { black = 25000, gold, silver = 26000, white = 24500 }

// console.log('product name is ', typeof productName)
// console.log('product Id is ', typeof productId)
// console.log('product Available is ', typeof productAvailable)
console.log('mobilePrice enum', mobilePrice['gold'])

// function to calculate final amount after discount 
function calculateAmount(price: number): number {
    let discount: number
    let totalAmount: number
    if (price === mobilePrice.gold) {
        discount = 5
    }
    else if (price === mobilePrice.black) {
        discount = 8
    }
    else if (price === mobilePrice.silver) {
        discount = 10
    }
    else {
        discount = 12
    }
    totalAmount = price - (price * discount / 100)
    return totalAmount
}

// lines to populate the Actual and Final price of Black color Mobile
console.log('Actual price of the Mobile is $' + mobilePrice.gold);
console.log('The final price after discount is $' + calculateAmount(mobilePrice.gold));