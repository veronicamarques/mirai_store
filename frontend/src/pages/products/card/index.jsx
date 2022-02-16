import React from "react";
import "./styles.css";
import { default as HalfStar } from "../../../assets/img/starfull.svg";
import { Link } from "react-router-dom";

function Product(props) {
  const category = props.product.category;
  const id = props.product.id;

  return (
    <div className="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
      <div id="d-flex flex-row card-body">
        <Link to={`/products/${category}/${id}`}>
          <div id="card-image">
            <img src={props.product.image} className="img-fluid" alt="" />
          </div>
        </Link>
        <div id="card-stars">
          <img className="star" src={HalfStar} alt="" />
          <img className="star" src={HalfStar} alt="" />
          <img className="star" src={HalfStar} alt="" />
          <img className="star" src={HalfStar} alt="" />
        </div>
        <div id="card-info">
          <small>
            <span>{props.product.title}</span>
          </small>

          <p>R$ {props.product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
