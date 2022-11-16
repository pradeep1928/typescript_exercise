// declaring Product class
class ProductI {
    protected productIdI: number;
    constructor(productIdI: number) {
        this.productIdI = productIdI;
    }
    getProduct(): void {
        console.log('Product id is : ' + this.productIdI);
}}

// declaring Gadget class which extends properties from Product class
class GadgetI extends ProductI {
    constructor(public productName: string , productIdI: number ) {
        super(productIdI);
    }
    getProduct(): void {
        super.getProduct();
        console.log('Product id is : ' + this.productIdI + ' Product name is : ' + this.productName);
    }
}

// Gadget class object creation
const gI = new GadgetI('Tablet', 1234);

// line to invoke getProduct method with the help of Gadget object
gI.getProduct();