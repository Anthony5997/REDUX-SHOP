import React from 'react';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    return (
        <>

        <div className="ui grid container">

            <div className="four wide column">
                <h1>Category</h1>
                {/* <ProductCategory /> */}
            </div>
            <div className="twelve wide column">
                <h1>Product</h1>
            <div className="ui three column grid">
                <ProductComponent />
                </div>
            </div>
        </div>

        
        </>
    );
};

export default ProductListing;