import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './Componant/Header';
import ProductListing from './Componant/ProductListing';
import ProductDetail from './Componant/ProductDetail';
import { Container } from 'semantic-ui-react'

import axios from 'axios';
import { useDispatch,  useSelector} from 'react-redux';
import { setProducts } from './Redux/actions/productActions';
import ShopCart from './Componant/ShopCart';


function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
 

  const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err)=> {
          console.log("ERROR : ", err);
      })
      // console.log(response.data);
      dispatch(setProducts(response.data))
  }

  useEffect(() => {
      fetchProducts()
  }, []);
  return (

    <div className="App">
      <Router>
        <Header />
        <Container>

        <Switch>
        <Route path="/shopcart" exact component={ShopCart} />
          <Route path="/" exact component={ProductListing} />
          {Object.keys(products).length > 0 ? <Route path="/product/:productId" exact component={ProductDetail} /> : <Redirect to="/" />}
          <Route> 404 NOT FOUND</Route>
        </Switch>
        </Container>
      </Router>

    </div>
  );
}

export default App;
