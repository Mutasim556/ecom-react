import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, json } from 'react-router-dom'
import Apple from './../../assets/images/apple.png'
import Google from './../../assets/images/google.png'
import axios from 'axios'
import appURL from '../api/appURL';
import parse from 'html-react-parser'
export class FooterDesktop extends Component {
    constructor(){
        super()
        var todaty = new Date();
        var day = todaty.getFullYear();
        this.state ={
            date : day,
            address : "",
            android_app_link : "",
            ios_app_link : "",
            facebook_link : "",
            twitter_link : "",
            instagram_link : "",
            copyright_text : "",
        }
    }
    componentDidMount(){
        window.scroll(0,0);
          axios.get(appURL.BaseURL+"/company-info")
          .then((res)=>{
            this.setState({
                address : res.data.info.address,
                android_app_link : res.data.info.android_app_link,
                ios_app_link : res.data.info.ios_app_link,
                facebook_link : res.data.info.facebook_link,
                twitter_link : res.data.info.twitter_link,
                instagram_link : res.data.info.instagram_link,
                copyright_text : res.data.info.copyright_text,
            });
          })
          .catch((err)=>{
          })
        
      }
  render() {
    return (
      <Fragment>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
            <Container >
                <Row className='px-0 my-5'>
                    <Col className='p-2' xl="3" lg="3" md="3" sm="6" xs="12">
                        <h5 className='footer-menu-title'>OFFICE ADDRESS</h5>
                        <p>{parse(this.state.address)}
                            <br />
                            Email : sumit@gmail.com
                        </p>
                        <h5 className='footer-menu-title'>SOCIAL LINK</h5>
                        <a href={this.state.facebook_link} target='__blank'><i className='fab m-1 h4 fa-facebook'></i></a>
                        <a href={this.state.twitter_link} target='__blank'><i className='fab m-1 h4 fa-twitter'></i></a>
                        <a href={this.state.instagram_link} target='__blank'><i className='fab m-1 h4 fa-instagram'></i></a>
                        <a href='' target='__blank'><i className='fab m-1 h4 fa-whatsapp'></i></a>
                    </Col>
                    <Col className='p-2' xl="3" lg="3" md="3" sm="6" xs="12">
                        <h5 className='footer-menu-title'>THE COMPANY</h5>
                        <Link to="/about-us" className='footer-link'> About Us</Link><br />
                        <Link to="/" className='footer-link'> Company Profile</Link><br />
                        <Link to="/contact-us" className='footer-link'> Contact Us</Link>
                    </Col>
                    <Col className='p-2' xl="3" lg="3" md="3" sm="6" xs="12">
                        <h5 className='footer-menu-title'>MORE INFO</h5>
                        <Link to="/how-to-purchase" className='footer-link'> How to purchase ?</Link><br />
                        <Link to="/privacy-policy" className='footer-link'> Privacy Policy</Link><br />
                        <Link to="/refund-policy" className='footer-link'> Refund Policy</Link>
                    </Col>
                    <Col className='p-2' xl="3" lg="3" md="3" sm="6" xs="12">
                        <h5 className='footer-menu-title'>DOWNLOAD APPS</h5>
                        <a href={this.state.ios_app_link} target='__blank'><img src={Apple} alt="" /></a>
                        <a href={this.state.android_app_link} target='__blank' ><img className='mt-2' src={Google} alt="" /></a>
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

export default FooterDesktop
