import { useState } from "react"

const StateAndProps = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Samson");
  const [isChecked, setIsChecked] = useState(false);
  const [fruits, setFruits] = useState(["Apple", "Mango", "Durian"]);
  const [persons, setPersons] = useState({name: "Samson Recluta", age: 30}
  ,{name: "Angela Navarro", age: 23})


  const handleIncrement = () => {
    setCount(prevState => prevState + 1)
  }

    const handleDecrement = () => {
    setCount(prevState => prevState - 1)
  }

  const handleShowFruits = () => {
    setIsChecked(!isChecked)
  }

  const handleAddFruits = () => {
    setFruits([...fruits, "Pineapple"])
  }

  const handleRemoveFruits = (fruitIndex) =>{
    const filteredFruits = fruits.filter(
      (fruit, index) => index !==fruitIndex
      );
    setFruits(filteredFruits);
  };

  if(fruits.length === 0) return <h1>...Loading</h1> 

  return (
    <div>
        <h1>The power of State management</h1>
        <h2>Count: {count}</h2>

        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <hr />
        <h3>If the chechbox is true the list of items will be rendered</h3>
        <h3>if the checkbox has no list items it will be rendered ....Loading</h3>
        <ul>
          {isChecked && fruits.map((fruit, index) =>{
            return(
              <div  key={index}>
                  <li>{fruit}</li>
                  <button onClick={()=> handleRemoveFruits(index)}>Remove Fruits</button>
              </div>
            );
          })}
        </ul>
    
        <div>
          <label>Show</label>
          <input type="checkbox" onChange={handleShowFruits}  checked={isChecked}/>
        </div>
        <br />
        <button onClick={handleAddFruits}>Add Fruits</button>

    </div>
  )
}

export default StateAndProps