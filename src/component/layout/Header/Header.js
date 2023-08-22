import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../layout/company-logo.png"


const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;

// import React from 'react';
// import {Link} from "react-router-dom";
// import './HeaderCustom.css';
// import companyLogo from "../../layout/company-logo.png";
// import searchIcon from "../../layout/search.svg";
// import userIcon from "../../layout/user.svg";
// import cartIcon from "../../layout/shoppingCart.svg";

// const Header = () => {
//   return (
//     <div className="header">
//       <ul className="nav">
//         <li><Link to="/">Home</Link></li>
//         <li className="dropdown">
//           <a href="/Categories">Categories</a>
//           <div className="dropdown-content">
//             <a href="/Frames">Frames</a>
//             <a href="/Oversized">Oversized</a>
//             <a href="/Tshirts">Tshirts</a>
//           </div>
//         </li>
//         <li><Link to="/products">Products</Link><a href="/products">Products</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//       <div className="logo">
//         <img src={companyLogo} alt="Company Logo" />
//       </div>
//       <div className="icons">
//         <div className="search icon">
//           <a href='/search'><img src={searchIcon}/></a>
//         </div>
//         <div className="user icon">
//         <a href='/user'><img src={userIcon}/></a>
//         </div>
//         <div className="cart icon">
//         <a href='/cart'><img src={cartIcon}/></a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;







