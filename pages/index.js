import React, { Component } from "react";

import config from "../config";

import ProductList from "../components/ProductList";

export default class App extends Component {
  componentDidMount() {
    this.handler = window.StripeCheckout.configure({
      key: config.stripe.apiKey,
      token: function(token) {
        self.onToken(token);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <nav>Header</nav>
        <div className="container">
          <ProductList />
        </div>
      </div>
    );
  }
}
