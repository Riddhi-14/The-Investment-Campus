// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';
import ProductPage from './components/ProductPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import PaymentPage from './components/PaymentPage';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Registration} />
        <Route path="/products" component={ProductPage} />
        <Route path="/product/:id" component={ProductDetailsPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
