// Promise.allSettled()
const p1 = new Promise((resolve, reject) => setTimeout(resolve, 200) );     // takes 2sec to resolve
const p2 = new Promise((resolve, reject) => setTimeout(reject, 300) );       // takes 3sec to reject
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 400) );     

Promise.allSettled([p1,p2,p3]).then(results => 
    results.forEach(result => console.log(result) )    
    );

// Promise.all()
const p4 = new Promise((resolve, reject) => setTimeout(resolve, 300) );
const p5 = new Promise((resolve, reject) => setTimeout(resolve, 200) );

/* Promise.all([p4, p5]).then(results1 =>
    results1.forEach(result1 => console.log(result1) )
    ); */



/* Note: Differences- Promise.allSettled([p1, p2, p3]) will wait for all 3 promises to either be resolved or rejected but in Promise.all([p1, p2, p3]) it needs all the promises to be resolved or else it would throw an error. */