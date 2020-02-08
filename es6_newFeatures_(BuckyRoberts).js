//******Tutorial-1 - Let*********//
let movie = 'inception';
function theMovie(){
    return movie;
}
console.log(movie);             // prints inception
console.log(theMovie() );       // refers to movie variable initialized above and prints its value named inception


// testing if const keyword works inside block scope (just like let) throws error or not
const a = 'ali';
const fn = () => {
    const a = 'bali';
    return a;
}
console.log(a);             // prints ali
console.log(fn() );         // prints bali

// exploring more usage of let keyword
function testFunction(){
    let isHorse = true;
    let saying = 'Briyani is good';
    console.log('\n Before if stmt: ' , saying);            // pirnts Before if stmt:  Briyani is good
    
    if(isHorse){
        let saying = 'I am a horse';
        console.log('\n Inside if stmt: ' , saying);        // prints Inside if stmt:  I am a horse..........however if let removed will refer to saying value above if block
    }
    console.log('\n After if stmt: ', saying);              // prints After if stmt:  Briyani is good
}
testFunction();

console.log('\n<------line gap------>\n');  

//*******Tutorial 4 - Spread Operator*******//
const add = (a, b, c) => a + b + c;
const arR = [3, 4, 5];                          // here the objective is to break the array and use the numbers individually in the add ()

console.log(add(...arR) );                  // prints 12 as spread operator breaks array and adds 3 + 4 + 5 which is = 12 */

let meats = ['mutton', 'chicken'];
let food = ['keema', 'rice', 'sweet'];

// old (long) way using splice method
food.splice(1, 0, meats[0], meats[1]);      // basically we are telling to add from 1st position and remove nothing
console.log('Old way - the updated food array is: ');
console.log(food);

console.log('\n<------line gap------>\n');

// new way (using ... spread operator)
food = ['keema', ...meats, 'rice', 'sweet'];
console.log('New way - the updated food array is: ');
console.log(food);


//*******Tutorial 7 - Generators*******//       Note: They are functions which run until they get to yield keyword and pause, we resume them via next().value. Also, these functions cannot be used with fat arrow => functions
// Ex:1
function* sampleGen(){
    yield 'Apples';
    yield 'Bake';
    console.log('Ok, this is 1st line after Bake......');
    yield 'Cake';    
}

const sg = sampleGen();
// console.log(sG.next() );            // prints { value: 'Apples', done: false } false is because there are more yield statements

console.log(sg.next().value );         // prints Apples which is 1st value yielded 
console.log(sg.next().value );         // prints Bake (which is next value after Apples), after that it hits console.log stmt to print Ok, this is 1st line after Bake......as no yield keyword is provided

console.log(sg.next().value );          // prints Cake
console.log(sg.next().value );          // prints undefined as it has reached end of code and there is nothing else to print after Cake

// Ex:2
function* getUserID(){
    let id = 1;
    while(id < 4){
        yield id++;
    }
}

let usrID = getUserID();
console.log(usrID.next().value);            // prints 1 (1st id)
console.log(usrID.next().value);            // prints 2 (2nd id)
console.log(usrID.next().value);            // prints 3 (3rd id)

console.log(usrID.next().value);            // prints undefined (no more id as while loop ended at 3)























