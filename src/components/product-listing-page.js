import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "/src/utils/constant.js";
const Productlisting = () => {
  const [product, setProduct] = useState(products);
  return (
    <div className="product-list">
      <p>Showing Products(Showing {product.length} of all products)</p>
      {product.map((item) => (
        <Link to={`/product-detail-page/${item._id}`} key={item._id}>
          <ProductCard {...item} />
        </Link>
      ))}
    </div>
  );
};
const ProductCard = ({
  description,
  title,
  image,
  rating,
  price,
  discountedPrice,
  reviews,
  in_stock
}) => {
  return (
    <div className="card">
      <img src={image} alt="shoes" />
      <h1>{description}</h1>
      <h2>{title}</h2>
      <p>Whishlist</p>
      <h3>{price}</h3>
      <h4>{discountedPrice}</h4>
      <h5>{rating}</h5>
      <p>Add to Cart</p>
    </div>
  );
};
export default Productlisting;
