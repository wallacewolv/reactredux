import "./App.css";

import { useDispatch } from "react-redux";

import reactLogo from "./assets/react.svg";
import { increment, incrementAmount } from "./features/counter/counter-slice";
import { useAppSelector } from "./hooks";
import viteLogo from "/vite.svg";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleOnClick() {
    dispatch(increment());
  }

  function handleOnClickAmount() {
    dispatch(incrementAmount(5));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>count is {count}</button>
        <br />
        <br />
        <button onClick={handleOnClickAmount}>
          count with amount is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
