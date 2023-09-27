import { useState } from "react";
import CountProps from "./CountProps";

const Props = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <CountProps
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
};

export default Props;
