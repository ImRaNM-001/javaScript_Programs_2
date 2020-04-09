// part 1: creating a circle object (works good only 1 circle object to be created)
const circle = {
	radius: 1,
	isVisible: true,
	
	location: {
		a: 1,
		b: 2
	},
	// draw: () => {
	draw(){
		console.log('Draw');
	}
}

console.log(circle);		// prints {  radius: 1,  isVisible: true,  location: { a: 1, b: 2 },  draw: [Function: draw] }
circle.draw() ;				// prints Draw

// part 2: writing inside a function (long code)
/*function createCircle(radius){
	const circle1 = {
		radius: radius,
		draw(){
			console.log('Draw Circle ' + radius);
		}
	}
	return circle1;
}*/

// part 3: simplying the code and minimizing the code (intent to create multiple circle objects) (short code)

// function createCircle(radius){					// below is a factory function whose job is to create some objects like circle1 & circle2
// 	return{										// returning an entire object
// 		radius,	
// 		draw(){						
// 			console.log('Draw a Circle ' + radius);
// 		}
// 	}
// }

// commented above block as it is ES5 and below is ES6
const createCircle = (radius => {
	return {
		radius,
		draw(){
			console.log('Draw a Circle ' + radius);
		}
	}
} );

const circle1 = createCircle(11);
console.log(circle1.radius);		//prints 11
circle1.draw();						// prints Draw a Circle 11
console.log(circle1);		//prints entire cricle1 object ... i.e, { radius: 11, draw: [Function: draw] }


const circle2 = createCircle(22);
console.log(circle2.radius);		//prints 22
circle2.draw();						// prints Draw Circle 22
console.log(circle2);		//prints entire cricle2 object ..... ie, { radius: 22, draw: [Function: draw] }




/* difference between factoryFunction and ConstructorFunction:
factoryFunction follows camelCase, can start with small letters where ConstructorFunction follows PascalNotation, must start with capital letter and uses this keyword */

function CreateCircle2(radius){
	this.radius = radius;

	this.draw = () => {
		console.log('Draw', radius);
	}
}

const circle3 = new CreateCircle2(90);
console.log(circle3.radius);				// prints 90
circle3.draw();								// prints Draw 90



