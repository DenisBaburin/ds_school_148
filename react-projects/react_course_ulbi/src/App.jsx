import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [value, setValue] = useState("Какой-то текст");

  return (
    <>
      <div className="App">
        <Counter />
      </div>
    </>
  );
}

export default App;
