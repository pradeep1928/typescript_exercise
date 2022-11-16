// abstract class Product declaration
abstract class ProductAb {
    getFeatures(): string {
        return 'Features';
    }
    abstract getProductName(): string;
    }

// declaring Gadget class extending abstract class Product
class GadgetAb extends ProductAb {
    getProductName(): string {
        return 'Product name is Mobile';
    }

    getFeatures(): string {
        return 'This product has camera feature';
    }
}

// declaring Clothing class extending abstract class Product
class Clothing extends ProductAb {
    getProductName(): string {
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
