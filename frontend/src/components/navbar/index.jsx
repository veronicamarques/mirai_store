import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";
import { default as SiteLogo } from "../../assets/img/logo.svg";
import { default as SearchLogo } from "../../assets/img/search-icon.svg";
import { default as Person } from "../../assets/img/person.svg";
import { default as Cart } from "../../assets/img/cart.svg";
import { default as MenuIcon } from "../../assets/img/menu-ham.svg";

function Header() {
  function showMenu()
  {
    let element = document.getElementById('show-menu')
    let elementStyle = window.getComputedStyle(element, null);
    if(elementStyle.getPropertyValue("display") === 'none') {
      element.style.display = 'inline-block';
    } else {
      element.style.display = 'none';
    }

  }
  return (
    <header>
      <div className="shop-alert-content alert alert-secondary" role="alert">
        <span>Frete Grátis pra sempre!</span>
      </div>
      <nav className="container">
        <div className="shop-header-content">
          <div className="shop-nav-content container">
            <div className="shop-header-logo">
              <img src={SiteLogo} alt="" />
            </div>
            <div id="shop-header-search-show" className="shop-header-search">
              <div className="shop-header-search-logo">
                <img src={SearchLogo} alt="" />
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="Search for..."
              />
            </div>

            <div
              id="shop-nav-hamburger-show"
            >       
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    onClick= {() => showMenu()}
                    id="navbarDropdown"
                    role="button"                
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={MenuIcon} alt="" />
                  </a>
                  <div
                    id="show-menu"
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    //style={{display: "none"}}
                  >
                    <a className="dropdown-item" href="g">
                      Action
                    </a>
                    <a className="dropdown-item" href="g">
                      Another action
                    </a>
                    <a className="dropdown-item" href="g">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div id="shop-nav-menu-show" className="shop-nav-menu">
              <p>Início</p>
              <p>Produtos</p>
              <p>Termos de Serviço</p>
              <p>FAQ</p>
              <img src={Cart} alt="" />
              <img src={Person} alt="" />
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
