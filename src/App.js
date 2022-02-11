import React, {useContext } from 'react'
import Header from './Component/Header';
import Home from './Component/Home';
import Feature from './Component/Feature';
import New from './Component/New';
import Product from './Component/Product';
import Product_category from './Component/Product_category';
import Review from './Component/Review';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import Cart from './Component/Cart';
import Register from './Component/Register'
import AllProductBody from './Component/AllProductBody';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from './Body';
import NoteContext from './contextApi/NoteContext'
import ProductDetails from './Component/ProductDetails';
import Login from './Component/Login'

function App() {
  const Context  = useContext(NoteContext)
  const { pData } = Context;
  return (
 
       <Router>
    <Routes>
      <Route path="/login" caseSensitive={false} element={<Login />} />
      <Route path="/register" caseSensitive={false} element={<Register />} />
      {
                pData.map((item)=>{

                    // <div><Link to={"/user/" + item.id}>{item.name}</Link></div>
                    return(
                    <Route path={"/product/"+ item.id} caseSensitive={false} element={ <ProductDetails data={item}/> } />
                    )
                  })
            }
          <Route path="/allproduct" caseSensitive={false} element={ <AllProductBody/> } />
        
      <Route path="/" caseSensitive={false} element={ <Body/> } />
    </Routes>
  </Router>
     
   
  );
}

export default App;
