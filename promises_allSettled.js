/* Note: Differences- Promise.allSettled([p1, p2, p3]) will wait for all 3 promises to either be resolved or rejected but in Promise.all([p1, p2, p3]) it needs all the promises to be resolved or else it would throw an error. */

// 1- Ex: 1 Promise.allSettled()
const p1 = new Promise( (resolve, reject) => setTimeout(resolve, 200) );       // o/p: { status: 'fulfilled', value: undefined }
const p2 = new Promise( (resolve, reject) => setTimeout(reject, 300) );         // o/p: { status: 'rejected', reason: undefined }
const p3 = new Promise( (resolve, reject) => setTimeout(resolve, 4000) );     // takes 4sec to resolve and o/p: { status: 'fulfilled', value: undefined }

Promise.allSettled( [p1, p2, p3] ).then(results => 
    results.forEach(result => console.log(result) )    
    );


// 2- Ex:2 Promise.all()            [need to try and execute it]
const p4 = new Promise( (resolve, reject) => setTimeout(resolve, 300) , );
const p5 = new Promise( (resolve, reject) => setTimeout(resolve, 2000, 'hookah-bar') );

Promise.all( [p4, p5] ).then(results =>                       // 1st way of printing: i found it hard, prints undefined hookah-bar (in 2 lines)
    results.forEach(result => console.log(result) )
);


Promise.all( [p4, p5] ).then(result => {                     // 2nd way of printing: i found this easy, prints [ undefined, 'hookah-bar' ]
    console.log(result) ;
} );


// 3- Ex: 3 
/* const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);                                                   // prints [ 3, 42, 'foo' ]
}); */







