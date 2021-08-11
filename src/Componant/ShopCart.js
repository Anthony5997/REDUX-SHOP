import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Image, Grid, Button, Icon } from 'semantic-ui-react'
import { removeFromCardProduct } from '../Redux/actions/productActions';



const ShopCart = () => {

    const dispatch = useDispatch();
    const shopCart = useSelector((state) => state.card);
    console.log("SHOP CARD : ", shopCart);

    
    const globalPrice = () => {

      let totalPrice;
      for(let i = 0; i < shopCart.length ; i++){
        console.log("PRICE" ,shopCart[i].price);
        totalPrice += shopCart[i].price
      }

      console.log(totalPrice);
      return totalPrice;

    }

    const deleteItem = (id) => {
  
      let test =  shopCart.filter((shopCar, key) => {
        if (key != id) {
          return shopCart
        }
      })
      console.log(test);
    return dispatch(removeFromCardProduct(test))
  
    //     for( let i = 0; i < shopCart.length; i++){ 
                                   
    //     if ( shopCart[i].id === id.id) { 
    //       console.log("index tab : ", shopCart[i].id, "id du produit: ", id.id); 

    //        shopCart.splice(i, id); 
    //        shopCart.sort()
    //     }
    // }

    }


    const renderList = ()=> shopCart.map((item, key) => {

console.log(key);
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
              <div className="cardList">
                Global Price : 
              {globalPrice()} $
              </div>
        </div>
    );
};

export default ShopCart;
