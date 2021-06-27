// part 1: adding a simple string and number combination
const x = '5' + 2 + 3;
console.log(x);                 // prints 523 as '5' + 2 is '52' and then '52' + 3 is 523
  
const y = 5 + 2 + '3';
console.log(y);                 // prints 73 as 5 + 2 is 7 and then 7 + '3' is 73


// part 2: logic written inside a fn() returning number despite adding a number
const add = (par1, par2) =>{
    if (typeof par1 == 'number' && typeof par2 == 'number') return par1 + par2;
    else return +par1 + +par2;
};

console.log(add('95', '4') );            // prints 99
console.log(add('false', '4') );        // prints NaN