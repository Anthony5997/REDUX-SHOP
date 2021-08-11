import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCardProduct } from '../Redux/actions/productActions';
import { Container } from 'semantic-ui-react'

const ProductDetail = () => {
    const {productId} = useParams();
    const product = useSelector((state) => state.products[productId]);
    const {image, title, description, price, category} = product;
    const dispatch = useDispatch();


    const addToCard = () => {
         console.log("Product to add : ",product);
       return dispatch(addToCardProduct(product))

    }
    return (
        <Container>
            <div className="ui grid container">
           
                <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                    <div className="column lp">
                        <img className="ui fluid image" src={image} />
                    </div>
                    <div className="column rp">
                        <h1>{title}</h1>
                        <h2>
                        <a className="ui teal tag label">${price}</a>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                        <div className="hidden content" onClick={()=>addToCard()}>
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content" onClick={()=>addToCard()}>Add to Cart</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Container>
        );
}

export default ProductDetail;