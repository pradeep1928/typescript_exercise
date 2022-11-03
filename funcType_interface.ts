// Interfaces can be used to define the structure of functions like defining structure of objects.
// Once the interface for a function type is declared, you can declare variables of that type 
// and assign functions to the variable if the function matches the signature defined in the interface.

// declaring a function
function CreateCustomerID(name: string, id: number): string {
    return 'The customer id is ' + name + ' ' + id;
    }

    // declaring a interface with function type
interface StringGenerator {
    
    (chars: string, nums: number): string;
    }

    // creating reference variable of above declared interface
let idGenerator: StringGenerator;

    // assignment of function to interface reference variable
idGenerator = CreateCustomerID;

    // declaring a string parameter to hold return value of function type interface
const customerId: string = idGenerator('Mr.Tom', 101);

    // line to populate the Customer Details
console.log(customerId);
