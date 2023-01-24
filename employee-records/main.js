var employees = []
function employee(name, jobtitle, salary, status){
    this.name = name
    this.jobtitle = jobtitle
    this.salary = salary
    this.status = "Full time"
    
}


var bob = new employee("Bob", "V School Instructor", "$3000/hour")
// console.log(bob)
bob.status = 'Part time'
// console.log(bob)
var ron = new employee("Ron", "U of U Instructor", "$4000/hour")
var jacob = new employee("Jacob", "Mayor", "$200,000/annually")
// console.log(bob)
// console.log(ron)
// console.log(jacob)


employees.push(bob)
employees.push(ron)
employees.push(jacob)


console.log(employees)

//////////////////////////////////////////////////////////////////////////////////////////////////////
// You are to create a collection of employee's information for your company. Each employee has the following attributes:

// 1. Name
// 2. Job title
// 3. Salary
// 4. Status

// First, you will create an empty array named `employees`

// Next, you will create an `Employee` constructor with the first three attributes defined at the 
//                          time of instantiation and the fourth will be defaulted to `"Full Time"`.

// This constructor will also have a method called `printEmployeeForm` that prints the employee's
//                                                                       information to the console.

// (e.g. `"Name: Bob, Job Title: V School Instructor, Salary: $3000/hour, Status: Part time"`)

// You will then:

// 1. Instantiate three employees
// 2. Override the status attribute of one of them to either "Part Time" or "Contract"
// 3. Call the `printEmployeeForm` method for each employee
// 4. Put the generated employees into the `employees` array using whichever method you prefer.

////////////////////////////////////////////////////////////////////////////////////////////////////



//      8am / 12pm / 4pm / 8pm

/////////////WORKS GREAT AS AN EXAMPLE THIS ALSO IS THE NEWEST://///////////
// function Employee1(name, age, type, salary) {    
//     this.name = "John";    
//     this.jobtitle = "I.T.";    
//     this.salary = "$3,000";    
//     this.type = "Full Time";    
// }   

// var myFirstEmployee = new Employee1(this.name, this.jobtitle, this.salary, this.type)

// console.log(myFirstEmployee)

//////////////////////////////////////////////////////////////////////////////////////////////////////
// function Employee(name, age, type) {    
//     this.name = name;    
//     this.age = age;    
//     this.type = type;    
// }  

// var empObj1 = new Employee("Irshad”, 26", "Full Time")

// var empObj2 = new Employee("Imran", "27", "Part Time");  


// console.log(empObj1)
// console.log(empObj2)



//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////WORKS GREAT AS AN EXAMPLE://///////////
// function Car (year, make, model) {
//     // use the "this" keyword to reference each object
//     // that is created from this constructor
//     this.year = 2015;
//     this.make = "Toyota";
//     this.model = "Tacoma";
// }

// // then we "instantiate" (create a new object from) our constructor with the "new" keyword and 
//                                                                          pass in the parameters:

// var myTacoma = new Car(this.year, this.make, this.model);
// console.log(myTacoma)