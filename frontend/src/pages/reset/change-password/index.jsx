import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../contexts/auth";

import "./styles.css";

import { default as SiteLogo } from "../../../assets/img/logo.svg";

import { checkPassword } from "../../../utils/inputCheck";

function PasswordChange() {
  let Navigate = useNavigate();

  const { send_password_change } = React.useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  let { token } = useParams();

  useEffect(() => {
    const button = document.getElementById("confirm-button");
    if (!password || !isPasswordConfirmed) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }, [password, isPasswordConfirmed]);

  const handleShowPassword = (id) => {
    id === 0 ? setShowPassword(!showPassword) : setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handlePasswordInput = (event, id) => {
    const value = event.target.value;

    if (id === 0) {
      const warning = document.getElementById("password-error");
      if (checkPassword(value)) {
        event.target.className += "border border-success";
        warning.style.display = "none";
        setPassword(value);
      } else {
        event.target.className += "border border-danger";
        warning.style.display = "inline-flex";
        if (value.length < 8 || value.length > 17) warning.innerHTML = "A senha deve ter no mínimo 8 caracteres.";
        else warning.innerHTML = "A senha deve ter um caractere especial e um número.";
        setPassword("");
      }
    } else {
      const warning = document.getElementById("password-check-error");

      if (password !== String(value)) {
        warning.style.display = "inline-flex";
        event.target.className += "border border-danger";
        setIsPasswordConfirmed(false);
      } else {
        warning.style.display = "none";
        event.target.className += "border border-success";
        setIsPasswordConfirmed(true);
      }
    }
  };

  const handleConfirmButton = () => {
    send_password_change(token, password).then((res) => {
      if (res) {
        setTimeout(() => {
          Navigate("/login");
        }, 3000);
      }
    });
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
              <p style={{ textAlign: "center" }}>Digite uma nova senha.</p>
              <div className="form-floating mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control rounded-4"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => handlePasswordInput(e, 0)}
                  maxLength={17}
                  required
                />
                <label htmlFor="floatingPassword">Senha</label>
                <i className={showPassword ? "fas fa-eye icon-view" : "fas fa-eye-slash icon-view"} onClick={() => handleShowPassword(0)}></i>
              </div>
              <div style={{ display: "none" }} id="password-error" className="mb-3 text-danger">
                Senha inválida
              </div>
              <div className="form-floating mb-3">
                <input
                  type={showPasswordConfirmation ? "text" : "password"}
                  className="form-control rounded-4"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => handlePasswordInput(e, 1)}
                  required
                />
                <label htmlFor="floatingPassword">Confirmar Senha</label>
                <i className={showPasswordConfirmation ? "fas fa-eye icon-view" : "fas fa-eye-slash icon-view"} onClick={() => handleShowPassword(1)}></i>
              </div>
              <div style={{ display: "none" }} id="password-check-error" className="mb-3 text-danger">
                As senhas devem ser iguais.
              </div>

              <button id="confirm-button" className="w-100 mb-2 btn btn-lg rounded-4 bg-dark mb-4" type="button" onClick={handleConfirmButton}>
                <span className="text-white">Confirmar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordChange;
