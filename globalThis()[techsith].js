/* following code works only on browser(chrome) console tab and prints long window object for this, window, self and globalThis:      
Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}

but when run in CodePen shows error: Log Skipped: Sorry, this log was too large for our console. You might need to use the browser console instead.
*/

console.log(this);               // prints {} in VsCode Output
// console.log(window);            // prints ReferenceError: window is not defined in VsCode Output
// console.log(self);                  // prints ReferenceError: self is not defined in VsCode Output
//console.log(frame);                 // prints ReferenceError: frame is not defined  in VsCode Output [CodePen error: Uncaught ReferenceError: frame is not defined  at pen.js:-2]

console.log(globalThis);       // prints Object [global] {    global: [Circular],    clearInterval: [Function: clearInterval],    clearTimeout: Function: clearTimeout],    setInterval: [Function: setInterval],    setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },    queueMicrotask: [Function: queueMicrotask],    clearImmediate: [Function: clearImmediate],    setImmediate: [Function: setImmediate] {      [Symbol(util.promisify.custom)]: [Function]    }  }

