// ex 1(a) - dealing with JSON.parse()
const txt = `{ "employees" : [ { "firstName": "john", "lastName": "doe" }, 
                              { "firstName": "radha", "lastName": "sanghvi" },
                                { "firstName": "edward", "lastName": "daniels" }
                            ]
}`;

const obj_Big = JSON.parse(txt);
console.log(obj_Big.employees);      // prints [ { firstName: 'john', lastName: 'doe' }, { firstName: 'radha', astName: 'sanghvi' },{ firstName: 'edward', lastName: 'daniels' }  ]

console.log(obj_Big.employees[1].firstName);        // prints radha


// ex 1(b)
const json1 = '{"result": true, "count": 42}';     // must write in 1 line if using single quotes '' and key inside double quotes " "
const obj1 = JSON.parse(json1);
console.log(obj1.result);                   // prints true


// but to break lines, you must use ES6 backticks `` and use double quotes in all strings
const json2 = `{                        
    "name": "Guru", 
    "age": 42
}`;

const obj2 = JSON.parse(json2);
console.log(obj2);                  // prints { name: 'Guru', age: 42 }
console.log(obj2.name);             // prints Guru
console.log(obj2.age);               // prints 42


// ex 2 - dealing with JSON.stringify()
const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['JavaScript', 'TypeScript', 'Java'],
    girlfriend: null
  };
  
  let json = JSON.stringify(student);
  console.log(json);             // prints {"name":"John","age":30,"isAdmin":false,"courses":["JavaScript","TypeScript","Java"],"girlfriend":null}
