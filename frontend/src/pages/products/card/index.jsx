import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import ProductStar from "./stars";

function Product(props) {
  const category = props.product.category;
  const id = props.product.id;

  return (
    <div id="product-container" className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
      <div id="d-flex flex-row card-body">
        <Link to={`/products/${category}/${id}`}>
          <div id="card-image">
            <img src={props.product.image} className="img-fluid" alt="" />
          </div>
        </Link>
        <div id="card-container">
          <div id="card-info">
            <ProductStar score={props.product.rating} />
            <small>
              <span>{props.product.title}</span>
            </small>
            <p>R$ {props.product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
