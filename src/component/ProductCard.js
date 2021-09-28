const ProductCard = props => {
  console.log(props.name);
  return (
    <li style={{ border: "2px solid white", margin: 10 }}>
      <h3>{props.name}</h3>
      <p>$ {props.price}</p>
    </li>
  );
};

export default ProductCard;
