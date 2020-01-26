const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
}

// 1- using for-in loop
for (let key in circle) console.log(key, circle[key]);       // prints radius 1 draw [Function: draw] 

console.log('\n<------line gap------>\n');

// 2- using for-of loop
for (let key of Object.keys(circle)) console.log(key);         // prints radius draw (just the key of object)

console.log('\n<------line gap------>\n');

for (let entry of Object.entries(circle)) console.log(entry);


// 3- using in operator to check availability of property in an object
  if('radius' in circle) console.log('Yes available');

  if('draw' in circle) console.log('Yes available');

  if('tooth' in circle) console.log('Yes available');   // it won't print anything if property name is not found in object










