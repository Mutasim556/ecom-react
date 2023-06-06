import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import ForgetImage from './../../assets/images/forget.jpg'
import { Link } from 'react-router-dom'

export class ResetPasswordPage extends Component {

  render() {
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className=''>
                  <Col className='d-flex justify-content-center' xl="6" lg="6" md="6" sm="12" xs="12">
                  <Form className="onboardForm">
                    <h4 className="section-title-login"> RESET PASSWORD </h4>
                    <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>Pin Code</h6>
                    <input className="form-control m-2" type="text" placeholder="Enter Your Pin Code" />
                    <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>User Email</h6>
                    <input className="form-control m-2" type="email" placeholder="Enter Your Email" />
                    <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>New Password</h6>
                    <input className="form-control m-2" type="password" placeholder="Your New Password" />
                    <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>Confirm Password</h6>
                    <input className="form-control m-2" type="password" placeholder="Confirm Your Password" />


                    <Button className="btn btn-block m-2 site-btn-login"> Reset Password </Button> 

                  </Form>
                      
                  </Col>
                  <Col className='p-0 m-0 Desktop'  xl="6" lg="6" md="6" sm="12" xs="12">
                    <img className='onboardBanner' src={ForgetImage} alt="" />
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ResetPasswordPage
