/* const anyMsg = 'Yeh Dil \n Aashiqanaa';             // \n helps print in next line [ugly way of writing code]
console.log(anyMsg);                

const msg1 = 'dus bahane\n' +                       // [again, ugly way of writing code]
                'karke ley gye dil\n' +
                'he hee';

console.log(msg1); */

/* different literals just to give a quick background:
object --> {} 
boolean --> true, false
string --> '', " "
template literals (introduced in ES6) --> ` ` (back ticks) */

// writing template literals below, Ex: 1
const emailBody = `Hi Walter,

I need your help to resolve my 'github' hard
reset problem, hence if you could..........

look "into my case!!"!

Best Regards,
\\Imran
`; 
console.log(emailBody);  

// Ex:2
const nameW = 'Walter';
const product = function(){                     // note: we MUST declare function before calling it below with $ 
    return 'Baadshah moveie srk';
}

const emailBody1 = `Hi ${nameW} ${2+900} ${product()},         
I need your help to resolve my 'gitgub' hard
reset problem, hence if you could..........

look "into my case!!"!

Best Regards,
\\Imran
`;
console.log(emailBody1);




