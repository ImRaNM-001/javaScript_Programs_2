// use map() fn of array to print price of many objects inside an array
const items = [
    {name: 'meat', price: 25},
    {name: 'vegetables', price: 17},
    {name: 'cake', price: 20},
    {name: 'drinks', price: 38}
];

// requirement is to pick the price of each item from items array
// way 1: using for of loop and array (old concept)
const priceList1 = [];
for(const elem of items) priceList1.push(elem.price);

console.log(priceList1);                            // prints [ 25, 17, 20, 38 ]

// way 2: using in built array.map() which is mainly use to form new array with entire new elements from the original array (new & easy concept)
const priceList2 = items.map(elem => elem.price);
console.log(priceList2);                // prints [ 25, 17, 20, 38 ]
 

// use reduce() fn of array to print Total price of many objects inside an array
// way 1: using for of loop (old way)
let totalSum = 0;
for(const elem1 of items) totalSum += elem1.price;
console.log(totalSum);                                  // prints 100

// way 2: using reduce() fn (new way)
const totalReducer = items.reduce( (sum, elem) => sum + elem.price, 0);
console.log(totalReducer);                                  // prints 100

// use array.filter() fn to create new array out of existing one by applying a certain condtion
const expensiveItems = items.filter(elem => elem.price >=25);
console.log(expensiveItems);                    // prints [ { name: 'meat', price: 25 }, { name: 'drinks', price: 38 } ]

const costExpensiveItems = expensiveItems.reduce( (sum, elem) => sum + elem.price, 0);
console.log(costExpensiveItems);                // prints 63 which is the cost of expensive items



