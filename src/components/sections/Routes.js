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
    // console.log('gasskeunn!!')
  }

  render() {
    return (
      <Switch>
        {/* <Route path="/" exact change={this.changeAuth} component={Home} /> */}
        <Route
          path="/"
          exact
          render={(props) => <Home change={this.changeAuth} {...props} />}
        />
        <Route path="/product" exact component={Product} />
        <Route path="/product/detail" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/history" component={History} />

        {/* <Route path="/login" component={Login} /> */}
        <Route
          path="/login"
          render={(props) => <Login change={this.changeAuth} {...props} />}
        />

        {/* <Route path="/signup" component={Signup} /> */}
        <Route
          path="/signup"
          render={(props) => <Signup change={this.changeAuth} {...props} />}
        />

        {/* <Route path="/forgot-pass" component={ForgotPassword} /> */}
        <Route
          path="/forgot-pass"
          render={(props) => (
            <ForgotPassword change={this.changeAuth} {...props} />
          )}
        />

        <Route part="/profile" component={Profile} />

        {/* <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/product/detail">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/forgot-pass">
          <ForgotPassword />
        </Route>
        <Route part="/profile">
          <Profile />
        </Route> */}
      </Switch>
    )
  }
}

export default Routes
