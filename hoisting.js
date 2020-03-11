a = 5;
console.log(a);
var a;                      // will not throw error

b = 6;
console.log(b);
let b;                      // should throw "uncaught reference error: cannot access a before initialization"

c = 7;
console.log(c);
const c;                    // should throw "uncaught syntax error: missing initializer in const declration"

