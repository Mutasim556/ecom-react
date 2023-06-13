import React, { Component, Fragment } from 'react'
import { Col, Container, Row ,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export class SuggestedProductPage extends Component {
constructor(props){
  super(props)
  this.previous = this.previous.bind(this);
  this.next = this.next.bind(this);
}
next(){
  // this.slider.slickNext();
  this.slider.slickNext();
}
previous(){
    // this.slider.slickPrev();
    this.slider.slickPrev();
}

rou=()=>{
  alert('hello')
}
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay : true,
      autoplaySpeed : 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows : false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  
    let suggested = this.props.relatedProducts.map((Product,idx)=>{
      if(Product.product_discount==''){
        return <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={2} xs={6}>
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
        return <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={2} xs={6}>
        <Link to={"/product-details/"+Product.product_id} onClick={()=>{window.scroll(0,0);this.props.funcDetails(Product.product_id)}} className='text-decoration-none'>
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
                <h2 style={{ textTransform:'uppercase' }}>Suggested Product
                &nbsp;<a onClick={this.previous} className='btn btn-sm site-btn'><i className='fa fa-angle-left'></i> </a> &nbsp;
                    <a onClick={this.next} className='btn btn-sm site-btn'><i className='fa fa-angle-right'></i> </a>
                </h2>
                
                <p>Some of our exclusive product , You may like</p>
            </div>
            <Row>
                {}
                <Slider {...settings} ref={c=>this.slider=c}>
                    {suggested}
                    
                </Slider>
            </Row>
        </Container>
        
      </Fragment>
    )
  }
}

export default SuggestedProductPage
