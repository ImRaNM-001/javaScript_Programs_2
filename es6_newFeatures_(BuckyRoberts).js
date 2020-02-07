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


// Tutorial-2 - Let //



































