import React, { Component, Fragment } from 'react'
import { Col, Container, Row , Card} from 'react-bootstrap'

export class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid>
            <div className='section-title text-center mb-55'>
                <h2 style={{ textTransform:'uppercase' }}>Product Collection</h2>
                <p>Some of our exclusive collection , You may like</p>
            </div>
            <Row>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={12} xs={6}>
                  <Card className='card image-box w-100'>
                    <img className='center w-100' src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/k/l/y/xl-tsrt-catalog-03-kajaru-original-imagm7taxer3czn5.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Pack of 2 Men Striped Round Neck Pink, Grey T-Shirt</p>
                      <p className='product-price-on-card'>$399</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={12} xs={6}>
                  <Card className='card image-box w-100'>
                    <img className='center w-100' src="https://rukminim1.flixcart.com/image/832/832/k7f34i80/t-shirt/r/y/r/m-10940528-roadster-original-imafpnru9dnr3phh.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Men Typography Round Neck Dark Blue T-Shirt</p>
                      <p className='product-price-on-card'>$399</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='card image-box w-100'>
                    <img className='center w-100' src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/x/v/e/l-all-rbcropn-sky-one-nb-nicky-boy-original-imagkq6hgg5gqsep.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Men Printed Round Neck Light Blue T-Shirt</p>
                      <p className='product-price-on-card'>$399</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Card className='card image-box w-100'>
                    <img className='center w-75' src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/q/2/i/m-s-r-b-w-farbot-original-imagjuxy9kn5qyam.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Men Color Block Round Neck Black T-Shirt</p>
                      <p className='product-price-on-card'>$399</p>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Collection
