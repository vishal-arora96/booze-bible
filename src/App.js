import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import CocktailInfo from "./pages/CocktailInfo";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={Error} />
        <Route path="/cocktail/:id" Component={CocktailInfo} />
      </Routes>
    </Router>
  );
}

export default App;
