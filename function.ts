// // // declaring a function which accepts string datatype as parameter and returns string array
// // function getMobileByManufacturer(manufacturer: string): string[] {
// //   let mobileList: string[];

// //   if (manufacturer === "Samsung") {
// //     mobileList = [
// //       "Samsung Galaxy S6 Edge",
// //       "Samsung Galaxy Note 7",
// //       "Samsung Galaxy J7 SM-J700F",
// //     ];
// //     return mobileList;
// //   } else if (manufacturer === "Apple") {
// //     mobileList = ["Apple iPhone 5s", "Apple iPhone 6s ", "Apple iPhone 7"];
// //     return mobileList;
// //   } else {
// //     mobileList = ["Nokia 105", "Nokia 230 Dual Sim"];
// //     return mobileList;
// //   }
// // }

// // // logic to populate the Samsung manufacturer details on console
// // console.log("The available mobile list: " + getMobileByManufacturer("Samsung"));



// // Arrow functions 

// // declaring an Array with 3 objects
// const manufacturersf = [
//   { id: 'Samsung', price: 150 },
//   { id: 'Microsoft', price: 200 },
//   { id: 'Apple', price: 400 },
//   { id: 'Micromax', price: 100 }
// ];

// let test: any[];



// // Arrow function to populate the details of Array whose price is greater than 200
// function myFunction() {
//   test = manufacturersf.filter((manufacturer) => manufacturer.price >= 200);
// }

// // self-invoking an arrow function
// myFunction();

// console.log('Details of Manufacturer array are : ');

// // logic to populate the manufacturer array details based on id value
// for (let item of test) {
//   console.log(item.id);
// }


