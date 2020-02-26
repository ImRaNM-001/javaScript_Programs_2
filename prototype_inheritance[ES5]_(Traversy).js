function Book(title, author, year) {
    this.title = title;                         //  this refers to the instance ex: book2, book3 which will be later created
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary =  () => {                     // we must write a function outside constructor using prototype keyword (deliberately wrote fat arrow fn which is ES6 but prototype is ES5)
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// creating Magazine constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);         // [ES5 syntax]: using call method to call Book object parameters and this refers to Magazine instance (constructor)
    this.month = month;
}

// call getSummary from mag1 object, which is possible by inheriting prototype method of Book
Magazine.prototype = Object.create(Book.prototype);       // [ES5 syntax]: must be written before instantiating mag1 otherwise TypeError: mag1.getSummary is not a function will come

// instantiate Magazine object and print it
const mag1 = new Magazine('Mag One', 'Hillary', 2017, 'Feb');
console.log(mag1);          // prints Magazine object Magazine {    title: 'Mag One',    author: 'Hillary',    year: 2017,    month: 'Feb'  }

console.log(mag1.getSummary() );                // prints Mag One was written by Hillary in 2017

// use Magazine constructor for mag1
Magazine.prototype.constructor = Magazine;
console.log(mag1);          // prints Magazine object Magazine {    title: 'Mag One',    author: 'Hillary',    year: 2017,    month: 'Feb'  }...this difference will be noticed only in chrome console window after expanding the object constructor property













