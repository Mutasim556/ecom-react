import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import appURL from '../api/appURL';
import parse from 'html-react-parser';
export class AboutUsPage extends Component {
    constructor(){
        super();
        this.state={
            about : "",
        }
    }
    componentDidMount(){
        window.scroll(0,0);
        axios.get(appURL.BaseURL+'/company-info')
        .then((res)=>{
            this.setState({
                about:res.data.info.about,
            });
        })
        .catch(()=>{

        });
    }

    

  render() {
    return (
      <div>
        <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className=''>
                  <Col className='d-flex justify-content-center' xl="12" lg="12" md="12" sm="12" xs="12">
                      <Form className='onboardForm'>
                            <h3  className='section-title-login'>About Us</h3>
                            <p className='section-sub-title-purchase'>{parse(this.state.about)}</p>
                      </Form>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
      </div>
    )
  }
}

export default AboutUsPage
