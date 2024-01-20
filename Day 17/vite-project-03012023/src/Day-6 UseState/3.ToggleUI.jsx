import { useState } from "react";

const ToggleUI = () => {
  const [showData, setShowData] = useState(false);

  return (
    <>
      <button onClick={() => setShowData(!showData)}>Toggle below UI</button>
      {showData ? <p>I am Visible Now</p> : <p>Data is Hidden</p>}

      <input
        type={showData ? "text" : "password"}
        placeholder="Enter Password"
      />
    </>
  );
};

export default ToggleUI;
