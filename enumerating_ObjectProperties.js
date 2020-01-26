const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
}

// 1- using for-in loop
for (let key in circle) console.log(key, circle[key]);       // prints radius 1 draw [Function: draw] 

console.log('!--------line gap----------!');

// 2- using for-of loop
for (let key of Object.keys(circle)) console.log(key);         // prints radius draw (just the key of object)

console.log('!--------line gap----------!');

for (let entry of Object.entries(circle)) console.log(entry);


// 3- using in operator to check availability of property in an object
 
