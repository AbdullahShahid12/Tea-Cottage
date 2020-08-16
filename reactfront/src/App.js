import React from "react";
import Product from "./comp/Product";
const handleAddToCartClick = (title) => {
  alert("Add to card was clicked for " + title);
};
function App() {
  return (
    <div>
      <h1>Components</h1>
      <Product title="Audi" price="1000" onAddToCart={handleAddToCartClick} />
      <Product title="Honda" price="700" onAddToCart={handleAddToCartClick} />
      <Product title="Toyota" price="500" onAddToCart={handleAddToCartClick} />
    </div>
  );
}

export default App;
