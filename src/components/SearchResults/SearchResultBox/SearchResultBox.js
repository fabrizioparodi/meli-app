import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./SearchResultBox.css";

const searchResultBox = props => {
  return (
    <>
      <div className="search-result-box">
        <Link
          className="search-result-container"
          to={props.location.pathname + "/" + props.item.id}
        >
          <img
            className="product-image-box"
            src={props.item.thumbnail}
            alt={props.item.title}
          />
          <div className="item-info">
            <p className="price-info">
              <span> $ {props.item.price} </span>
            </p>
            <p style={{fontSize: "18px"}}>{props.item.title}</p>
          </div>
        </Link>
        <div className="address-info">{props.item.address.state_name}</div>
      </div>
    </>
  );
};

export default withRouter(searchResultBox);
