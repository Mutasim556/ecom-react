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
import AboutUs from '../pages/AboutUs'
import CategoryProduct from '../pages/CategoryProduct'
import SubCategoryProduct from '../pages/SubCategoryProduct'
import Register from '../pages/Register'
import ForgetPassword from '../pages/ForgetPassword'
import ResetPassword from '../pages/ResetPassword'
import USerProfile from '../pages/UserProfile'

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
            <Route path="/about-us" element={<AboutUs/>}></Route>
            <Route path="/category-product/:categoryId"  element={<CategoryProduct />}></Route>
            <Route path="/sub-category-product/:subCategoryId"  element={<SubCategoryProduct />}></Route>
            <Route path="/register"  element={<Register />}></Route>
            <Route path="/forget-password"  element={<ForgetPassword />}></Route>
            <Route path="/reset-password/:resetCode"  element={<ResetPassword />}></Route>
            <Route path="/user-profile"  element={<USerProfile />}></Route>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
