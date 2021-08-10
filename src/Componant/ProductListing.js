import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=> {
            console.log("ERROR : ", err);
        })
        console.log(response.data);
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    console.log("STATE PRODUCT LISTING : ", products);
    return (
        <div className="ui grid four column wide container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;