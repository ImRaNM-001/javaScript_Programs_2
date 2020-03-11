"use strict";
// -----------------Linking fns() to objects-----------pgm ex1
const someFunction = () => this;		// will print window object in console of browser. Note: Fat Arrow fn in JavaScript inherit the scope from their parent	when defined within a function, this points to and prints the object itself.

const myCar = {
	make: 'volvo',
	model: 's60',
	price: 42000,

	printDetails(){
		console.log('That is my car', this);
		console.log(`Make: ${this.make}
			Model: ${this.model}
			Price: ${this.price} `);
		},

	engine: {
		cylinders: 4,
		displacement: 2000,
		horsepower: 250,
		
		printDetails(){
			console.log(`Displacement: ${this.displacement}cc
				Horsepower: ${this.horsepower}bhp `);
			},
		}
	};
				
	console.log('printing details of car\n');	
	myCar.printDetails();		// prints That is my car {make: 'volvo',	model: 's60',price: 42000,		printDetails: [Function: printDetails], engine: { cylinders: 4, displacement: 2000,	horsepower: 250,		printDetails: [Function: printDetails]  }	}Make: volvo	Model: s60	Price: 42000 
	
	console.log('\nprinting details of engine\n');
	myCar.engine.printDetails();	// prints Displacement: 2000cc	Horsepower: 250bhp 

// pgm ex2
const myCar2 = {
	make: 'volvo',
	model: 's60',
	price: 42000,
	
	engine: {
		cylinders: 4,
		displacement: 2000,
		horsepower: 250,
	}
};

function printMyCar2Details(){					// generic fn() for main car object
	console.log(`Make: ${this.make}
		Model: ${this.model}
		Price: ${this.price} `);
	}

function printMyCar2EngineDetails(){					// generic fn() for car_engine object
	console.log(`Displacement: ${this.displacement}cc
		Horsepower: ${this.horsepower}bhp `);
	}


console.log('\nprinting car details of car2\n');
printMyCar2Details.call(myCar2);			// call fn helps to print myCar2 object using printMyCar2Details() fn...prints Make: volvo Model: s60 Price: 42000 

console.log('\nprinting engine details of car2\n');
printMyCar2EngineDetails.call(myCar2.engine);	// call fn helps to print myCar2.engine object using printMyCar2EngineDetails() fn................prints Displacement: 2000cc Horsepower: 250bhp 


const yourCar = {
	make: 'Porsche',
	model: '718 Cayman',
	price: 61000,
	
	engine: {
		cylinders: 4,
		displacement: 2500,
		horsepower: 350
	}
};

console.log('\nprinting car details of yourcar\n');
printMyCar2Details.call(yourCar);		// passing new car object i.e, yourCar against printMyCar2Details fn()..........prints Make: Porsche Model: 718 Cayman Price: 61000 

console.log('\nprinting car details of yourcar\n');
printMyCar2EngineDetails.call(yourCar.engine); 	// passing new car object i.e, yourCar.engine against printMyCar2EngineDetails fn()............prints Displacement: 2500cc Horsepower: 350bhp





















