import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Row ,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import appURL from '../api/appURL'
export class FeatureProduct extends Component {
  constructor(){
    super()
    this.state = {
      productDetails :[],
    }
  }


  componentDidMount(){
    axios.get(appURL.BaseURL+"/all-products/FEATURED")
    .then((res)=>{
      this.setState({
        productDetails : res.data,
      })
    })
  }
  render() {
    let Products = this.state.productDetails.map((Product,idx)=>{
      if(Product.product_discount===null){
        return <Col className='p-1' key={idx.toString()} xl={2} lg={2} md={2} sm={2} xs={6}>
            <Link to={"/product-details/"+Product.product_id} className='text-decoration-none'>
            <Card className='card image-box'>
              <img className='center' src={Product.product_image} alt="" />
              <Card.Body>
                <p className='product-name-on-card'>{Product.product_name}</p>
                <p className='product-price-on-card'>{Product.product_price } BDT</p>
              </Card.Body>
            </Card>
            </Link>
        </Col>
      }else{
        return <Col className='p-1' key={idx.toString()} xl={2} lg={2} md={2} sm={2} xs={6}>
                <Link to={"/product-details/"+Product.product_id} className='text-decoration-none'>
                <Card className='card image-box'>
                  <img className='center' src={Product.product_image} alt="" />
                  <Card.Body>
                    <p className='product-name-on-card'>{Product.product_name}</p>
                    <p className='product-price-on-card'>
                      <strike className="text-primary">{Product.product_price } BDT</strike><br />
                      {Product.product_discount_price } BDT
                    </p>
                  </Card.Body>
                </Card>
                </Link>
              </Col>
      }
      
    })
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
            <div className='section-title text-center mb-55'>
                <h2 style={{ textTransform:'uppercase' }}>Featured Product</h2>
                <p>Some of our exclusive product , You may like</p>
            </div>
            <Row>
                {Products}
            </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default FeatureProduct
