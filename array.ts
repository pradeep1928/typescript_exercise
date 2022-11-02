// declaring an array of any datatypes
const manufacturers: any[] = [
    { id: 'Samsung', checked: false },
    { id: 'Motorola', checked: false },
    { id: 'Apple', checked: false },
    { id: 'Sony', checked: false }
];


console.log('Available Products are: ');
for (let item of manufacturers) {
    console.log(item.id)
}