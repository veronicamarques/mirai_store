import React, { useState } from "react";
import "./styles.css";
import { default as SiteLogo } from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <>
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
                <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">E-mail</label>
              </div>
              <div style={{ display: "none" }} id="email-error" className="mb-3 text-danger">
                Email inválido
              </div>
              <div className="form-floating mb-3">
                <input type={showPassword ? "text" : "password"} className="form-control rounded-4" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Senha</label>
                <i className={showPassword ? "fas fa-eye icon-view" : "fas fa-eye-slash icon-view"} onClick={handleShowPassword}></i>
              </div>
              <div style={{ display: "none" }} id="password-error" className="mb-3 text-danger">
                Senha inválida
              </div>
              <div className="d-flex mb-3" style={{ justifyContent: "space-between" }}>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label pointer" htmlFor="flexCheckDefault">
                    Mantenha-me conectado
                  </label>
                </div>
                <div>
                  <label className="pointer">Esqueceu a senha?</label>
                </div>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-4 bg-dark mb-4" type="submit">
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
