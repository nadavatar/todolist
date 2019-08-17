import React from "react";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <p>This is where the todos will be rendered</p>
      <div className="todosContainer" />
    </div>
  );
}

export default App;
