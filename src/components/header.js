import { useState } from "react";
import {Link} from "react-router-dom"
const Header = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const handleClick = () => {};
  return (
    <div className="header">
      <div className="logo">
      <Link to="/">
        <img src="" alt="" />
        <small>E-sneaker Shop</small>
        </Link>
      </div>
      

      <ul className="nav-item">
        <li><Link to="/product-listing-page">Explore</Link></li>
        <li><Link to="">login</Link></li>
        <li><Link to="">Wishlist</Link></li>
        <li><Link to="">Cart</Link></li>
      </ul>
    </div>
  );
};
export default Header;
