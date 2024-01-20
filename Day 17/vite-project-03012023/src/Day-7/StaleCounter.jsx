import { useState } from "react";

const StaleCounter = () => {
  const [counter, setCounter] = useState(0);

  const onIncrCounter = () => {
    //setCounter(counter + 1); // 0 + 1 -> 0 + 1
    //setCounter(counter + 1); // 0 + 1 -> 1 + 1
    //setCounter(counter + 1); // 0 + 1 -> 2 + 1
    //setCounter(counter + 1); // 0 + 1 -> 3 + 1

    setCounter((pichlaData) => pichlaData + 1); // 0 + 1
    setCounter((pichlaData) => pichlaData + 1); // 1 + 1
    setCounter((pichlaData) => pichlaData + 1); // 2 + 1
    setCounter((pichlaData) => pichlaData + 1); // 3 + 1

    console.log("Before Re-Render:", counter);
  };

  console.log("After Re-Render:", counter);
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={onIncrCounter}>Increment</button>
    </div>
  );
};

export default StaleCounter;
