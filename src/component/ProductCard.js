import { useState } from "react";

const ProductCard = props => {
  const [likes, setLikes] = useState(0);

  const onLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <li style={{ border: "2px solid white", margin: 10 }}>
      <h3>{props.name}</h3>
      <p>$ {props.price}</p>
      <h4>Nr of likes: {likes}</h4>
      <button onClick={onLikeClick}>Like!</button>
    </li>
  );
};

export default ProductCard;
