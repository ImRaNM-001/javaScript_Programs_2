// creating a deep copy of an object where changing obj1 couldn't affect obj2
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

const car2 = JSON.parse(JSON.stringify(car1) );		// creating a deep copy of obj1 (will not work where attribute value are fn() bcoz fns() are not recognized by JSON format)
car2.tyres = 'pirelli';
car2.seats.color = 'blue';								// adding new key + values
console.log(car2);		// prints {	make: 'volvo',	model: 's60',	price: 42000,	color: 'grey',	seats: { material: 'leather', color: 'blue' },	tyres: 'pirelli'  }
console.log(car1);		// prints {	make: 'volvo',	model: 's60',	price: 42000,	color: 'grey',	seats: { aterial: 'leather', color: 'brown' }  }