import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../contexts/auth";

import "./styles.css";

import { default as SiteLogo } from "../../assets/img/logo.svg";

import { checkEmail } from "../../utils/inputCheck";

function PasswordRecovery() {
  const { send_password_reset } = React.useContext(AuthContext);

  const [email, setEmail] = useState("");

  useEffect(() => {
    const button = document.getElementById("send-button");
    button.disabled = email ? false : true;
  }, [email]);

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

  const handleSendButton = () => {
    send_password_reset(email);
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
              <p>Vamos te enviar um e-mail para poder alterar a sua senha.</p>
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" onChange={handleEmailInput} />
                <label htmlFor="floatingInput">E-mail</label>
              </div>
              <div style={{ display: "none" }} id="email-error" className="mb-3 text-danger">
                Digite um endereço de email válido.
              </div>
              <button id="send-button" className="w-100 mb-2 btn btn-lg rounded-4 bg-dark mb-4" type="button" onClick={handleSendButton}>
                <span className="text-white">Enviar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordRecovery;
