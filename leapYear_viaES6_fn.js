// leap year program (ES6 way)
const leapYr = (year) => {
    if(year % 4 === 0) console.log('The year:', year, 'is a leap year');    
    else console.log('The year:', year, 'is not a leap year');   
  }
  
  const result = leapYr(2020);