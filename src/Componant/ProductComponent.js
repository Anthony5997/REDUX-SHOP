import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponent = () => {

    const products = useSelector((state) => state.products);

    const renderList =()=> Object.keys(products).map((index) => {
        return (
          <div className="ui four column grid" key={index}>
                <div key={products[index].id}>
                  <Link to={`/product/${index}`}>
                    <div className="ui link cards">
                      <div className="card">
                        <div className="image">
                          <img style={{height : "300px"}} src={products[index].image} alt={products[index].title} />
                        </div>
                        <div className="content">
                          <div className="header">{products[index].title}</div>
                          <div className="meta price">$ {products[index].price}</div>
                          <div className="meta">{products[index].category}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
          </div>
        )
    })

    return (
   <>
            {renderList()}
   </>  
    )
}

export default ProductComponent;
