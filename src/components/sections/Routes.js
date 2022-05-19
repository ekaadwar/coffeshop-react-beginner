import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import History from '../pages/History'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import ProductDetail from '../pages/ProductDetail'
import ForgotPassword from '../pages/ForgotPassword'

class Routes extends React.Component {
  state = {
    isAuth: 0,
  }

  changeAuth = (data) => {
    this.props.change(data)
  }

  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Home change={this.changeAuth} {...props} />}
        />

        <Route
          path="/product"
          exact
          render={(props) => <Product change={this.changeAuth} {...props} />}
        />

        <Route
          path="/product/detail"
          render={(props) => (
            <ProductDetail change={this.changeAuth} {...props} />
          )}
        />

        <Route
          path="/cart"
          render={(props) => <Cart change={this.changeAuth} {...props} />}
        />

        <Route
          path="/history"
          render={(props) => <History change={this.changeAuth} {...props} />}
        />

        <Route
          path="/login"
          render={(props) => <Login change={this.changeAuth} {...props} />}
        />

        <Route
          path="/signup"
          render={(props) => <Signup change={this.changeAuth} {...props} />}
        />

        <Route
          path="/forgot-pass"
          render={(props) => (
            <ForgotPassword change={this.changeAuth} {...props} />
          )}
        />

        <Route
          part="/profile"
          render={(props) => <Profile change={this.changeAuth} {...props} />}
        />
      </Switch>
    )
  }
}

export default Routes
