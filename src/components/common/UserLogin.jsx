import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import LoginImage from './../../assets/images/login.png'
export class UserLogin extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className='text-center'>
                  <Col className='d-flex justify-content-center' xl="6" lg="6" md="6" sm="12" xs="12">
                      <Form className='onboardForm'>
                          <h3  className='section-title-login'>Sign In</h3>
                          <h6 className='section-sub-title m-0' style={{marginLeft:'8px',fontWeight:'1000'}}>User Phone</h6>
                          <input type="text" className='form-control m-2' placeholder='Enter your mobile number'/>
                          <Button className='btn btn primary m-2 site-btn-login'>Next</Button>
                      </Form>
                  </Col>
                  <Col className='p-0 m-0 Desktop'  xl="6" lg="6" md="6" sm="12" xs="12">
                    <img className='onboardBanner' src={LoginImage} alt="" />
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default UserLogin
