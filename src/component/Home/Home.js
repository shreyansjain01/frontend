import React, { Fragment, useEffect } from "react";
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import {clearErrors, getProduct} from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import {useAlert} from "react-alert";


const product = {
    name: "Blue Tshirt",
    images: [{url: "https://i.ibb.co/DRST11n/1.webp"}],
    price: "₹ 800",
    _id: "shantya",
};

const Home =() => {
    const dispatch = useDispatch();
    const {loading, error, products, productsCount} = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
       dispatch(getProduct());
    },[dispatch, error, alert]);
    return (
        <Fragment>
            <MetaData title="HypeChowk" />
            <div className="banner">
                <p>Welcome to Hypechowk</p>
                <h1>OUR PRODUCTS</h1>

                <a href="#container">
                    <button>
                        Check it out! 
                    </button>
                </a>
            </div>
            <h2 className="homeHeading">Featured products</h2>
            <div className="container" id="container">
            {products && products.map((product) => <Product product={product} />)}
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />

                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
        </Fragment>
    )
};

export default Home;