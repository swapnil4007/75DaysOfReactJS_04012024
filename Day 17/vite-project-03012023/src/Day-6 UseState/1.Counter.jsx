import { useState } from "react";

const CounterFC = () => {
  const [counter, setCounter] = useState(10);
  //const userNameState = useState("Ritesh");

  console.log("Re-Render: ", counter);
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
};
export default CounterFC;
