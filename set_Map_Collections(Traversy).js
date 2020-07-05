// 1. ----------Set------------------
const myArray = [5, 'maru', true, 11, null];
const mySet = new Set(myArray);                    // always we pass an 1D array inside Set signature

// inserting new element using .add() fn
mySet.add('34');
console.log(mySet);                          // prints Set { 5, 'maru', true, 11, null, '34' }
console.log('\n=========================');

mySet.add( {
   'a': 1,                         // Note: we can also write key value in quotes (hence not an issue)
    b: 2,
    c: 'Yes i can do it'
} );

mySet.delete(11);
mySet.add('yaha');
console.log(mySet);                           // prints Set {5,'maru',true,null,'34',{ a: 1, b: 2, c: 'Yes i can do it' },'yaha'}
console.log('\n=========================');

console.log(mySet.size);            // prints 7
console.log('\n=========================');


// iterate through each set items using for-of loop
console.log('Printing via 1st way: ');
for(const value of mySet) console.log(value);
console.log('\n=========================');


// Or, via forEach loop
console.log('Printing via 2nd way: ');
mySet.forEach(value => console.log(value) ); 
console.log('\n=========================');


// 2. -------------Map------------------
const myBrray = [ ['c1', 'hey ya'], ['d1', 'yes coming'] ];            
const myMap = new Map(myBrray);                               // always we pass an 2D array inside Map signature
console.log(myMap);                                              // prints Map { 'c1' => 'hey ya', 'd1' => 'yes coming' }
console.log('\n=========================');


// inserting new elements using .set() fn
myMap.set(3, 'aasambhav nhi hain');                    // we can also store integers or boolean as map key
// myMap.delete('yes coming');                     // have to pass key instead of value otherwise won't delete the particular item

console.log(myMap);                              // prints Map {'c1' => 'hey ya','d1' => 'yes coming', 3 => 'aasambhav nhi hain'}
console.log('\n=========================');

// deleting a record by passing key value inside .delete() fn
myMap.delete('d1');
console.log(myMap);                                   // prints Map { 'c1' => 'hey ya', 3 => 'aasambhav nhi hain' }
console.log('\n=========================');

console.log(myMap.size);                                // prints 2 (instead of 3 since 1 item is deleted)
console.log('\n=========================');


// 3. -------------WeakSet------------------
/* let carWeakSet = new WeakSet();
console.log(carWeakSet);                             // prints WeakSet { <items unknown> }

// declaring 2 car objects
const car1 = {
    make: 'Honda',
    model: 'Civic',
    year: 2009
}
carWeakSet.add(car1);

const car2 = {
    make: 'Toyota',
    model: 'Camry',
    year: 2011
}
carWeakSet.add(car2);
console.log(carWeakSet.size); 

// 4. ----------------WeakMap------------------
const carWeakMap = new WeakMap();

const key1 = {
    id: 1
}

const key2 = {
    id: 2
}

const car3 = {
    make: 'Honda',
    model: 'Civic',
    year: 2009
}

const car4 = {
    make: 'Toyota',
    model: 'Camry',
    year: 2011
}

carWeakMap.set(key1, car3);
carWeakMap.set(key2, car4);

// carWeakMap.delete(key1);
console.log(carWeakMap);                    // prints WeakMap { <items unknown> }                  


// --------my own programs start from below for my better undertstanding--------------              */

const myMap1 = new Map([ ['9', '8'], ['hk', 'see ya'] ] );        // array elements should be bordered with another array (2D array reqd when new Map fn() is invoked)

// using .get() fn to get the value pair inside the Map
console.log(myMap1.get('hk') );                                      // prints see ya
console.log('\n=========================');


// wiping out entire map using .clear() fn
myMap1.clear();                              
console.log(myMap1.size);                                    // prints 0
console.log('\n=========================');

console.log(myMap1);                                        // prints Map {}
console.log('\n=========================');


myMap1.set('a1', 'haa tum');
console.log(myMap1);                                        // prints Map { 'a1' => 'haa tum' }
console.log('\n=========================');


const t2Map = new Map([ ['p', 89] ]);                     // for single array element, 2D array should be there inside Map signature
console.log(t2Map);                                           // prints Map { 'p' => 89 }
console.log('\n=========================');

// iterating over maps, way 1
for(const [key, value] of myMap1) console.log(`${key} = ${value}`);           // prints Map { 'a1' => 'haa tum' }
console.log('\n=========================');

// way2
t2Map.forEach( (value, key) => console.log(key, value) );              // always pass (value, key) in parameter otherwise key value won't be printed first, prints          p 89
    





















