import { useState } from "react";

function Greetings() {
  const [uName, setUName] = useState("");

  return (
    <>
      <input
        placeholder="Enter name"
        type="text"
        onChange={(e) => setUName(e.target.value)}
      />
      {uName && (
        <p>
          Welcome <strong>{uName}</strong> to the team
        </p>
      )}
    </>
  );
}
