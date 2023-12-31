import React, {Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getProductDetails } from "../../actions/productAction";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert";
import { clearErrors } from "../../actions/productAction";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../actions/cartActions";

const ProductDetails = ({match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const {id} = useParams();

    const {product, loading, error} = useSelector(
        (state) => state.productDetails
    );

    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity)); // Pass productId and quantity
        alert.success("Item added to cart successfully!");
    };
    

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert]);

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true,
    };

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if(product.Stock < quantity) return; 

        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {
        if(quantity <= 1) return;

        const qty = quantity - 1;
        setQuantity(qty);
    };

    return (
    <Fragment>
        {loading? (<Loader />) : (
            <Fragment>
            <MetaData title={`${product.name} -- Hypechowk`}/>
            <div className="ProductDetails">
                <div>
                    <Carousel>
                        {product.images && product.images.map((item, i) => (
                            <img 
                                className="CarouselImage"
                                key={item.url}
                                src={item.url}
                                alt={`${i} Slide`}
                            />
                        ))}
                    </Carousel>
                </div>
    
                <div>
                    <div className="detailsBlock-1">
                            <h2>{product.name}</h2>
                            <p>Product # {product.id}</p>
                    </div>
    
                    <div className="detailsBlock-2">
                        <ReactStars {...options} />
                        <span>({product.numOfReviews} Reviews)</span>
                    </div>
                    <div className="detailsBlock-3">
                            <h1>{`₹${product.price}`}</h1>
                            <div className="detailsBlock-3-1">
                                <div className="detailsBlock-3-1-1">
                                    
                                    <button onClick={decreaseQuantity}>-</button>
                                    <input readOnly value={quantity} type="number"/>
                                    <button onClick={increaseQuantity}>+</button>
                                </div>
                                <button onClick={addItemsToCart}>Add to Cart</button>
                            </div>
    
                            <p>
                                Status:{" "}
                                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                </b>  
                            </p>
                    </div>
                    <div className="detailsBlock-4">
                        Description: <p>{product.description}</p>
                    </div>
                    <button className="submitReview">Submit Review</button>
                </div>
            </div>
            <h3 className="reviewsHeading">REVIEWS</h3>
            {product.reviews && product.reviews[0] ? (
                <div className="reviews">
                    {product.reviews && product.reviews.map((review) => <ReviewCard review={review} />)}
                </div>
            ) : (
                <p className="noReviews">No Reviews Yet</p>
            )}
        </Fragment> 
        )}
    </Fragment>
)};

export default ProductDetails;