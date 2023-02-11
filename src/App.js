import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Router app</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">about</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
