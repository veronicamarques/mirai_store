import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Products from "./pages/products";
import TermsPage from "./pages/terms";
import Register from "./pages/register";
import PasswordRecovery from "./pages/reset";
import PasswordChange from "./pages/reset/change-password";
import EmailConfirmation from "./pages/confirmation/";

import ProductPage from "./pages/products/product";
import CartPage from "./pages/cart";

import { Provider } from "react-redux";
import store from "./redux/store";
import PolicyPage from "./pages/policy";
import CheckoutPage from "./pages/checkout";

function App() {
  /*
  const Redirect = ({ children }) => {
    const routeName = String(children.type.name);
    const { User } = React.useContext(AuthContext);

    if (routeName === "Login" || routeName === "Register") return User?.authenticated ? <Navigate to="/" /> : children;

    return children;
  };
*/
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              //<Redirect>
              <Login />
              // </Redirect>
            }
          />
          <Route
            path="/register"
            element={
              //<Redirect>
              <Register />
              //</Redirect>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category/:id" element={<ProductPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/password-reset" element={<PasswordRecovery />} />
          <Route path="/password-reset/:token" element={<PasswordChange />} />
          <Route path="/email-confirm/:token" element={<EmailConfirmation />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/checkout" element={<CheckoutPage />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
