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
      <div className="shop-alert-content alert alert-secondary" role="alert">
        <span>Frete Grátis apenas essa semana!</span>
      </div>
      <nav className="container">
        <div className="shop-nav-header">
          <img src={SiteLogo} alt="" />
          <div className="shop-nav-menu-content">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  <span className="undereffect">Inicio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                  <span className="undereffect">Produtos</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/terms" className="nav-links" onClick={closeMobileMenu}>
                  <span className="undereffect">Termos de Servico</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="shop-header-menu-area">
            <i className="fas fa-shopping-cart fa-lg"></i>
            <Link to="/login">
              <i className="fas fa-user fa-lg"></i>
            </Link>
            <div className="shop-hambuger-menu" onClick={handleClick}>
              <i className={click ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}></i>
            </div>
          </div>
        </div>
      </nav>
      <hr className="container" />
    </header>
  );
}

export default Navbar;
