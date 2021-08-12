import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './Componant/Header';
import ProductListing from './Componant/ProductListing';
import ProductDetail from './Componant/ProductDetail';
import { Container } from 'semantic-ui-react'

import axios from 'axios';
import { useDispatch,  useSelector} from 'react-redux';
import { setProducts, initCardProduct } from './Redux/actions/productActions';
import ShopCart from './Componant/ShopCart';


function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
 

  const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err)=> {
          console.log("ERROR : ", err);
      })
      dispatch(setProducts(response.data))

console.log('storage', getStorage())
      if(sessionStorage.length !== 0){         
        dispatch(initCardProduct(getStorage()))
      }

  }

 const getStorage = () => {

      let data = [];
      for(let i = 0 ; i < sessionStorage.length; i++){
        let key = sessionStorage.key(i);
        data.push(JSON.parse(sessionStorage.getItem(key)))
      }
      return data;
  }

  useEffect(() => {
      fetchProducts()
  }, []);
  return (

    <div className="App">
      <Router>
        <Header />
        <div className="product-detail-global">

          <Container>
          <Switch>
          <Route path="/shopcart" exact component={ShopCart} />
            <Route path="/" exact component={ProductListing} />
            {Object.keys(products).length > 0 ? <Route path="/product/:productId" exact component={ProductDetail} /> : <Redirect to="/" />}
            <Route> 404 NOT FOUND</Route>
          </Switch>
          </Container>
        </div>

      </Router>

    </div>
  );
}

export default App;
