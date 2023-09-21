const items = [
{ name: 'Bike', price: 100},
{ name: 'Tv', price: 200},
{ name: 'Album', price: 10},
{ name: 'Book', price: 5},
{ name: 'Phone', price: 500},
{ name: 'Computer', price: 1000},
{ name: 'Keyboard', price: 25},
]

//Filter
// const filteredItems = items.filter((item) => {
//     return item.price >= 400;
// })
// console.log(items)
// console.log(filteredItems)

//-------------------------------------------

//Map
//  const mapItems = items.map((item) => {
//    return item.name
// });

// console.log(mapItems)

//-------------------------------------------

//Find
//  const foundItems = items.find((item) => {
//    return item.name === 'Album'
// });

// console.log(foundItems)

//-------------------------------------------

//forEach
// items.forEach((item)=>{
//     console.log(item.price)
// });


//-------------------------------------------

//Some & Every

//  const inexpensiveItems = items.some((item) => {
//    return item.price <= 100
// });

// console.log(inexpensiveItems)

//-------------------------------------------

//Reduce

//  const total = items.reduce((currentTotal, item) => {
//    return item.price + currentTotal
// }, 0);

// console.log(total)


//-------------------------------------------

//includes
//Note: It is very convenient if you want to check if the array has a value
const includesItems = [1, 2, 3, 4, 5]

const includesTwo = includesItems.includes(7)
 
 console.log(includesTwo)