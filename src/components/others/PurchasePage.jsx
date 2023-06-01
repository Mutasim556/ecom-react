import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import parse from 'html-react-parser'
import axios from 'axios';
import appURL from '../api/appURL';
import Loader from './../../assets/images/loader.gif'
import Error from './../../assets/images/error.webp'
export class PurchasePage extends Component {
  constructor(){
    super()
    this.state={
      purchase : "",
    }
  }
  componentDidMount(){
    window.scroll(0,0);

    let sessionItem = sessionStorage.getItem("purchasePage");
    if(sessionItem==null){
      var loader = document.getElementById('loader');
      var error = document.getElementById('error');
      loader.style.display="block";
      axios.get(appURL.BaseURL+"/company-info")
      .then((res)=>{
        loader.style.display="none";
        this.setState({
          purchase : res.data.info.purchase_guide
        });
        sessionStorage.setItem("purchasePage",res.data.info.purchase_guide)
      })
      .catch((err)=>{
        loader.style.display="none";
        error.style.display="block";
      })
    }else{
      this.setState({
        purchase : sessionItem
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
                  <Col className='' xl="12" lg="12" md="12" sm="12" xs="12"><h3  className='section-title-login'>How to purchase ?</h3></Col>
                  <div class="ph-item" id='loader' style={{ display:"none" }}>
                      <div class="ph-col-12">
                          {/* <div class="ph-picture"></div> */}
                          <div class="ph-row">
                              <div class="ph-col-12"></div>
                              <div class="ph-col-12 empty "></div>
                              <div class="ph-col-2 big"></div>
                              <div class="ph-col-4"></div>
                              <div class="ph-col-8 empty"></div>
                              <div class="ph-col-6"></div>
                              <div class="ph-col-6 empty"></div>
                              <div class="ph-col-12"></div>
                          </div>
                      </div>
                  </div>
                  <Col className='d-flex justify-content-center' xl="12" lg="12" md="12" sm="12" xs="12">
                            
                            <p className='section-sub-title-purchase'>{parse(this.state.purchase)}</p>
                            {/* <img src={Loader} alt="" id='loader' style={{ display:"none" }}/><br /> */}
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

export default PurchasePage