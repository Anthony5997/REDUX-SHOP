import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';


const Header = () => {
    return (
       
            <div className="ui menu margin-header">
                <div className="ui container">
                    <Link className="icon-style"  to="/">
                        <Icon  name="home" />
                        home
                    </Link>
                </div>
                <div className="ui container center">
                    <Link className="icon-style" to="/shopcart">
                        <Icon name="shopping cart" />
                    </Link>
                </div>
            </div>
     

    );
};

export default Header;