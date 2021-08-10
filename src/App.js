import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Componant/Header';
import ProductListing from './Componant/ProductListing';
import ProductDetail from './Componant/ProductDetail';
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>

        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route> 404 NOT FOUND</Route>
        </Switch>
        </Container>
      </Router>

    </div>
  );
}

export default App;
