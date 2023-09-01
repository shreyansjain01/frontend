 import React from 'react';
 import {Link} from "react-router-dom";
 import './HeaderCustom.css';
 import companyLogo from "../../layout/company-logo.png";
 import searchIcon from "../../layout/search.svg";
 import userIcon from "../../layout/user.svg";
 import cartIcon from "../../layout/shoppingCart.svg";
 import About from '../About/About';

 const Header = () => {
   return (
     <div className="header">
       <ul className="nav">
         <li><Link to="/">Home</Link></li>
         <li className="dropdown">
           <a href="/Categories">Categories</a>
           <div className="dropdown-content">
             <a href="/Frames">Frames</a>
             <a href="/Oversized">Oversized</a>
             <a href="/Tshirts">Tshirts</a>
           </div>
         </li>
         <li><Link to="/products"></Link><a href="/products">Products</a></li>
         <li><Link to="/about"></Link><a href="/about">About</a></li>
         <li><a href="/contact">Contact</a></li>
       </ul>
       <div className="logo">
         <img src={companyLogo} alt="Company Logo" />
       </div>
       <div className="icons">
         <div className="search icon">
           <a href='/search'><img src={searchIcon}/></a>
         </div>
         <div className="user icon">
         <a href='/login'><img src={userIcon}/></a>
         </div>
         <div className="cart icon">
         <a href='/cart'><img src={cartIcon}/></a>
         </div>
       </div>
     </div>
   );
 };

 export default Header;







