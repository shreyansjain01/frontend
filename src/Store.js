import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user:userReducer,
});

let initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), ...middleware], // Use Redux Toolkit's default middleware
  devTools: composeWithDevTools(),
  preloadedState: initialState,
});

export default store;
