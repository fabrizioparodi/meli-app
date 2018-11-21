import React, { Component } from "react";
import axios from "axios";

import BreadCumbs from "./../Breadcumbs/Breadcumbs";
import "./ProductDetail.css";

class ProductDetail extends Component {
  state = {
    product: null,
    filters: []
  };

  componentDidMount = () => {
    axios
      .get(`api/items/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ product: response.data });
      })
      .catch(error => console.error(error));
  };

  render() {
    return this.state.product && this.state.product.item ? (
      <React.Fragment>
        <BreadCumbs className="breadcumbs" filters={this.state.filters} />
        <div className="detail-card card">
          <div className="img-section">
            <img
              className="product-image"
              src={this.state.product.picture}
              alt={this.state.product.title}
            />
            <div className="description-container">
              <h3>Descripcion del producto</h3>
              <p className="description-content">
                {this.state.product.description}
              </p>
            </div>
          </div>
          <div className="buy-section">
            <div style={{ fontSize: "14px", marginTop: "32px", marginBottom: "16px" }}>
              {this.state.product.condition === "new" ? "Nuevo" : null} -{" "}
              {this.state.product.sold_quantity} vendidos
            </div>
            <div style={{ fontWeight: "bold", fontSize: "24px" }}>
              {this.state.product.item.title}
            </div>
            <div style={{ fontSize: "46px", margin: "32px 0" }}>
              $ {this.state.product.price.amount}
            </div>
            <button className="btn btn-primary buy-btn">Comprar</button>
          </div>
        </div>
      </React.Fragment>
    ) : null;
  }
}

export default ProductDetail;
