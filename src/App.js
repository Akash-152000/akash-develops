import "./App.css";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar";
import HandleScrollState from "./context/HandleScrollState"

function App() {
  return (
    <div className="App">
      <HandleScrollState>
        <Home />
      </HandleScrollState>
    </div>
  );
}

export default App;
