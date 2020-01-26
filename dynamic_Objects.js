// add and delete properties in object
const circle ={
	radius: 10,
	color: 'red',
	log(){
		console.log('Log', this.radius);			//test
	}
}
console.log(circle);						// prints { radius: 10, color: 'red', log: [Function: log] }
	
circle.shape = 'round';					// adding new property shape
console.log(circle);						// prints { radius: 10, color: 'red', log: [Function: log], shape: 'round' }

circle.draw = function(){				// adding empty property draw function()
}
console.log(circle);				// prints { radius: 10, color: 'red', log: [Function: log], shape: 'round' ,   draw: [Function] }

delete circle.shape;					// deleting shape property from circle object
circle.isPresent = true;			// adding new property isPresent and assigning a boolean value

console.log(circle);				// prints {  radius: 10,  color: 'red',  log: [Function: log],  draw: [Function],  isPresent: true}

circle.log();						// prints Log 10