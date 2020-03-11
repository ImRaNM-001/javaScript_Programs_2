'use strict';
// ex 1: creating a basic object with a key fn()
const batman1 = {
    firstName: 'bruce',
    lastNname: 'wayne',
    secretIdentity(){
        return this.firstName + this.lastNname;
    }
};

console.log(batman1.secretIdentity() );         // prints bruce wayne

// or, store in a variable and then print it
const batIdentity = batman1.secretIdentity();
console.log(batIdentity);                            // prints bruce wayne

// ex 2: using Object.create() fn
const obj1 = {
    name: 'sharda',
    age: 38,

    work: {
        primary: 'jharu pohchaa',
        secondary: 'day care'
    }
}
const obj2 = Object.create(null);
console.log(obj2);                          // prints [Object: null prototype] {}

const obj3 = Object.create(obj1);
obj3.work.primary = 'dishWashing';
console.log(obj3);                          // prints {} i.e, an empty object as nothing is assigned to it.
console.log(obj3.work);                          // prints { primary: 'dishWashing', secondary: 'day care' }
console.log(obj1);                          // prints {    name: 'sharda',    age: 38,    work: { primary: dishWashing', secondary: 'day care' }  }


// ex 3: using Object.keys() fn to print all keys of an object
const car1 = {
	make: 'volvo',
	model: 's60',
	price: 42000,
	color: 'grey',

	seats: {
		material: 'leather',
		color: 'brown'
	}
};

console.log(Object.keys(car1) );            // prints [ 'make', 'model', 'price', 'color', 'seats' ]

// ex 4: using Object.values() fn to print all keys of an object
console.log(Object.values(car1) );      // prints [    'volvo',    's60',    42000,    'grey',    { material: leather', color: 'brown' }  ]

// ex 5: using Object.entries() fn to print all keys of an object
console.log(Object.entries(car1) );            // prints all key and values of car1 --> [    [ 'make', 'volvo' ],    [ 'model', 's60' ],    [ 'price', 42000 ],    [ 'color', 'grey' ],    [ 'seats', { material: 'leather', color: 'brown' } ]  ]

// ex 6: using Object.assign() fn to dump 1 object into another new object
const s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
};

const car2 = Object.assign(car1, {engine: s60Engine} );
console.log(car2);         // prints {    make: 'volvo',    model: 's60',    price: 42000,    color: 'grey',    seats: { material: 'leather', color: 'brown' },    engine: { cylinders: 4, displacement: 2000, horsepower: 250 }  }

console.log(car1);                    // prints {    make: 'volvo',    model: 's60',    price: 42000,    color: grey',    seats: { material: 'leather', color: 'brown' },    engine: { cylinders: 4, displacement: 2000, horsepower: 250 }  }........that is basically we can conclude that Object.assign() fn merges contents of source(original) object into the target object (obj2)







