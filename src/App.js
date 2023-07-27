import "./styles.css";

import Header from "/src/components/header.js";
import Footer from "/src/components/footer.js";
import Body from "/src/components/body.js";
import {createBrowserRouter,Outlet} from "react-router-dom"
import Error from "/src/components/error.js"
import Productlisting from "/src/components/product-listing-page.js";
import Productdetail from "/src/components/product-detail-page.js"
import {ProductProvider} from "/src/utils/productContext.js"


export default function App() {
  return <AppLayout />;
 
}




const AppLayout = () => {
  return (
    <>
     <ProductProvider>
      <Header />
      <Outlet />
      <Footer />
      </ProductProvider>
    </>
  );
};

export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[{
      path:"/",
      element:<Body/>,
    },{
      path:"/product-listing-page",
      element:<Productlisting/>
    },{
      path:"/product-detail-page/:_id",
      element:<Productdetail/>
    }
  ]
  }
])

