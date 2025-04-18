import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartItems.length} />
        <Switch>
          <Route exact path="/" render={() => <ProductListing addToCart={addToCart} />} />
          <Route path="/cart" render={() => <Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
