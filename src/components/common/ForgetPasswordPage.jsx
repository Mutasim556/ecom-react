import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import ForgetImage from './../../assets/images/forget.jpg'
import { Link } from 'react-router-dom'

export class ForgetPasswordPage extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className=''>
                  <Col className='d-flex justify-content-center' xl="6" lg="6" md="6" sm="12" xs="12">
                      <Form className='onboardForm'>
                          <h3  className='section-title-login text-center'>Forget Password</h3>
                          <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>User Email</h6>
                          <input type="text" className='form-control m-2 mb-3' placeholder='Enter your email'/>
                          <Button className='btn btn primary m-2 site-btn-login'> Reset Password</Button><br /><br /><br />
                          {/* <hr />
                          <div className='text-center'>
                          Forget your password ? <Link>Reset password</Link><br /><br />
                          Already have an account ? <Link to={"/login"}>Login</Link>
                          </div> */}
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

export default ForgetPasswordPage
