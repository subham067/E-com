import React,{useRef, useContext} from 'react'
import cartimage1 from '../image/cart-img-1.png';
import cartimage2 from '../image/cart-img-2.png';
import cartimage3 from '../image/cart-img-3.png';
import { useNavigate, NavLink } from 'react-router-dom';

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

import NoteContext from '../contextApi/NoteContext'


function Header(){
    const Context  = useContext(NoteContext)
    const { name } = Context;
    let navigate = useNavigate();
    // const search_btn_array=["search-form", "active"]
    const inputEl = useRef(null);
    const inputElement = useRef(null);
    function search_btn() {
        inputElement.current.classList.toggle('active');
        inputEl.current.classList.toggle('active');
        
    }
    return(
        <div>
            {/* header section starts  */}
            <header className="header">
                <a href="#" className="logo">
                    {" "}
                    <i className="fas fa-shopping-basket" /> E-com{" "}
                </a>
                <nav className="navbar">
                    <NavLink  to="/">Home</NavLink >
                    <NavLink  to="/allproduct">products</NavLink >
                    <a href="#features">features</a>
                    <a href="#categories">categories</a>
                    <a href="#review">review</a>
                    <a href="#blogs">blogs</a>
                </nav>
                <div className="icons">
                    <div className="fas fa-bars" id="menu-btn" />
                    <div className="fas fa-search" onClick={search_btn} />
                    <div className="fas fa-shopping-cart" id="cart-btn" />
                    <div className="fas fa-user" id="login-btn" />
                </div>
                <form action="" className="search-form " ref={inputEl}>
                    <input type="search" id="search-box" placeholder="search here..." />
                    <label htmlFor="search-box" className="fas fa-search" />
                </form>
                <div className="search-form2 " ref={inputElement}>
                   <h5>Subham</h5>
                   <h5>Subham</h5>
                   <h5>Subham</h5>
                   <h5>Subham</h5>
                </div>
                
                <div className="shopping-cart">
                    <div className="box">
                        <i className="fas fa-trash" />
                        <img src={cartimage1} alt="cart-image-1" />
                        <div className="content">
                            <h3>watermelon</h3>
                            <span className="price">$4.99/-</span>
                            <span className="quantity">qty : 1</span>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-trash" />
                        <img src={cartimage2} alt="cart-image-2" />
                        <div className="content">
                            <h3>onion</h3>
                            <span className="price">$4.99/-</span>
                            <span className="quantity">qty : 1</span>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-trash" />
                        <img src={cartimage3} alt="cart-image-3" />
                        <div className="content">
                            <h3>chicken</h3>
                            <span className="price">$4.99/-</span>
                            <span className="quantity">qty : 1</span>
                        </div>
                    </div>
                    <div className="total"> total : $19.69/- </div>
                    <a href="#" className="btn">
                        checkout
                    </a>
                </div>
                <form action="" className="login-form">
                    <h3>login now</h3>
                    <input type="email" placeholder="your email" className="box" />
                    <input type="password" placeholder="your password" className="box" />
                    <p>
                        forget your password <a href="#">click here</a>
                    </p>
                    <p>
                        don't have an account <a href="#">create now</a>
                    </p>
                    <input type="submit" defaultValue="login now" className="btn" />
                </form>
            </header>
            {/* header section ends */}
        </div>
    )
}

export default Header