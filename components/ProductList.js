import React, { Component } from "react";
import config from "../config";

import Product from "./Product";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const response = await fetch(config.stripe.productsUrl, {
      // Backend API url
      method: "GET"
    });

    this.setState({
      products: response.data
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div id="products">
        {products.map((product, index) => {
          return (
            <Product
              id={product.id}
              name={product.name}
              caption={product.caption}
              description={product.description}
              skus={product.skus.data}
              images={product.images}
            />
          );
        })}
      </div>
    );
  }
}
