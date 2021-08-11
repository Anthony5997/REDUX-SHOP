import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon } from 'semantic-ui-react';


const Header = () => {
    return (
        <Container>
            <div className="ui menu margin-header">
                <div className="ui container">
                    <Link to="/">
                        <Icon name="home" />                
                    </Link>
                </div>
                <div className="ui container center">
                    <Link to="/shopcart">
                        <Icon name="shopping cart" />
                    </Link>
                </div>
            </div>
        </Container>

    );
};

export default Header;