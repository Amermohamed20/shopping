import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function ViewProductDetails(props) {
  let { products } = props;

  let params = useParams();

  let product = products.find((p) => p.id == params.id);

  return (
    <div className="box">
      <img
        src={product.imgUrl ? product.imgUrl : "images/not-found.jpg"}
        alt={product.title}
        width="200"
      />
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}
export default ViewProductDetails;
