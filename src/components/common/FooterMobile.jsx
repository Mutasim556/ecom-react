import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from './../../assets/images/apple.png'
import Google from './../../assets/images/google.png'
export class FooterMobile extends Component {
    constructor(){
        super()
        var todaty = new Date();
        var day = todaty.getFullYear();
        this.state ={
            date : day,
        }
    }
  render() {
    return (
        <Fragment>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
            <Container >
                <Row className='px-0 my-5'>
                    <Col className='p-2' xl="3" lg="3" md="3" sm="6" xs="12">
                        <h5 className='footer-menu-title'>OFFICE ADDRESS</h5>
                        <p>40 Shahid Tajuddin Ahmed Sarani Tejgaon I/A, Dhaka-1208. Bangladesh
                            <br />
                            Email : sumit@gmail.com
                        </p>
                        <h5 className='footer-menu-title'>SOCIAL LINK</h5>
                        <a href=''><i className='fab m-1 h4 fa-facebook'></i></a>
                        <a href=''><i className='fab m-1 h4 fa-twitter'></i></a>
                        <a href=''><i className='fab m-1 h4 fa-instagram'></i></a>
                        <a href=''><i className='fab m-1 h4 fa-whatsapp'></i></a>
                    </Col>
                    {/* <Col className='p-2' xl="3" lg="3" md="3" sm="6" xs="12">
                        <h5 className='footer-menu-title'>THE COMPANY</h5>
                        <Link to="/" className='footer-link'> About Us</Link><br />
                        <Link to="/" className='footer-link'> Company Profile</Link><br />
                        <Link to="/" className='footer-link'> Contact Us</Link>
                    </Col>
                    <Col className='p-2' xl="3" lg="3" md="3" sm="6" xs="12">
                        <h5 className='footer-menu-title'>MORE INFO</h5>
                        <Link to="/" className='footer-link'> How to purchase ?</Link><br />
                        <Link to="/" className='footer-link'> Privacy Policy</Link><br />
                        <Link to="/" className='footer-link'> Refund policy</Link>
                    </Col> */}
                    <Col className='p-2' xl="3" lg="3" md="3" sm="6" xs="12">
                        <h5 className='footer-menu-title'>DOWNLOAD APPS</h5>
                        <a href=''><img src={Apple} alt="" /></a>
                        <a href=''style={{marginLeft:'10px'}}><img src={Google} alt="" /></a>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='bg-dark'>
                        <Row className='text-center'>
                        <h6 className='text-light p-2'>Copyright © {this.state.date} Mutasim Naib. All right reserved</h6>
                        </Row>
            </Container>
        </div>
      </Fragment>
    )
  }
}

export default FooterMobile
