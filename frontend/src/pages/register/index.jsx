import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { default as SiteLogo } from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { registerAccount } from "../../utils/api";
import { checkEmail, checkPassword, checkFullName } from "../../utils/inputCheck";
import { AuthContext } from "../../contexts/auth";

function Register() {
  const Navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const button = document.getElementById("register-button");
    if (!email || !password || !fullName || !isPasswordConfirmed) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  }, [email, password, fullName, isPasswordConfirmed]);

  useEffect(() => {
    if (isRegistered) {
      setTimeout(() => {
        Navigate("/login");
      }, 3000);
    }
  }, [isRegistered]);

  const handleShowPassword = (id) => {
    id === 0 ? setShowPassword(!showPassword) : setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  const handleFullName = (event) => {
    const value = event.target.value;
    const warning = document.getElementById("name-error");

    if (checkFullName(value)) {
      event.target.className += "border border-success";
      warning.style.display = "none";
      setFullName(value);
    } else {
      event.target.className += "border border-danger";
      warning.style.display = "inline-flex";
      setFullName("");
    }
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

  const handleRegisterButton = async () => {
    try {
      const response = await toast.promise(registerAccount(fullName, email, password), {
        pending: "Enviando informações",
        success: {
          render() {
            setIsRegistered(true);
            return "Conta criada com sucesso!";
          },
        },
        error: {
          render({ data }) {
            return `${data.response.data.error}`;
          },
        },
      });
    } catch (err) {}
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
                <input type="fullName" className="form-control rounded-4" id="floatingInput" placeholder="ex.: Maria Perez" onChange={handleFullName} />
                <label htmlFor="floatingInput">Nome Completo</label>
              </div>
              <div style={{ display: "none" }} id="name-error" className="mb-3 text-danger">
                Digite seu nome completo.
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" onChange={handleEmailInput} required />
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
              <button id="register-button" className="w-100 mb-2 btn btn-lg rounded-4 bg-dark mb-4" type="button" onClick={handleRegisterButton}>
                <span className="text-white">Cadastrar</span>
              </button>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="mx-auto">
                  Já possui conta?
                  <Link to="/login">
                    <span className="pointer" style={{ color: "rgb(181,160,25)", paddingLeft: "4px" }}>
                      Entrar
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

export default Register;
