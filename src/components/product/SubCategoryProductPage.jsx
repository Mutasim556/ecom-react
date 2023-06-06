import React, { Component, Fragment } from 'react'
import { Col, Container, Row ,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export class SubCategoryProductPage extends Component {
  constructor(props){
    super()
  }
  render() {
    let product = this.props.products.map((product,idx)=>{
      if(product.product_discount===null){
        return <Col className='p-1' key={idx.toString()} xl={2} lg={2} md={2} sm={2} xs={6}>
            <Link to="/product-details" className='text-decoration-none'>
            <Card className='card image-box'>
              <img className='center' src={product.product_image} alt="" />
              <Card.Body>
                <p className='product-name-on-card'>{product.product_name}</p>
                <p className='product-price-on-card'>{product.product_price } BDT</p>
              </Card.Body>
            </Card>
            </Link>
        </Col>
      }else{
        return <Col className='p-1' key={idx.toString()} xl={2} lg={2} md={2} sm={2} xs={6}>
                <Link to="/product-details" className='text-decoration-none'>
                <Card className='card image-box'>
                  <img className='center' src={product.product_image} alt="" />
                  <Card.Body>
                    <p className='product-name-on-card'>{product.product_name}</p>
                    <p className='product-price-on-card'>
                      <strike className="text-primary">{product.product_price } BDT</strike><br />
                      {product.product_discount_price } BDT
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
                <h2 style={{ textTransform:'uppercase' }}>{this.props.subcategory.category_name} - {this.props.subcategory.sub_category_name}</h2>
            </div>
            <Row>
                {product}
            </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default SubCategoryProductPage
