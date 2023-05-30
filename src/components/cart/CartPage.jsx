import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button,Card } from 'react-bootstrap'
import Product1 from './../../assets/images/product1.png'
import Product2 from './../../assets/images/product2.png'
import Product3 from './../../assets/images/product3.png'
import Product4 from './../../assets/images/product4.png'
export class CartPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
  render() {
    return (
        <Fragment>

        <Container>   

<div className="section-title text-center mb-55"><h2>Cart Product List</h2>   
</div>



        <Row>


<Col className="p-1" lg={12} md={12} sm={12} xs={12} >
<Card >                
    <Card.Body>
    <Row>
         <Col md={3} lg={3} sm={6} xs={6}>
              <img className="cart-product-image" src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70" />
         </Col>

         <Col md={6} lg={6} sm={6} xs={6}>
         <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
     <h6> Quantity = 05 </h6>
     <h6>Price = 05 x 100 = 5000$</h6>
         </Col>

         <Col md={3} lg={3} sm={12} xs={12}>
         <input placeholder="2" className="form-control text-center" type="number" />
         <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

         </Col>
    </Row>              
    </Card.Body>               
</Card>
</Col> 




<Col className="p-1" lg={12} md={12} sm={12} xs={12} >
<Card >                
    <Card.Body>
    <Row>
         <Col md={3} lg={3} sm={6} xs={6}>
              <img className="cart-product-image" src={Product1} />
         </Col>

         <Col md={6} lg={6} sm={6} xs={6}>
         <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
     <h6> Quantity = 05 </h6>
     <h6>Price = 05 x 100 = 5000$</h6>
         </Col>

         <Col md={3} lg={3} sm={12} xs={12}>
         <input placeholder="2" className="form-control text-center" type="number" />
         <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

         </Col>
    </Row>              
    </Card.Body>               
</Card>
</Col> 



<Col className="p-1" lg={12} md={12} sm={12} xs={12} >
<Card >                
    <Card.Body>
    <Row>
         <Col md={3} lg={3} sm={6} xs={6}>
              <img className="cart-product-image" src={Product1} />
         </Col>

         <Col md={6} lg={6} sm={6} xs={6}>
         <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
     <h6> Quantity = 05 </h6>
     <h6>Price = 05 x 100 = 5000$</h6>
         </Col>

         <Col md={3} lg={3} sm={12} xs={12}>
         <input placeholder="2" className="form-control text-center" type="number" />
         <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

         </Col>
    </Row>              
    </Card.Body>               
</Card>
</Col> 




<Col className="p-1" lg={12} md={12} sm={12} xs={12} >
<Card >                
    <Card.Body>
    <Row>
         <Col md={3} lg={3} sm={6} xs={6}>
              <img className="cart-product-image" src={Product1} />
         </Col>

         <Col md={6} lg={6} sm={6} xs={6}>
         <h5 className="product-name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
     <h6> Quantity = 05 </h6>
     <h6>Price = 05 x 100 = 5000$</h6>
         </Col>

         <Col md={3} lg={3} sm={12} xs={12}>
         <input placeholder="2" className="form-control text-center" type="number" />
         <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>

         </Col>
    </Row>              
    </Card.Body>               
</Card>
</Col> 




<Col className="p-1" lg={12} md={12} sm={12} xs={12} >
<Card >                
    <Card.Body>
    <Row>
         <Col className='float-right' md={4} lg={4} sm={12} xs={12}></Col>
         <Col className='float-right' md={4} lg={4} sm={12} xs={12}></Col>
         <Col className='float-right' md={4} lg={4} sm={12} xs={12}>
            <h5 className="product-name text-center" style={{ fontWeight:600 }}>Total Calculation</h5>
            <h5> Product Quantity = 05 </h5>
            <h5>Price = 05 x 100 = 5000$</h5>
            <button className="btn btn-block w-100 mt-3 site-btn"><i className="fa fa-lg fa-cart-shopping"></i> Check Out </button>
         </Col>
    </Row>              
    </Card.Body>               
</Card>
</Col> 










        </Row>

    </Container>


   </Fragment>
    )
  }
}

export default CartPage
