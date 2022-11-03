// Make use of the interface to define class types to explicitly enforce that a class meets a particular contract. 
// Use implements keyword to implement interface inside a class. 

// declaring a Product interface
interface ProductC {
    getGadget(): String[];
    displayProductName: (prouctId: number) => string;
    getProductDetails(): string[];
}

// declaring Gadget class which implements Product interface
class Gadget implements ProductC {
    getProductDetails(): string[] {
        return ['Samsung', 'LG', 'Moto'];
    }
    displayProductName(productId: number): string {
        if (productId === 101) {
            return 'Product Name is Mobile';
        } else if ( productId === 201) {
            return 'Product Name is Tablet';
        }
        return 'done'
    }

    getGadget(): string[] {
        return ['Mobile', 'Tablet', 'iPad', 'iPod'];
    }
}

// creating instance of class of interface type
const gadget: ProductC = new Gadget();

// creating variable to hold return value of displayProductName function
const productNameC: string = gadget.displayProductName(101);
const allGadgets: String[] = gadget.getGadget()

// line to populate Product name on console
console.log(productNameC);
console.log(allGadgets);