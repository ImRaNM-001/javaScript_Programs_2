const s2 = new String('Jalwa');
console.log(s2);                                            // prints [String: 'Jalwa']

// 1- object literal example
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: 2013,
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;          // this refers to the object book1 here
        // return `${book1.title} was written by ${book1.author} in ${book1.year}` ;          // also we can write book1.title which is object.propertyName (but it is bad way of writing code) 
    }
};
console.log(book1.getSummary() );                                    // prints Book One was written by John Doe in 2013

// to see values and keys inside an object
console.log(Object.values(book1) );                                  // prints [ 'Book One', 'John Doe', 2013, [Function: getSummary] ]
console.log(Object.keys(book1) );                                    // prints [ 'title', 'author', 'year', 'getSummary' ]

console.log('<----------->\n');

// 2- using constructor (helps in creating multiple books)
function Book(title, author, year) {
    this.title = title;                         //  this refers to the new instance of Book constructor ex: book2, book3 which will be later created
    this.author = author;
    this.year = year;

    this.getSummary = () => {                                 //ways to create a function using constructor by this (old way not recommended)
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = new Book('Book Two', 'Harry', 2014);
const book3 = new Book('Book Three', 'Cammy', 2011);

console.log(book2);                        // prints entire bbok2 object Book { title: 'Book Two',  author: 'Harry', year: 2014, getSummary: [Function]  }
console.log(book2.title);               // prints Book Two
console.log(book3.getSummary() );               // prints Book Three was written by Cammy in 2011


// 3- using prototype to create a function outside constructor
function Book(title, author, year) {
    this.title = title;                         //  this refers to the instance ex: book2, book3 which will be later created
    this.author = author;
    this.year = year;
}

    // Book.prototype.getSummary1 = function () {
    Book.prototype.getSummary1 = () => {                            // we must write a function outside constructor using prototype keyword
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

const book4 = new Book('Book 4', 'Julian', 2018);
console.log(book4.getSummary1() );                          // prints Book 4 was written by Julian in 2018

    Book.prototype.getAge = () => {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

console.log(book4.getAge() );                               // prints Book 4 is 2 years old

// manipulating data using revise function
    Book.prototype.revise = (updatedYear => {
        this.year = updatedYear;
        this.revising = true;                                   // revising variable no need to declare
    } );

    book4.revise(2019); 
    console.log(book4);                                     // prints Book { title: 'Book 4', author: 'Julian', year: 2019, revising: true }







