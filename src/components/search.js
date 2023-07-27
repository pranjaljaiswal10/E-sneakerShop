import {useState,useContext} from "react";
import filterData from "/src/utils/helperfn.js"
import {productContext} from "/src/utils/productContext.js"
const Search=()=>{
  const {productState,productDispatch}=useContext(productContext);
  const [searchTxt,setSearchTxt]=useState("");
 const [filterProduct,setFilterProduct]=useState();
  const handleClick=()=>{
   const data=filterData(productState,searchTxt);
   setFilterProduct(data);
   productDispatch({type:"",payload:filterProduct})
 }
 return (
<div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button onClick={handleClick}>Search</button>
      </div>
  )
}
export default Search;