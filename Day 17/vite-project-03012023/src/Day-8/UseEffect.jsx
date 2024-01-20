import { useState, useEffect } from "react";

const UseEffectExamples = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(10);

  // On first load
  useEffect(() => {
    console.log("Component loaded successfully");
  }, []);

  // Loading On counter 1 changes
  useEffect(() => {
    console.log("Counter 1 inside useEffect: ", counter1);
  }, [counter1]);

  // Loading On counter 2 changes
  useEffect(() => {
    console.log("Counter 2 inside useEffect: ", counter2);
  }, [counter2]);

  // Loading On counter 1 & 2 changes
  useEffect(() => {
    WEEffectr;
    console.log("Counter 1 & 2 inside useEffect: ", counter1, counter2);
  }, [counter1, counter2]);

  console.log("Counters: ", { counter1, counter2 });
  return (
    <div>
      <p>Counter1: {counter1}</p>
      <p>Counter2: {counter2}</p>

      <button onClick={() => setCounter1((prev) => prev + 1)}>
        Increment 1
      </button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increment 2
      </button>
    </div>
  );
};
