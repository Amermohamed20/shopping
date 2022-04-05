import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ListProducts extends Component {
  render() {
    let { products } = this.props;

    return (
      <div className="boxes">
        {products.map(({ id, title, price, imgUrl }) => {
          return (
            <div className="box" key={id}>
              <NavLink to= {`/products/${id}`} >
                <img
                  src={imgUrl ? imgUrl : "images/not-found.jpg"}
                  alt={title}
                  width="200"
                />
                <p>{title}</p>
                <p>{price}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}
export default ListProducts;

/** <img src={producktOne.imgUrl} alt={producktOne.title} width='200'/>
              <p>{producktOne.title}</p>
              <p>{producktOne.price}</p>
              ////////
               { 
                producktOne.imgUrl ? ( <img src={producktOne.imgUrl} alt={producktOne.title} width='200'/> )
               : ( <img src='images/not-found.jpg' alt={producktOne.title}/> ) 
               }
               ////////
               <div className="box" key={producktOne.id}>
              <img
                src={
                  producktOne.imgUrl
                    ? producktOne.imgUrl
                    : "images/not-found.jpg"
                }
                alt={producktOne.title}
                width="200"
              />
              <p>{producktOne.title}</p>
              <p>{producktOne.price}</p>)
            </div>

          **/
