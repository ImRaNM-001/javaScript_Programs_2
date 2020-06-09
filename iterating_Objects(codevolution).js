/* way 1: he wrote a complex code (fn() ) to get this done, instead follow way 2
let person = {
    fname : 'chester',
    lname : 'ming'
};

person[Symbol.iterator] = function(){
    let properties = Object.keys(person),
    count = 0,
    isDone = false,
    nxt = () =>{
        if(count >= properties.length) isDone = true;
        return{done : isDone,   value : this[properties[count++] ]};
    };
    return {nxt};
};

for(let p of person) console.log(p);            .......commented as this code doesn't work with latest ES */


// way 2: most easy way
const person = {
    fname : 'chester',
    lname : 'ming'
};

for(const val of Object.values(person) ) console.log(val);        // prints chester min (vertical lines)