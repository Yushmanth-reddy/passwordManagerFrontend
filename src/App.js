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
import { useEffect, useState } from "react";

function App() {
  // const accessToken = sessionStorage.getItem("access");
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    setAccessToken(sessionStorage.getItem("access"));
  }, []);
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<a />} />
          <Route
            path="/signin"
            element={<Signin setAccessToken={setAccessToken} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={accessToken ? <Home /> : <Navigate replace to={"/"} />}
          />
          <Route
            path="/privateKey"
            element={
              accessToken ? <PrivateKey /> : <Navigate replace to={"/"} />
            }
          />
          <Route
            path="/addPassword"
            element={
              accessToken ? <AddPassword /> : <Navigate replace to={"/"} />
            }
          />
          <Route
            path="/allPasswords"
            element={
              accessToken ? <AllPasswords /> : <Navigate replace to={"/"} />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
