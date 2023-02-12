import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/home";
import AddPassword from "./pages/appPassword";
import PrivateKey from "./pages/privateKey";
import Signin from "./pages/signin";
import SignUp from "./pages/signup";
import AllPasswords from "./pages/allPassword";

function App() {
  return (
    <BrowserRouter>
      {/* <header>
        <nav>
          <NavLink to="/signin">signin</NavLink>
          <NavLink to="/signup">signup</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/addPassword">add password</NavLink>
        </nav>
      </header> */}
      <main>
        <Routes>
          {/* <Route path="/" element={<Signin />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/privateKey" element={<PrivateKey />} />
          <Route path="/addPassword" element={<AddPassword />} />
          <Route path="/allPassword" element={<AllPasswords />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
