// checking via creating objects using various fn's()
class Vehicle{
    constructor(make, model, price){
        this.make = make;
        this.model = model;
        this.price = price;
    }
}

const car = new Vehicle('Honda', 'iv_tec', 987000);        // created new car object using Vehicle constructor
console.log(car instanceof Vehicle);                    // prints true

const car_str = JSON.parse(JSON.stringify(car) );        // making a deep copy 
console.log(car_str instanceof Vehicle);                // prints false

const car_sprd = {...car};
console.log(car_sprd instanceof Vehicle);                      // prints false

const car_crt = Object.create(car);
console.log(car_crt instanceof Vehicle);                // prints true


// checking via inheriting a class
class Bike extends Vehicle{
    constructor(make, model, price, seatheight){
        super(make, model, price);
        this.seatheight = seatheight;
    }
}

const bike1 = new Bike('Ducati', 'Monster_model', 245700);
console.log(bike1 instanceof Bike);                         // prints true
console.log(bike1 instanceof Vehicle);                       // prints true

// checking via function constructor
function City(name, area, population){
    this.name = name;
    this.area = area;
    this.population = population;
}

const city1 = new City('Banaglore', 1800, 987000);
console.log(city1 instanceof City);                     // prints true




