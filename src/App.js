import React, { useState } from "react";

export const App = () => {
  const [state, setState] = useState(5);

  return (
    <header>
      <p>count: {state}</p>
    </header>
  );
};
