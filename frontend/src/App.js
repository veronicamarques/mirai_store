import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/index";

function App() {
  return (
    <Router>
      <Navbar />
      <hr className="container" />
    </Router>
  );
}

export default App;
