import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./styles.css";
import { default as SiteLogo } from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { checkEmail } from "../../utils/inputCheck";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [staySignedIn, setStaySignedIn] = useState(false);

  useEffect(() => {
    const button = document.getElementById("login-button");
    if (!password || !email) button.disabled = true;
    else button.disabled = false;
  }, [password, email]);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleStaySignedIn = (event) => {
    const value = event.target.checked;
    if (value) setStaySignedIn(true);
    else setStaySignedIn(false);
  };

  const handleEmailInput = (event) => {
    const value = event.target.value;
    const warning = document.getElementById("email-error");
    if (checkEmail(value)) {
      event.target.className += "border border-success";
      warning.style.display = "none";
      setEmail(value);
    } else {
      event.target.className += "border border-danger";
      warning.style.display = "inline-flex";
      setEmail("");
    }
  };

  const handlePasswordInput = (event) => {
    const value = event.target.value;
    if (value.length < 8 || value.length > 17) setPassword("");
    else setPassword(value);
  };

  const handleLoginButton = async () => {
    //await login(email, password, staySignedIn);
  };

  return (
    <>
      <ToastContainer autoClose={5000} hideProgressBar={true} />
      <Helmet>
        <style>{"body { background-color: #bdc3c97a; }"}</style>
      </Helmet>

      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content rounded-5 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0 mx-auto">
            <h2 className="fw-bold mb-0">
              <Link to="/">
                <img src={SiteLogo} alt="" />
              </Link>
            </h2>
          </div>

          <div className="modal-body p-5 pt-0">
            <form className="">
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" onChange={handleEmailInput} />
                <label htmlFor="floatingInput">E-mail</label>
              </div>
              <div style={{ display: "none" }} id="email-error" className="mb-3 text-danger">
                Digite um endereço de email válido.
              </div>
              <div className="form-floating mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control rounded-4"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={handlePasswordInput}
                />
                <label htmlFor="floatingPassword">Senha</label>
                <i className={showPassword ? "fas fa-eye icon-view" : "fas fa-eye-slash icon-view"} onClick={handleShowPassword}></i>
              </div>
              <div style={{ display: "none" }} id="password-error" className="mb-3 text-danger">
                Senha inválida
              </div>
              <div className="d-flex mb-3" style={{ justifyContent: "space-between" }}>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleStaySignedIn} />
                  <label className="form-check-label pointer noselect" htmlFor="flexCheckDefault">
                    Mantenha-me conectado
                  </label>
                </div>
                <div>
                  <Link to="/password-reset">
                    <label className="pointer noselect">Esqueceu a senha?</label>
                  </Link>
                </div>
              </div>
              <button id="login-button" className="w-100 mb-2 btn btn-lg rounded-4 bg-dark mb-4" type="button" onClick={handleLoginButton}>
                <span className="text-white">Entrar</span>
              </button>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="mx-auto">
                  Não possui conta?
                  <Link to="/register">
                    <span className="pointer" style={{ color: "rgb(181,160,25)", paddingLeft: "4px" }}>
                      Cadastre-se
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
