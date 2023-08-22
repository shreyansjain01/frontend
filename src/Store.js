import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { profileReducer, userReducer, forgotPasswordReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user:userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  }
};

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), ...middleware], // Use Redux Toolkit's default middleware
  devTools: composeWithDevTools(),
  preloadedState: initialState,
});

export default store;
