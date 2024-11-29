import { useMemo, useState } from "react";
import "./styles.css";
import { useMemoPolyfill } from "./useMemoPolyfill";

export default function App() {
  const [count, setCount] = useState(0);

  const cost = useMemo(() => {
    return count * 100;
  }, [count]);

  const duplicateCost = useMemoPolyfill(() => {
    return count * 100;
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>click</button>
      <div>{count}</div>
      <div>{cost}</div>
      <div>{duplicateCost}</div>
    </div>
  );
}
