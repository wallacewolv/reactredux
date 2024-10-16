import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// function App({  count,increment, incrementAmount }) {
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleOnClick() {
    // increment();
    dispatch({ type: "counter/increment" });
  }

  function handleOnClickAmount() {
    // incrementAmount(5);
    dispatch({ type: "counter/incrementAmount", payload: 5 });
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

// OLD SCHOOL
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value,
//   };
// };

// const mapDispatchProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "counter/increment" }),
//     incrementAmount: (amount) =>
//       dispatch({ type: "counter/incrementAmount", payload: amount }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchProps)(App);
