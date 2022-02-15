import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { default as SiteLogo } from "../../assets/img/logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header>
      <div className="shop-alert-content">
        <span className="text-white">Frete Grátis apenas essa semana!</span>
      </div>
      <nav className="">
        <div className="shop-nav-header">
          <div>
            <img src={SiteLogo} alt="" />
          </div>
          <div className="shop-nav-menu-content">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <span className="undereffect">Inicio</span>
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown nav-links">
                  <div>
                    <Link to="/products" onClick={closeMobileMenu}>
                      <span className="undereffect">Produtos</span>
                    </Link>
                  </div>

                  <div className="dropdown">
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">
                        Camisas
                      </a>
                      <a className="dropdown-item" href="#">
                        Moletons
                      </a>
                      <a className="dropdown-item" href="#">
                        Lançamentos
                      </a>
                      <a className="dropdown-item" href="#">
                        Crianças
                      </a>
                      <a className="dropdown-item" href="#">
                        Bonés
                      </a>
                      <a className="dropdown-item" href="#">
                        Ternos
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/terms" className="nav-links" onClick={closeMobileMenu}>
                  <span className="undereffect">Termos de Serviço</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <span className="undereffect">Trocas e Devoluções</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="shop-header-menu-area">
            <Link to="/login">
              <i className="fas fa-user fa-lg"></i>
            </Link>
            <div>
              <i className="fas fa-heart fa-lg"></i>
              <span className="cart-summary">12</span>
            </div>
            <div>
              <i className="fas fa-shopping-cart fa-lg"></i>
              <span className="cart-summary">3</span>
            </div>

            <div className="shop-hambuger-menu" onClick={handleClick}>
              <i className={click ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}></i>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Navbar;
