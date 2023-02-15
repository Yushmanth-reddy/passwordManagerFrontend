import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import AddPassword from "./pages/appPassword";
import PrivateKey from "./pages/privateKey";
import Signin from "./pages/signin";
import SignUp from "./pages/signup";
import AllPasswords from "./pages/allPassword";
import { useState } from "react";

function App() {
  const accessToken = sessionStorage.getItem("access");
  const [isAuth, setIsAuth] = useState(accessToken ? true : false);
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<a />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate replace to={"/"} />}
          />
          <Route
            path="/privateKey"
            element={isAuth ? <PrivateKey /> : <Navigate replace to={"/"} />}
          />
          <Route
            path="/addPassword"
            element={isAuth ? <AddPassword /> : <Navigate replace to={"/"} />}
          />
          <Route
            path="/allPasswords"
            element={isAuth ? <AllPasswords /> : <Navigate replace to={"/"} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
