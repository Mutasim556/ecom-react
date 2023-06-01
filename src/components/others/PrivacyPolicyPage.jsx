import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import parse from 'html-react-parser'
import axios from 'axios';
import appURL from '../api/appURL';
import Loader from './../../assets/images/loader.gif'
import Error from './../../assets/images/error.webp'
export class PrivacyPolicyPage extends Component {
  constructor(){
    super()
    this.state={
      privacy : "",
    }
  }
  componentDidMount(){
    window.scroll(0,0);

    let sessionItem = sessionStorage.getItem("privacyPolicy");
    if(sessionItem==null){
      var loader = document.getElementById('loader');
      var error = document.getElementById('error');
      loader.style.display="block";
      axios.get(appURL.BaseURL+"/company-info")
      .then((res)=>{
        loader.style.display="none";
        this.setState({
          privacy : res.data.info.privacy
        });
        sessionStorage.setItem("privacyPolicy",res.data.info.privacy)
      })
      .catch((err)=>{
        loader.style.display="none";
        error.style.display="block";
      })
    }else{
      this.setState({
        privacy : sessionItem
      });
    }
    
  }
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className='p-4'>
                  <Col className='' xl="12" lg="12" md="12" sm="12" xs="12"><h3  className='section-title-login'>Privacy & Policy</h3></Col>
                  <Col className='d-flex justify-content-center' xl="12" lg="12" md="12" sm="12" xs="12">
                            
                            <p className='section-sub-title-purchase'>{parse(this.state.privacy)}</p>
                            <img src={Loader} alt="" id='loader' style={{ display:"none" }}/><br />
                            <img src={Error} alt="" id='error' height="200px" style={{ display:"none" }}/><br />
                           
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PrivacyPolicyPage