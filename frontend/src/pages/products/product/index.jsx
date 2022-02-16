import React from "react";
import Navbar from "../../../components/navbar";
import "./styles.css";
import products_mock from "../productsMock";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  const product = products_mock[id];
  return (
    <div>
      <Navbar />
      <div id="product-container">
        <section id="product-image-section">
          <div id="main-image">
            <img src={product.image} className="rounded" alt="" />
          </div>
        </section>
        <section id="product-info-section">
          <div id="product-info">
            <div id="product-title-info">
              <p>Início / Camisas</p>
              <h5>{product.title}</h5>
              <hr />
              <h6>R$ {product.price.toFixed(2)}</h6>
              <small>
                <p>{product.description}</p>
              </small>
              <h7>Estoque: {product.stock}</h7>
              <input type="submit" className="btn" value="Incluir no carrinho +" />
              <div className="wish-link">
                <i className="fas fa-heart fa-lg" />
                <span>Add To Wishlist</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductPage;
