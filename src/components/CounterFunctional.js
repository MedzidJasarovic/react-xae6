import React, { useState } from "react";

function CounterFunctional() {
  const [count, setCount] = useState(0);
  const [count2, setcount2] = useState(0);
  console.log("renderano", count2);

  return (
    <div>
      <p>u have {count} cookies</p>
      <button onClick={() => setCount(count + 1)}> BAKE</button>
      <button onClick={() => setCount(count - 1)}> EAT</button>
      <button
        onClick={() => {
          setcount2(count2 + 1);
        }}
      >
        Render??????
      </button>

      {count >= 10 ? <p>u klik so mac man</p> : null}
    </div>
  );
}
export default CounterFunctional;
