import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Grid, Button, Icon } from 'semantic-ui-react'
import { removeFromCardProduct } from '../Redux/actions/productActions';



const ShopCart = () => {

    const dispatch = useDispatch();
    const shopCart = useSelector((state) => state.card);


    
    const globalPrice = () => {

      let totalPrice = 0;
      for(let i = 0; i < shopCart.length ; i++){
        totalPrice = totalPrice + shopCart[i].price
      }

      return totalPrice;

    }

    const deleteItem = (id) => {
  
      let test =  shopCart.filter((shopCar, key) => {
        if (key !== id) {
          return shopCart
        }

      })
      
      sessionStorage.removeItem(shopCart[id].title );

      return dispatch(removeFromCardProduct(test))
      

  }




    const renderList = ()=> shopCart.map((item, key) => {

    return (
      <div >
        <Grid key={item}>
          <Grid.Column width={2}>
                <Image avatar src={item.image} />
          </Grid.Column>
          <Grid.Column width={8}>
            <div className="listItem">
              {item.title}

            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            {item.price} $
          </Grid.Column>
          <Grid.Column width={2}>
          <Button onClick={() =>deleteItem(key)} icon>
            <Icon name='delete' />
          </Button>
          </Grid.Column>
      </Grid>
      </div>
    )
})

    return (
        <div className="cardList">

              {renderList()}
              <div className="cardList global-price">
                Global Price : 
              {globalPrice()} $
              </div>
        </div>
    );
};

export default ShopCart;
