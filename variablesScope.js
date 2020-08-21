//trick 1: example to show that can use/print fn() scope variable post fn() call if not used let, const to that fn() scope variable
let globalLet = "This is a global variable"; 
   
function fun(){                     // or we can also write const fun = () =>{ 
  localLet = "This is a local variable"; 
} 

fun(); 

console.log(globalLet);         // prints This is a global variable 
console.log(localLet);          // prints This is a local variable  only because "localLet" variable has no let, const


//trick 2: example to show global let variables can be overriden by fn() scope variable
let kamzorLet = "This is a global variable"; 
   
function fun1(){                     // or we can also write const fun = () =>{ 
  kamzorLet = "This is a kamzor variable"; 
} 

fun1(); 

console.log(kamzorLet);        // prints This is a kamzor variable     (globalVariable "kamzorLet" having same name got overriden)





/*  trick 3: example to show if "window" object is used then we can still call global variables from fn() block (this code runs only in Web compiler, hence commented)
let globalLet = "This is a global variable"; 
   
function fun(){ 
  let globalLet = "This is a local variable"; 
  console.log(window.globalLet);            // prints This is a global variable since we are using "window" object to call global variable
} 

fun();                  */



