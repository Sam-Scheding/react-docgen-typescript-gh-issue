import React from "react";
import "./App.css";

import { parse } from "react-docgen-typescript";

const options = {
  savePropValueAsString: true,
};

function App() {
  const doc = parse("./TestComponent.tsx", options);

  return <div className="App">{doc as unknown as string}</div>;
}

export default App;
