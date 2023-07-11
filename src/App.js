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
import { useContext, useEffect, useState } from "react";
import ProtectedRoute from "./utils/ProtectedRoutes";
import EditPassword from "./pages/editPassword";
import LandingPage from "./pages/landingPage";
import { PrivateKeyContext } from "./context/privateKeyContext";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 3000);
  }

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/privateKey"
            element={
              <ProtectedRoute>
                <PrivateKey />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addPassword"
            element={
              <ProtectedRoute>
                <AddPassword />
              </ProtectedRoute>
            }
          />

          <Route
            path="/editPassword"
            element={
              <ProtectedRoute>
                <EditPassword />
              </ProtectedRoute>
            }
          />

          <Route
            path="/allPasswords"
            element={
              <ProtectedRoute>
                <AllPasswords />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
