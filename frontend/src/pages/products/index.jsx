import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer";
import "./styles.css";
import Product from "../products/card";

import products_mock from "./productsMock";

function Products() {
  const [filtered, setFiltered] = useState(products_mock);

  const handleCategory = (event, category) => {
    var checkboxes = document.getElementsByName("category");
    checkboxes.forEach((item) => {
      if (item !== event.target) item.checked = false;
    });

    if (event.target.checked) {
      const filter = products_mock.filter((product) => product.category === category);

      setFiltered(filter);
    } else {
      setFiltered(products_mock);
    }
  };

  const handleSortProducts = (event) => {
    var sortedProducts = [...filtered];

    switch (event.target.value) {
      case "low-price":
        sortedProducts.sort((a, b) => a.price > b.price);
        break;
      case "high-price":
        sortedProducts.sort((a, b) => a.price < b.price);
        break;
      case "popularity":
        sortedProducts.sort((a, b) => a.rating < b.rating);
        break;
      default:
        sortedProducts.sort((a, b) => a.price > b.price);
        break;
    }

    setFiltered(sortedProducts);
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="content-wrap">
          <div className="page-title d-flex align-items-center justify-content-center">
            <h2>Produtos</h2>
          </div>
          <section id="sidebar">
            <div className="border-bottom pb-2 ml-2">
              <h4>Filtros</h4>
            </div>
            <div className="py-2 border-bottom ml-3">
              <h6>Categorias</h6>
              <div id="orange">
                <span className="fa fa-minus"></span>
              </div>
              <form>
                <div className="form-group">
                  <input id="camisas" type="checkbox" onChange={(e) => handleCategory(e, "camisas")} name="category" />
                  <label className="noselect" htmlFor="camisas">
                    Camisas
                  </label>
                </div>
                <div className="form-group">
                  <input id="moletons" type="checkbox" onChange={(e) => handleCategory(e, "moletons")} name="category" />
                  <label className="noselect" htmlFor="moletons">
                    Moletons
                  </label>
                </div>
                <div className="form-group">
                  <input id="bones" type="checkbox" onChange={(e) => handleCategory(e, "bones")} name="category" />
                  <label className="noselect" htmlFor="bones">
                    Bonés
                  </label>
                </div>
              </form>
            </div>
          </section>

          <section id="products">
            <div id="products-nav-bar" className="d-flex flex-row">
              <div className="text-muted m-2" id="res">
                Mostrando 20 resultados
              </div>
              <div id="sort-bar" className="ml-auto mr-lg-4">
                <div id="sorting" className="border rounded p-1 m-1">
                  <span className="text-muted">Ordenar por</span>
                  <select name="sort" id="sort" onChange={handleSortProducts}>
                    <option value="low-price">Menor preço</option>
                    <option value="high-price">Maior preço</option>
                    <option value="popularity">Popular</option>
                  </select>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              {filtered.map((product) => (
                <Product product={product} />
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Products;
