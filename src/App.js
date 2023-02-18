import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Routes path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
