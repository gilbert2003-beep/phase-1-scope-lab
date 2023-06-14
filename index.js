// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName () {
customerName = customerName.toUpperCase (); // Assign the result to the global variable
return customerName;
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. (Poor bob.)
function setBestCustomer () {
bestCustomer = 'not bob'; // Declare a global variable without using var, let, or const
return bestCustomer;
}

// Write a new function called overWriteBestCustomer that changes that bestCustomer variable.
function overWriteBestCustomer () {
bestCustomer = 'maybe bob'; // Assign a new value to the global variable
return bestCustomer;
}

// Declare a constant in global scope called leastFavoriteCustomer.
const leastFavoriteCustomer = 'bob';

// Write a function called changeLeastFavoriteCustomer that attempts to change that constant - notice what Javascript does when you try to change the constant.
function changeLeastFavoriteCustomer () {
leastFavoriteCustomer = 'not bob'; // Try to reassign the constant
return leastFavoriteCustomer;
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob'; // Assign a new value to the global variable without using any keyword
    return bestCustomer;
    }



//setBestCustomer();
//console.log(bestCustomer); // Output: BOB

//overwriteBestCustomer('John');
///console.log(bestCustomer); // Output: John

//changeLeastFavoriteCustomer();