/***************** PRIMITIVE AND REFERENCE VALUES IN JS */

let name = "Sun";
let age = 24;

/*********** These above variables store in Stack Memory and called Primitive Values in JS**************/

let person = 
{
    "name" : "Sunny",
    "age" : 25,
};

/********** These above Objects are called Reference Values in JS .
 * A reference value allows you to add, change, or delete properties at any time. ********* */

// Add the Property in person object
person.city = "Delhi"; 

// Here Change the name property
person.name = "Sun";


// Here I delete the age property.
delete person.age;

// console.log(person["city"]);
// console.log(person);


/********* Assigning values one variable to another variable ********/

let a = 100;
let newA = a;

newA = newA + 1;

// console.log(a, newA);

/**********  If you change the value of one variable, it won’t affect the other on Stack memory(Primitive Value) **********/


let member = person;

member.age = 26;

console.log(member.age);


/***************When you assign a reference value from one variable to another, the JavaScript engine creates a reference so that both variables refer to the same object on the heap memory. This means that if you change one variable, it’ll affect the other.   *********************/
/*** Since both person and member variables reference the same object, changing the object via the member variable is also reflected in the person variable. ***/




