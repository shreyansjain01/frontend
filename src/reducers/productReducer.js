import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS,
} from "../constants/productConstants";

export const productReducer = (state = {products:[]}, //This will help us connect the fron-end we made for showing the list of products to the backend
action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount : action.payload.filteredProductsCount,
            };
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default: return state
    }
}


export const productDetailsReducer = (state = {product:{}}, //This will help us to connect the front-end we made when a user clicks on a product to connect to backend
    action) => {
        switch (action.type) {
            case PRODUCT_DETAILS_REQUEST:
                return {
                    loading: true,
                    ...state,
                };
            case PRODUCT_DETAILS_SUCCESS:
                return {
                    loading: false,
                    product: action.payload,};
            case PRODUCT_DETAILS_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };
            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };
            default: return state
        }
    }


//The main editing starts from here after filteration part because now the products are not getting fetched by the backend

/*import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const productReducer = (state = {products:[]}, //This will help us connect the fron-end we made for showing the list of products to the backend
action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload.products,
                productsCount: action.payload.productsCount,
            };
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default: return state
    }
}
*/

