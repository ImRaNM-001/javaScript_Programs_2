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
        const years = new Date().getFullYear() - this.year;
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

book1.revise(2015);
console.log(book1);         // prints book with revised year i.e, Book { title: 'Book One', author: 'Sejal Thakur', year: 2015, revising: rue  }

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

console.log(mag1);                  // prints Magazine { title: 'Mag One', author: 'Jane Mary', year: 2013,  month: undefined }
console.log(mag1.getSummary() );        // prints Mag One was written by Jane Mary in 2013























