import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductList = () => {
  //actualValue of state = false   Create a state => boolean (false => initalState)
  const [hidden, setHidden] = useState(false);

  const [products, setProducts] = useState([
    { id: 1, name: "car", price: 13000 },
    { id: 2, name: "laptop", price: 1000 },
    { id: 3, name: "beers", price: 10 },
    { id: 4, name: "records", price: 130 },
  ]);

  const onHideClick = () => {
    console.log("I'm clicking the button!");
    setHidden(!hidden);
  };

  return (
    <div>
      <h1>Product List!</h1>
      <button onClick={onHideClick}>
        {hidden ? "Show List" : "Hide List"}
      </button>
      <div style={{ display: hidden ? "none" : "flex" }}>
        <ul>
          {products.map((prod, index) => (
            <ProductCard key={prod.id} name={prod.name} price={prod.price} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
