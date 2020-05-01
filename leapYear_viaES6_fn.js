// leap year program (ES6 way)

// using a return statement
const mg1 = 'Is a leap year',
mg2 = 'Not a leap year',

leapYear = (year) =>{
  if(year % 4 === 0){
    if(year % 100 === 0){
      if(year % 400 === 0) return mg1;      // 3rd if closed
      else return mg2;
    }                   // 2nd if closed
    else return mg1;
  }                   // 1st if closed
  else return mg2; 
};         // fn closed

console.log(leapYear(2020) );     // prints Is a leap year
console.log(leapYear(1900) );     // prints NOT a leap year


