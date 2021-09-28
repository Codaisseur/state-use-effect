import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    { id: 1, name: "car", price: 13000 },
    { id: 2, name: "laptop", price: 1000 },
    { id: 3, name: "beers", price: 10 },
    { id: 4, name: "records", price: 130 },
  ];

  return (
    <div>
      <h1>Product List!</h1>
      <ul>
        {products.map((prod, index) => (
          <ProductCard key={prod.id} name={prod.name} price={prod.price} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
