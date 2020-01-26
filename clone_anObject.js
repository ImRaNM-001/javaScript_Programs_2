const circle = {
    radius: 1,
    draw(){
        console.log('Draw a Circle');
    }
}

const another = {};
console.log(another);

// 1- cloning/storing circle object into another object using for-in loop (old way of cloning)
for (let key in circle)
another[key] = circle[key];

//console.log(key, another[key]);           // this line wil give error as key variable is the key pointing to circle object and not another object

console.log(another);
console.log('\n<------line gap------>\n');

// 2- using Object.assign method (new way)
const another1 = Object.assign({}, circle);          // 1st param is target object while 2nd param is source object who is to be cloned

console.log(another1);
console.log('\n<-----line gap------>\n');

const another2 = Object.assign({                // inserted a new object with 2 properties
    color: 'red',
    size: 1
},
circle);

console.log(another2);
console.log('\n<-----line gap------>\n');

another2.draw();
console.log('\n<-----line gap------>\n');


// 3- using Spread operator (most easiest way)
const another3 = {...circle};
console.log(another3);



