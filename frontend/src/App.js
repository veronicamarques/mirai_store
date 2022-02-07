import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Products from "./pages/products";
import Terms from "./pages/terms";
import Register from "./pages/register";

import { AuthProvider, AuthContext } from "./contexts/auth";

function App() {
  const Redirect = ({ children }) => {
    const routeName = String(children.type.name);
    const { User } = React.useContext(AuthContext);

    if (routeName === "Login" || routeName === "Register") return User?.authenticated ? <Navigate to="/" /> : children;

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Redirect>
                <Login />
              </Redirect>
            }
          />
          <Route
            path="/register"
            element={
              <Redirect>
                <Register />
              </Redirect>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
