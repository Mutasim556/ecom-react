import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import LoginImage from './../../assets/images/login.png'
export class RefundPolicyPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
      }
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className=''>
                  <Col className='d-flex justify-content-center' xl="12" lg="12" md="12" sm="12" xs="12">
                      <Form className='onboardForm'>
                            <h3  className='section-title-login'>Our Refund Policy</h3>
                            <p className='section-sub-title-purchase'>CoderClans will not refund any payment to any member for any reason whatsoever except in the case of an error on CoderClans part.
                            Please read the full terms for our refund policy below. Agreeing to our terms and conditions when you purchase from CoderClans means you agree to our refund policy. <br />
                            Refunds are not permitted for members who have paid in full and then wish to take a discounted offer or promotion instead. You may not cancel your course to buy a cheaper deal, as your IP address is recorded and we reserve the right to ban your account on this basis.
                            CoderClans will not refund any member who has decided that they no longer wish to use CoderClans.</p>
                      </Form>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RefundPolicyPage