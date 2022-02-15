import React from "react";
import Navbar from "../../components/navbar/index";
import "./styles.css";
import Product from "../products/card";
import products_mock from "./productsMock";

function Products() {
  return (
    <>
      <Navbar />
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
              <input type="checkbox" id="artisan" />
              <label for="artisan">Camisas</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="breakfast" />
              <label for="breakfast">Moletons</label>
            </div>
            <div className="form-group">
              <input type="checkbox" id="healthy" />
              <label for="healthy">Bonés</label>
            </div>
          </form>
        </div>
      </section>

      <section id="products">
        <div id="products-nav-bar" class="d-flex flex-row">
          <div class="text-muted m-2" id="res">
            Mostrando 20 resultados
          </div>
          <div id="sort-bar" class="ml-auto mr-lg-4">
            <div id="sorting" class="border rounded p-1 m-1">
              <span class="text-muted">Ordenar por</span>
              <select name="sort" id="sort">
                <option value="low-price">Menor preço</option>
                <option value="high-price">Maior preço</option>
                <option value="popularity">Mais vendido</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          {products_mock.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
