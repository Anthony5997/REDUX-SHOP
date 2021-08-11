import React from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state.products);




    // console.log("STATE PRODUCT LISTING : ", products);
    return (
        <>

        <div className="ui grid container">

            <div className="four wide column">
                <h1>Category</h1>
                {/* <ProductCategory /> */}
            </div>
            <div className="twelve wide column">
                <h1>Product</h1>
            <div className="ui four column grid">
                <ProductComponent />
                </div>
            </div>
        </div>

        
        </>
    );
};

export default ProductListing;