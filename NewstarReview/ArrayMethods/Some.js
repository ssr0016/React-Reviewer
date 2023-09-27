const items = [
    { name: 'Bike', price: 100},
    { name: 'Tv', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25},
    ]

//Some & every will display boolean... true or false
const hasInexpensiveItems = items.some((item)=>{
    return item.price <= 0;
})

console.log(hasInexpensiveItems)// display false