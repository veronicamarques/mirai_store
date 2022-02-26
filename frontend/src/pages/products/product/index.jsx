import React from "react";
import Navbar from "../../../components/navbar";
import "./styles.css";
import products_mock from "../productsMock";
import { useParams } from "react-router-dom";
import { addProduct, updateProduct } from "../../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";

function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const cart = useSelector((state) => state.cart);

  const product = products_mock[id];

  const addToWishList = () => {};

  const addToCart = () => {
    if (cart.quantity) {
      const item = cart.products.find((e) => e.id === product.id);

      if (item) dispatch(updateProduct({ product, quantity: 1 }));
      else dispatch(addProduct({ ...product, quantity: 1 }));
    } else dispatch(addProduct({ ...product, quantity: 1 }));
  };

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
              <input type="submit" className="btn" value="Incluir no carrinho +" onClick={addToCart} />
              <div className="wish-link">
                <i className="fas fa-heart fa-lg" />
                <span onClick={addToWishList}>Add To Wishlist</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductPage;
