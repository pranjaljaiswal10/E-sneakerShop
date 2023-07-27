import { createContext, useReducer } from "react";
import products from "/src/utils/constant.js";
const ProductContext = createContext(null);
const intialState = { product: products };
function productReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "PRICE_CHANGE":
      return;
    case "CATEGORY_CHANGE":
      return;
    case "RATING_CHANGE":
      return;
    case "SORT":
      return;
    case "ADD_TO_CART":
      return;
    case "REMOVE_FROM_CART":
      return;
    case "SEARCH_PRODUCT":
      return;
    case "ADD_TO_WISHLISHT":
      return;
    case "REMOVE_FROM_WISHLIST":
      return;
    default:
      throw new Error("unaccepected action");
  }
}
const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    intialState
  );
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export { ProductContext, ProductProvider };
