// import React from "react";
// import Footer from "./component/layout/Footer/Footer.js";
// import Home from "./component/Home/Home.js";
// import ProductDetails from "./component/Product/ProductDetails.js";
// import Products from "./component/Product/Products.js";
// import Search from "./component/Product/Search.js"; 
// import LoginSignUp from "./component/User/LoginSignUp.js";
// import store from "./store.js";
// import {loadUser} from "./actions/userAction.js";
// import './App.css';
// import Header from "./component/layout/Header/Header.js";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes and Route
// import WebFont from "webfontloader";
// import UserOptions from "./component/layout/Header/UserOptions.js";
// import {useSelector} from "react-redux";
// import Profile from "./component/User/Profile.js";

// function App() {

//   const {isAuthenticated, user} = useSelector(state => state.user);

//   React.useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Monaco", "Roboto"],
//       },
//     });

//     store.dispatch(loadUser());
//   }, []);

//   return (
//     <Router>
//       <Header />
//       {isAuthenticated && <UserOptions user={user} />}
//       <Router exact path="/" component={Home}/>
//       <Router exact path="/product/:id" component={ProductDetails}/>
//       <Router exact path="/products" component={Products}/>
//       <Router exact path="/products/:keyword" component={Products}/>
//       <Router exact path="/search" component={Search}/>
//       <Router exact path="/account" component={Profile}/>
//       <Router exact path="/login" component={LoginSignUp}/>
//       <Footer />
//     </Router>
//   );
// }

// export default App;





//UPDATED FORM FOR ERROR 1
// import React from "react";
// import Footer from "./component/layout/Footer/Footer.js";
// import Home from "./component/Home/Home.js";
// import ProductDetails from "./component/Product/ProductDetails.js";
// import Products from "./component/Product/Products.js";
// import Search from "./component/Product/Search.js"; 
// import LoginSignUp from "./component/User/LoginSignUp.js";
// import store from "./Store.js";
// import { loadUser } from "./actions/userAction.js";
// import './App.css';
// import Header from "./component/layout/Header/Header.js";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes and Route
// import WebFont from "webfontloader";
// import UserOptions from "./component/layout/Header/UserOptions.js";
// import { useSelector } from "react-redux";
// import Profile from "./component/User/Profile.js";
// import ProtectedRoute from "./component/Route/ProtectedRoute.js";
// import UpdateProfile from "./component/User/UpdateProfile.js";
// import UpdatePassword from "./component/User/UpdatePassword.js";
// import ForgotPassword from "./component/User/ForgotPassword.js";
// import ResetPassword from "./component/User/ResetPassword.js";
// import Cart from "./component/Cart/Cart.js";

// function App() {
//   const { isAuthenticated, user } = useSelector(state => state.user);

//   React.useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Monaco", "Roboto"],
//       },
//     });

//     store.dispatch(loadUser());
//   }, []);

//   return (
//     <Router>
//       <Header />
//       {isAuthenticated && <UserOptions user={user} />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:keyword" element={<Products />} />
//         <Route path="/search" element={<Search />} />
//         <ProtectedRoute path="/account" element={<Profile />} />
//         <ProtectedRoute path="/me/update" element={<UpdateProfile />} />
//         <ProtectedRoute path="/password/update" element={<UpdatePassword />} />
//         <Route path="/password/forgot" element={<ForgotPassword />} />
//         <Route path="/password/reset/:token" element={<ResetPassword />} />
//         <Route path="/login" element={<LoginSignUp />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;




//UPDATED FORM FOR ERROR 2
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js"; 
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./store.js";
import { loadUser } from "./actions/userAction.js";
import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";

function App() {
  const { isAuthenticated, user } = useSelector(state => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Monaco", "Roboto"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />

        {/* Wrap ProtectedRoute components with Route */}
        <Route path="/account" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/me/update" element={<ProtectedRoute element={<UpdateProfile />} />} />
        <Route path="/password/update" element={<ProtectedRoute element={<UpdatePassword />} />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


