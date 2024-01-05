import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [a, setA] = useState(0);
  useEffect(() => {
    setA(2);
  }, []);
  return (
    <div className="App">
      <p>{a}</p>
    </div>
  );
}

export default App;
