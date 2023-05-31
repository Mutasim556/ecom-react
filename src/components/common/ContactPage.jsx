import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button,Alert } from 'react-bootstrap'
import appURL from '../api/appURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class ContactPage extends Component {
  constructor(){
    super();
    this.state ={
      name : '',
      email : '',
      message : '',
      show : false,
    }
  }
  formValidation = () =>{
    if(this.state.name===''){
      alert('Faka')
    }else if(this.state.email===''){
      alert('Faka')
    }else if(this.state.message===''){
      alert('Faka')
    }else{
      return true;
    }
  }
  submitForm = (e)=>{
    e.preventDefault();
    if(this.formValidation()){
        var formData = new FormData();
        var btndata = document.getElementById('submitBtn');
        var onboardForm = document.getElementById('onboardForm');
        btndata.innerHTML='Sending........';
        formData.append("name",this.state.name);
        formData.append("email",this.state.email);
        formData.append("message",this.state.message);
        axios.post(appURL.BaseURL+'/contact',{
          name : this.state.name,
          email : this.state.email,
          message : this.state.message
        }).then((res)=>{
          // this.setState({
          //   insert : 'successfull'
          // });
          toast('🦄 Message Send Successfully');
          btndata.innerHTML='Send';
          onboardForm.reset();
        }).catch((err)=>{

        })
    }
  }
  render() {
    var noti = () =>{
      if(this.state.insert){
        return(
          <Alert variant="success" onClose={(e) =>{this.setState({show:false,insert:''})} } dismissible>
          <Alert.Heading>Your message send successfully</Alert.Heading>
           
          </Alert>
        );
      }
    }
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className='text-center'>
                  <Col className='d-flex justify-content-center' xl="6" lg="6" md="6" sm="12" xs="12">
                      <Form onSubmit={this.submitForm} className='onboardForm' id='onboardForm'>
                          <h3  className='section-title-login'>Contact with us</h3>
                          {noti()}
                          <input type="text" className='form-control m-2' placeholder='Enter your name' onChange={(e)=>{this.setState({name:e.target.value})}}/>
                          <input type="text" className='form-control m-2' placeholder='Enter your email' onChange={(e)=>{this.setState({email:e.target.value})}}/>
                          <textarea rows="7" className='form-control m-2' placeholder='Enter your message' onChange={(e)=>{this.setState({message:e.target.value})}}/>
                          <Button type='submit' id='submitBtn' className='btn btn primary m-2 site-btn-login'>Send</Button>
                      </Form>
                  </Col>
                  <Col className='p-2 m-0 Desktop'  xl="6" lg="6" md="6" sm="12" xs="12">
                        <p className='section-title-contact'>40 Shahid Tajuddin Ahmed Sarani Tejgaon I/A, Dhaka-1208. Bangladesh</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.409876939597!2d90.39759997425936!3d23.76841448808652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ed0e685155%3A0x73e075f3f32483bf!2sIncepta%20Pharma%20Gymnesium!5e0!3m2!1sbn!2sbd!4v1685375952528!5m2!1sbn!2sbd" width="100%" height="260" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      </Fragment>
    )
  }
}

export default ContactPage
