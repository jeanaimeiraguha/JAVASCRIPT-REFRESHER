// // Getting started with Array
// const Animals=['Cat', 'Cow', 'Goat','Sheep'];
// console.log("The list of animals we have as an array are:",Animals);
//shopping cart
const shoppingCart=[
     'Milk',
     'Mango',
     'Tomato',
     'Potato',
     'Avocado', 
     'Eggs',
  'Sugar'
];
console.log(shoppingCart[0]);

console.log(shoppingCart[4]);

let lastIndex = shoppingCart.length -1
console.log('Am Woundering about:', shoppingCart[lastIndex]);

// MOdifying array

const countries=[
     'Rwanda ',
     'Kenya',
     'Uganda',
     'Congo DRC'
]
//Modifying element with Index of 0 to "Zambia"
countries[0]='Zambia';
console.log(countries[0]);

//Methods to manipulate array
//Array constructor
//Creating an empty array 
const arr= Array()
console.log(arr);
// Creating an empty Array
const eightXvalues=Array(8).fill('X');
console.log(eightXvalues)