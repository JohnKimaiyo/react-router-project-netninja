
import "./App.css";
import { BrowserRouter, Routes, Route,NavLink, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobrouter</h1>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Routes path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
