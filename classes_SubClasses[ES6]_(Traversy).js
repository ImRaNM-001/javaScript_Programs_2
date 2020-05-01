class Book{

    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    
    getAge(){
        const years = new Date().getFullYear() - this.year;      // console.log(new Date().getFullYear() ); equals 2020, i tried in another pgm
        return `${this.title} is ${years} years old`;
    }

    revise(updatedYear){
        this.year = updatedYear;
        this.revising = true;
    }

    static topBookStore(){
        return 'The Adventures of: Captain Steven & Bucky Barnes';
    }
}

const book1 = new Book('Book One', 'Sejal Thakur', 2012);
console.log(book1);         // prints Book { title: 'Book One', author: 'Sejal Thakur', year: 2012 }
console.log(book1.getAge() );           // prints Book One is 8 years old because 2020 - 2012 is 8 years


book1.revise(2015);
console.log(book1);         // prints book with revised year i.e, Book { title: 'Book One', author: 'Sejal Thakur', year: 2015, revising: true  }

// book1.topBookStore();               // throws TypeError: book1.topBookStore is not a function, hence i commented this code
console.log(Book.topBookStore() );          // prints The Adventures of: Captain Steven & Bucky Barnes


// Magazine Subclass
class Magazine extends Book{
    
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

// instantiate Magazine
const mag1 = new Magazine('Mag One', 'Jane Mary', 2013, 'Jul');

console.log(mag1);                               // prints Magazine { title: 'Mag One', author: 'Jane Mary', year: 2013,  month: 'Jul' }
console.log(mag1.getSummary() );               // prints Mag One was written by Jane Mary in 2013
console.log(mag1.getAge() );                      // prints Mag One is 7 years old because 2020 - 2013 is 7 years

console.log(Magazine.topBookStore() );          // prints The Adventures of: Captain Steven & Bucky Barnes as i have extended base or parent class, the static method can also be called using child or derived class (power of inheritance)






















