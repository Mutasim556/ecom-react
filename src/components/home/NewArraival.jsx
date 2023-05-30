import React, { Component, Fragment } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class NewArraival extends Component {
    constructor(props){
        super(props);
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
                    <div>
                        <Card className='card image-box'>
                            <img className='center' src="https://rukminim1.flixcart.com/image/200/200/kj36ky80-0/watch/b/w/9/new-generation-digital-new-digital-led-sports-watch-for-boys-and-original-imafyqjga9tzhgqx.jpeg?q=70" alt="" />
                            <Card.Body>
                            <p className='product-name-on-card'>Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)</p>
                            <p className='product-price-on-card'>$120</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='card image-box'>
                            <img className='center' src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/x/k/n/6-mrj1675-6-aadi-grey-original-imaggzz9gtwe8zhr.jpeg?q=70" alt="" />
                            <Card.Body>
                            <p className='product-name-on-card'>Casuals For Men</p>
                            <p className='product-price-on-card'>$120</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='card image-box'>
                            <img className='center' src="https://rukminim1.flixcart.com/image/612/612/xif0q/cap/1/o/g/free-cap-white-001-alipzone-original-imaghg7gguw8pqcj.jpeg?q=70" alt="" />
                            <Card.Body>
                            <p className='product-name-on-card'>Solid Skull Cap</p>
                            <p className='product-price-on-card'>$120</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='card image-box'>
                            <img className='center' src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/c/n/e/6-mrj2038-6-aadi-blue-original-imagkwmxcyhadbgn.jpeg?q=70" alt="" />
                            <Card.Body>
                            <p className='product-name-on-card'>Mesh |Lightweight|Comfort</p>
                            <p className='product-price-on-card'>$120</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='card image-box'>
                        <img className='center' src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=70" alt="" />
                            <Card.Body>
                            <p className='product-name-on-card'>Lightweight,Comfort,Summer</p>
                            <p className='product-price-on-card'>$120</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='card image-box'>
                            <img className='center' src="https://rukminim1.flixcart.com/image/612/612/xif0q/slipper-flip-flop/g/u/2/10-ghost-f-616ylw-footup-yellow-original-imagmh3f4tecydjj.jpeg?q=70" alt="" />
                            <Card.Body>
                            <p className='product-name-on-card'>Latest Exclusive Affordable Collec</p>
                            <p className='product-price-on-card'>$120</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='card image-box'>
                            <img className='center' src="https://rukminim1.flixcart.com/image/612/612/xif0q/slipper-flip-flop/d/d/o/-original-imagg5xyamhhqrsm.jpeg?q=70" alt="" />
                            <Card.Body>
                            <p className='product-name-on-card'>Stylish Comfortable Lightweight</p>
                            <p className='product-price-on-card'>$120</p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card className='card image-box'>
                            <img className='center' src="https://rukminim1.flixcart.com/image/612/612/l3vxbbk0/slipper-flip-flop/u/9/i/8-diamond-1-mehandi-diamond-1-black-evok-mehandi-black-original-imagewkb3rmxggfm.jpeg?q=70" alt="" />
                            <Card.Body>
                            <p className='product-name-on-card'>Mens Comfortable Trending And Stylish </p>
                            <p className='product-price-on-card'>$120</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NewArraival
