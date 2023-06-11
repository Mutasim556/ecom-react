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
import appURL from '../components/api/appURL'
import axios from 'axios'

export class AppRoute extends Component {
  constructor(){
    super()
   this.state ={
    user :{},
   }
  }
  componentDidMount(){
      let token = localStorage.getItem("token");
      if(token!=null){
        axios.get(appURL.BaseURL+'/get-user-info',{
          headers :{
            'Authorization' : `Bearer ${localStorage.getItem("token")}`,
          }
        })
        .then((res)=>{
          this.setUser(res.data)
        })
      }
      
  }
  setUser = (user) =>{
    this.setState({user:user});
  }
  render() {
    return (
      <Fragment>
        <Routes>
            <Route path="/" element={<HomePage/>} key={Date.now()}></Route>
            <Route path="/login" element={<Login setUser={this.setUser}/>} key={Date.now()}></Route>
            <Route path="/contact-us" element={<Contact/>} key={Date.now()}></Route>
            <Route path="/how-to-purchase" element={<Purchase/>} key={Date.now()}></Route>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} key={Date.now()}></Route>
            <Route path="/refund-policy" element={<RefundPolicy/>} key={Date.now()}></Route>
            <Route path="/product-details" element={<ProductDetails/>} key={Date.now()}></Route>
            <Route path="/notifications" element={<Notification/>} key={Date.now()}></Route>
            <Route path="/favourite" element={<Favourite/>}> key={Date.now()}</Route>
            <Route path="/cart" element={<Cart/>} key={Date.now()}></Route>
            <Route path="/about-us" element={<AboutUs/>} key={Date.now()}></Route>
            <Route path="/category-product/:categoryId"  element={<CategoryProduct />} key={Date.now()}></Route>
            <Route path="/sub-category-product/:subCategoryId"  element={<SubCategoryProduct />} key={Date.now()}></Route>
            <Route path="/register"  element={<Register />} key={Date.now()}></Route>
            <Route path="/forget-password"  element={<ForgetPassword />} key={Date.now()}></Route>
            <Route path="/reset-password/:resetCode"  element={<ResetPassword />} key={Date.now()}></Route>
            <Route path="/user-profile" element={<USerProfile  userD={this.state.user} setUser={this.setUser}/>} key={Date.now()}></Route>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
