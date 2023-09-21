const person = {
    name: "Samson",
    age: 30,
    address: "Muntinlupa City",
    company: {
        companyName: "Bitag",
        companyAddress: "Timog"
    }
}

const contactNumber = {
    ...person,
    contact: "09462276659",
 
}
console.log(contactNumber)

//Spread Operators using function
const numbers = [100, 200, 300];
function sum(a, b , c){
    return a + b + c;
}

// console.log(sum(...numbers))
