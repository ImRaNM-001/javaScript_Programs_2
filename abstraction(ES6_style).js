class Employee{

    constructor(name, age, baseSal){
        this.name = name;
        this.age = age;
        this.baseSal = baseSal;
    }

    get calFinalSal(){
        const monBonus = 1500;
        const finalSal = this.baseSal + monBonus;
        return finalSal;
        // console.log(finalSal);                // it's a good practice to avoid writing console log statement in methods and replace it with a return statement.        
    }

    get empDetails(){
        console.log('Employee name is: ' + this.name + ', Employee age is: ' + this.age + ' and Employee salary is: ' + this.calFinalSal);        
    }

}                           // closing Employee class here
    
const emp1 = new Employee('Raja', 42, 55000);
emp1.empDetails;

// emp1.calFinalSal;                   // even outsider employee Raja tries to access 1st fn here i.e, calFinalSal, he still cannot see the inside code or temper it, just gets output of 56500 printed in the console just like 2nd fn () i.e, what empDetails gives him.









