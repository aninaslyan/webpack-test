import React, { useState } from "react";

export const App = () => {
  const [state, setState] = useState(5);

  return (
    <header>
      <div className="main-container">
        <p>count: {state}</p>
      </div>
      <p>Another p</p>
    </header>
  );
};
