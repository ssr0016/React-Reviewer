//Destructuring objects
//Example 1 from Bro.Eric
const user = {id: 1, name: 'samson'}
const {id, name } = user

//Example 2
const person = {
    names: "John Doe",
    age: 21,
    birthdate: new Date(),
    status: "Single",
}
const { names, age, birthdate, status} = person
console.log(person.birthdate)

//----------------------------------------------
//Destructuring arrays
// destructuring arrays
//Example from Bro.Eric
const users = ['first user', 'scond user']
const [user1, user2] = users;

const objects = ["table", "phone", "apple", "jl"]
const [appliances, gadgets, fruits, handsome] = objects

// console.log(objects[3])

//--------------------------------
