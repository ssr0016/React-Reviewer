

const CountProps = ({count, handleIncrement, handleDecrement}) => {
  return (
    <div>
        <h1>This is a Props method</h1>
        <h2>Count: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CountProps