import { useState } from "react";
import "./App.css";
function App() {
  // const [num, setfirst] = useState(0)
  // const [sentens, setSentence] = useState("Emin")
  // const increment = ()=>{
  //   setfirst(num + 1)
  // }
  // const decrement = ()=>{
  //   setfirst(num - 1)
  // }
  // const resetnum = ()=>{
  //   setfirst(0)
  // }
  // const Change = ()=>{
  //   setSentence(sentens === "Emin" ? "Farid" : "Emin")
  // }

  return (
    <>
      {/* <button onClick={increment}>+</button>
      <span>{num}</span>
      <button onClick={decrement}>-</button>
      <button onClick={resetnum}>Reset</button> */}
      {/* <h1>{sentens}</h1>
      <button onClick={Change}>shake</button> */}
      <div id="id01" class="w3-modal">
        <div class="w3-modal-content">
          <header class="w3-container w3-teal">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              class="w3-button w3-display-topright"
            >
              &times;
            </span>
            <h2>Modal Header</h2>
          </header>

          <div class="w3-container">
            <p>Some text..</p>
            <p>Some text..</p>
          </div>

          <footer class="w3-container w3-teal">
            <p>Modal Footer</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
