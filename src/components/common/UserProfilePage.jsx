import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import ForgetImage from './../../assets/images/forget.jpg'
import { Link, redirect } from 'react-router-dom'
import userInfo from '../api/userInfo'
import appURL from '../api/appURL'
import axios from 'axios'
export class UserProfilePage extends Component {
  constructor(props){
    super()
  }

  render() {
    return (
      <Fragment>
        <h1> User Profile Page </h1>

<br /> <ul className="list-group">
         <li className="list-group-item">Name :  {this.props.userDetails.name} </li>
         <li className="list-group-item">Email :  {this.props.userDetails.email} </li>
 </ul>
      </Fragment>
    )
  }
}

export default UserProfilePage
