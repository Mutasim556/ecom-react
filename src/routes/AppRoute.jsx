import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Purchase from '../pages/Purchase'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import RefundPolicy from '../pages/RefundPolicy'
import ProductDetails from '../pages/ProductDetails'
import Notification from '../pages/Notification'
import Favourite from '../pages/Favourite'
import Cart from '../pages/Cart'

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/contact-us" element={<Contact/>}></Route>
            <Route path="/how-to-purchase" element={<Purchase/>}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
            <Route path="/refund-policy" element={<RefundPolicy/>}></Route>
            <Route path="/product-details" element={<ProductDetails/>}></Route>
            <Route path="/notifications" element={<Notification/>}></Route>
            <Route path="/favourite" element={<Favourite/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
