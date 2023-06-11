import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import ForgetImage from './../../assets/images/forget.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import appURL from '../api/appURL'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class ResetPasswordPage extends Component {
constructor(){
  super()
  this.state={
    pin : "",
    pinError : "",
    pinErrorClass : "",
    email : "",
    emailError : "",
    emailErrorClass : "",
    password : '',
    passwordLength : '',
    invalidPassword:'',
    invalidPasswordClass:'',
    rpassword : '',
    rpasswordLength : '',
    rinvalidPassword:'',
    rinvalidPasswordClass:'',
    success : "no",
  }
}
formValidation(){
  let flag =0;
  if(this.state.pin==''){
    this.setState({
      pinError : 'PIN Required',
      pinErrorClass : 'is-invalid',
    });
    flag = 1;
  }else{
    if(this.state.pin.length<6){
      this.setState({
        pinError : 'PIN Must be 6 digits',
        pinErrorClass : 'is-invalid',
      });
      flag = 1;
    }else{
      this.setState({
        pinError : '',
        pinErrorClass : '',
      });
      flag = 0;
    }
  }
  if(this.state.email==''){
    this.setState({
      emailError : 'Email Required',
      emailErrorClass : 'is-invalid',
    });
    flag = 1;
  }else{
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email)){
      this.setState({
        emailError : 'Invalid Email Address',
        emailErrorClass : 'is-invalid',
      });
      flag = 1;
    }else{
      this.setState({
        emailError : '',
        emailErrorClass : '',
      });
      flag = 0;
    }
  }
  if(this.state.password==''){
    this.setState({
      invalidPassword : 'Password Required',
      invalidPasswordClass : 'is-invalid',
    });
    flag = 1;
  }else{
    if(this.state.password.length<6){
      this.setState({
        invalidPassword : 'Password must be at least 6 digit',
        invalidPasswordClass : 'is-invalid',
      });
      flag = 1;
    }else{
      this.setState({
        invalidPassword : '',
        invalidPasswordClass : '',
      });
      flag = 0
    }
  }
  if(this.state.rpassword==''){
    this.setState({
      rinvalidPassword : 'Confirm Password Required',
      rinvalidPasswordClass : 'is-invalid',
    });
    flag = 1;
  }else{
    if(this.state.rpassword!=this.state.password){
      this.setState({
        rinvalidPassword : 'Password does not match',
        rinvalidPasswordClass : 'is-invalid',
      });
      flag = 1;
    }else{
      this.setState({
        rinvalidPassword : '',
        rinvalidPasswordClass : '',
      });
      flag = 0
    }
  }
  if(flag==0){
    return true;
  }
}
resetPassword = (e) =>{
  e.preventDefault();
  if(this.formValidation()){
    var onboardForm = document.getElementById('onboardForm');
    axios.post(appURL.BaseURL+"/reset-password",{
      email : this.state.email,
      password : this.state.password,
      password_again : this.state.rpassword,
      token : this.state.pin,
    }).then((res)=>{
      this.setState({
        success:"yes"
      })
      toast.success("Password changed successful");
      onboardForm.reset();
    }).catch((err)=>{
      toast.error(err.response.data.message);
      // this.setState({
      //   emailError : err.response.data.message,
      //   invalidPassword : err.response.data.message,
      //   rinvalidPassword : err.response.data.message,
      //   pin : err.response.data.message,
      // });
    })
  }
  // if(this.state.success=="yes"){
  //   toast.success("Password changed successful");
  // }
}
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className=''>
                  <Col className='d-flex justify-content-center' xl="6" lg="6" md="6" sm="12" xs="12">
                  <Form className="onboardForm" onSubmit={this.resetPassword} id='onboardForm'>
                    <h4 className="section-title-login"> RESET PASSWORD </h4>
                    <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>Pin Code</h6>
                    <input className={"form-control m-2 "+this.state.pinErrorClass} type="text" placeholder="Enter Your Pin Code" onChange={(e)=>{this.setState({pin:e.target.value})}}/>
                    &nbsp;&nbsp;<span className='text-danger my-2'>{this.state.pinError}</span>


                    <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>User Email</h6>
                    <input className={"form-control m-2 "+this.state.emailErrorClass} type="email" placeholder="Enter Your Email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    &nbsp;&nbsp;<span className='text-danger my-2'>{this.state.emailError}</span>


                    <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>New Password</h6>
                    <input className={"form-control m-2 "+this.state.invalidPasswordClass} type="password" placeholder="Your New Password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    &nbsp;&nbsp;<span className='text-danger my-2'>{this.state.invalidPassword}</span>


                    <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>Confirm Password</h6>
                    <input className={"form-control m-2 "+this.state.rinvalidPasswordClass} type="password" placeholder="Confirm Your Password" onChange={(e)=>{this.setState({rpassword:e.target.value})}}/>
                    &nbsp;&nbsp;<span className='text-danger my-2'>{this.state.rinvalidPassword}</span>


                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Reset Password </Button> 

                  </Form>
                      
                  </Col>
                  <Col className='p-0 m-0 Desktop'  xl="6" lg="6" md="6" sm="12" xs="12">
                    <img className='onboardBanner' src={ForgetImage} alt="" />
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

export default ResetPasswordPage
