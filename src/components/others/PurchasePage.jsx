import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import LoginImage from './../../assets/images/login.png'
export class PurchasePage extends Component {
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
                          <h3  className='section-title-login'>How to purchase ?</h3>
                          <p className='section-sub-title-purchase'>For any other grievance including tickets purchased from counters or any sort of inconvenience caused at stations or trains during their travel, passengers are requested to raise their complaints to Bangladesh Railway through the concerned Guard. Any such complaint must be supported by the corresponding tickets. Such grievances will be strictly regulated by Bangladesh Railways Act, 1890 </p>
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

export default PurchasePage