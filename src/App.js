import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js"; 
import LoginSignUp from "./component/User/LoginSignUp.js";
import store from "./Store.js";
import {loadUser} from "./actions/userAction.js";
import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes and Route
import WebFont from "webfontloader";
import UserOptions from "./component/layout/Header/UserOptions.js";
import {useSelector} from "react-redux";
import Profile from "./component/User/Profile.js";

function App() {

  const {isAuthenticated, user} = useSelector(state => state.user);

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
      <Routes> {/* Use Routes */}
        <Route path="/" element={<Home />} /> {/* Use element prop */}
        {/* Define more routes here */}
        <Route path='/product/:id' component={ProductDetails}/>
        <Route path='/products' component={Products}/>
        <Route path='/products/:keyword' component={Products}/>
        <Route path='/search' component={Search}/>
        <Route path='/login' component={LoginSignUp} />
        <Route path='/account' component={Profile} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
