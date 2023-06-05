import React, { Component, Fragment } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import appURL from '../api/appURL';
export class NewArraival extends Component {
    constructor(props){
        super(props);
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            productDetails :[],
        }
    }
    componentDidMount(){
        axios.get(appURL.BaseURL+"/all-products/NEW")
        .then((res)=>{
          this.setState({
            productDetails : res.data,
          })
        })
      }
    next(){
        // this.slider.slickNext();
        this.slider.slickNext();
    }
    previous(){
        // this.slider.slickPrev();
        this.slider.slickPrev();
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
    let Products = this.state.productDetails.map((Product,idx)=>{
        if(Product.product_discount===null){
        return <div>
                    <Card className='card image-box'>
                        <img className='center' src={Product.product_image} alt="" />
                        <Card.Body>
                        <p className='product-name-on-card'>{Product.product_name}</p>
                        <p className='product-price-on-card'>$120</p>
                        </Card.Body>
                    </Card>
                </div>
        }else{
            return <div>
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
                </div>
        }
    })
    return (
    
      <Fragment>
        <Container className='text-center' fluid>
            <div className='section-title text-center mb-55'>
                <h2 style={{ textTransform:'uppercase' }}>New Arraival 
                &nbsp;<a onClick={this.previous} className='btn btn-sm site-btn'><i className='fa fa-angle-left'></i> </a> &nbsp;
                    <a onClick={this.next} className='btn btn-sm site-btn'><i className='fa fa-angle-right'></i> </a>
                </h2>
                <p>Some of our exclusive product , You may like</p>
            </div>
            <Row>
                <Slider {...settings} ref={c=>this.slider=c}>
                    {Products}
                    
                </Slider>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NewArraival
