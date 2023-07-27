import {Link} from "react-router-dom"

const Body = () => {

  return (
    <div className="body">
      <div className="AllCategory">
        <h1>Sneak into Extraoridinary</h1>
        <p>Where Adeventure Meet Style in Quirky Sneaker Bilss</p>
        <button ><Link to="/product-listing-page">Shop now</Link></button>
      </div>
      <div className="category">
        <h2>Shop By Category</h2>
        <div className="mens">
          <img scr="" alt="" />
          <button>mens</button>
        </div>
        <div className="womens">
          <img src="" alt="" />
          <button>women</button>
        </div>
        <div className="kid">
          <img src="" alt="" />
          <button>kid</button>
        </div>
      </div>
    </div>
  );
};
export default Body;
