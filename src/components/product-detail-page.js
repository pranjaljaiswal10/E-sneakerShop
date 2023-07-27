import {useParams} from "react-router-dom";
import {useState} from "react";
import {products} from "/src/utils/constant.js"
const Productdetail=()=>{
 const {_id}=useParams();

  const current=products.filter(item=>item._id===_id)
  const [Items,setItems]=useState(current);
  console.log(Items)
  return(
   <div className="detail">
   <img src={Items[0].image} alt=""/>
   <h1>{Items[0].title}</h1>
   <p>Wishlist</p>
   <h2>{Items[0].rating}</h2>
   <h3>{Items[0].discountedPrice}</h3>
   <h4>{Items[0].price}</h4>
   <small>Product Details</small>
   <small>Brand:{Items[0].title}</small>
   <small>Description:{Items[0].description}</small>
   <small>Category:{Items[0].categoryName}</small>
   <button>Add to Cart</button>
   </div>
  )
}
export default Productdetail;