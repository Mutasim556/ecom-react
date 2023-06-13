import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Col, Container, Row , Card} from 'react-bootstrap'
import appURL from '../api/appURL';
import { Link } from 'react-router-dom';

export class Collection extends Component {
  constructor(props){
    super(props);
    this.state = {
        productDetails :[],
    }
  }
  componentDidMount(){
    axios.get(appURL.BaseURL+"/all-products/COLLECTION")
    .then((res)=>{
      this.setState({
        productDetails : res.data,
      })
    })
  }
  render() {
    let Products = this.state.productDetails.map((Product,idx)=>{
      if(Product.product_discount===null){
          return <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={12} xs={6}>
            <Link to={"/product-details/"+Product.product_id} className='text-decoration-none'>
          
          <Card className='card image-box w-100'>
            <img className='center w-100' src={Product.product_image} alt="" />
            <Card.Body>
              <p className='product-name-on-card'>{Product.product_name}</p>
              <p className='product-price-on-card'>{Product.product_price } BDT</p>
            </Card.Body>
          </Card>
          </Link>
        </Col>
        
      }else{
        return <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={12} xs={6}>
          <Link to={"/product-details/"+Product.product_id} className='text-decoration-none'>
        
        <Card className='card image-box w-100'>
          <img className='center w-100' src={Product.product_image} alt="" />
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
    });
    return (
      <Fragment>
        <Container className='text-center' fluid>
            <div className='section-title text-center mb-55'>
                <h2 style={{ textTransform:'uppercase' }}>Product Collection</h2>
                <p>Some of our exclusive collection , You may like</p>
            </div>
            <Row>
                {Products}
                
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Collection
