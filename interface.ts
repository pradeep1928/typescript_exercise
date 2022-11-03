// declaring an interface
interface Product {
    productId: number ;
    productName: string ;
}

// logic to display the Product details with interface object as parameter
function getProductDetails(productobj: Product): string {
    return 'The product name is : ' + productobj.productName + "\nThe product id is : " + productobj.productId;
}

// declaring a variable having interface properties
const prodObject = {productId: 1001, productName: 'Mobile'};

// declaring variable and invoking Product details function
const productDetails: string = getProductDetails(prodObject);

// line to populate the created product on console
console.log(productDetails);



// DUCK-TYPING
//TypeScript compiler uses the duck-typing method to compare one object with the other 
// by comparing that both the objects have the same properties with the same data types.
// TypeScript interface uses the same duck typing method to enforce type restriction. 
// If an object that has been assigned as an interface contains more properties than the interface mentioned properties, 
// it will be accepted as an interface type and additional properties will be ignored for type checking



// declaring an interface
interface Product {
    productId: number;
    productName: string;
}

// logic to display the Product details with interface object as parameter
// tslint:disable-next-line:adjacent-overload-signatures
function getProductDetailsD(productobj: Product): string {
    return 'The product name is : ' + productobj.productName;
}

// declaring a variable along with interface properties
const prodObjectD = {productId: 1001, productName: 'Mobile', productCategory: 'Gadget'};

// declaring variable and invoking Product details function
const productDetailsD: string = getProductDetails(prodObject);

// line to populate the created product variable on console
console.log(productDetailsD);
