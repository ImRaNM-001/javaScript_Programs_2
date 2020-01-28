// first lets understand pipe operator (old concept)
//Ex: 1
let x = {
    profile: {
        name: 'john',
        age: 42
    }
}
console.log(x.profile.name);            // prints john

delete x.profile.name;                       // removed property name from profile object of x object
console.log(x.profile.name);            // prints undefined

console.log(x.profile.name || 'john');          // i added john name property again and it prints john

let y = {
    profile: {
        name: 'john',
        age: 42
    }
}
console.log(y.profile.name);            // prints john


// Ex: 2
let z = {
    profile: {
        name: ''
    }
}
console.log(z.profile.name || 'Hannah');            // prints Hannah (it thinks empty string as empty value and assigns and prints Hannah)
console.log(z.profile.age || 24);                   // prints 24


// now nullishCoalescing Operator example below (below piece of code throws SyntaxError: Unexpected token '?' bcoz as per techsith it may not run in 2020 [need chrome 80] but with babel only. As this is ES2020 syntax which won't work with current node js (hence try in future...for now block comment it) )

/* let w = {
    profile: {}
}
console.log(w.profile.name ?? 'bob');
console.log(w.profile.age ?? 55); */











