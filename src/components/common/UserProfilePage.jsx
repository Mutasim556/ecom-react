import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import ForgetImage from './../../assets/images/forget.jpg'
import { Link } from 'react-router-dom'

export class UserProfilePage extends Component {

  render() {
    return (
      <Fragment>
        <h1> User Profile Page </h1>

<br /> <ul className="list-group">
         <li className="list-group-item">Name :  Name </li>
         <li className="list-group-item">Email :  Email </li>
 </ul>
      </Fragment>
    )
  }
}

export default UserProfilePage
