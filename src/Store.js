import {combineReducers, legacy_createStore as createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
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
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
