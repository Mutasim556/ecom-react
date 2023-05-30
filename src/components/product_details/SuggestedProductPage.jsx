import React, { Component, Fragment } from 'react'
import { Col, Container, Row ,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class SuggestedProductPage extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
            <div className='section-title text-center mb-55'>
                <h2 style={{ textTransform:'uppercase' }}>Suggested Product</h2>
                <p>Some of our exclusive product , You may like</p>
            </div>
            <Row>
                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={2} xs={6}>
                  <Link to="/product-details" className='text-decoration-none'>
                  <Card className='card image-box'>
                    <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)</p>
                      <p className='product-price-on-card'>$120</p>
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className='card image-box'>
                    <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/8/d/b/-original-imagp9s9wfzp8ghf.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)</p>
                      <p className='product-price-on-card'>$120</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className='card image-box'>
                    <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)</p>
                      <p className='product-price-on-card'>$120</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className='card image-box'>
                    <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)</p>
                      <p className='product-price-on-card'>$120</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className='card image-box'>
                    <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)</p>
                      <p className='product-price-on-card'>$120</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                  <Card className='card image-box'>
                    <img className='center' src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70" alt="" />
                    <Card.Body>
                      <p className='product-name-on-card'>Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)</p>
                      <p className='product-price-on-card'>$120</p>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default SuggestedProductPage
