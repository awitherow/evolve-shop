import "./index.css";

import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default () => (
  <div className="App">
    <Header />
    <div className="container">
      <ProductList />
    </div>
  </div>
);
