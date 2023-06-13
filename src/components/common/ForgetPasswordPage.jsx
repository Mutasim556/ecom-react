import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import ForgetImage from './../../assets/images/forget.jpg'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appURL from '../api/appURL'

export class ForgetPasswordPage extends Component {
  constructor(){
    super()
    this.state = {
      email : "",
      emailError : "",
      emailErrorClass : "",
      resetEmail :false,
      time:"",
      
    }
  }
  componentDidMount(){
    window.scroll(0,0);
  }
  formValidation(){
    let flag = 0;
    if(this.state.email==''){
      this.setState({
        emailError : "Email required",
        emailErrorClass : "is-invalid",
      })
      flag =1 ;
    }else{
      if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email)){
        this.setState({
          emailError : "Invalid email",
          emailErrorClass : "is-invalid",
        })
        flag =1 ;
      }else{
        this.setState({
          emailError : "",
          emailErrorClass : "",
        })
        flag =0 ;
      }
    }
    if(flag==0){
      return true
    }
  }
  forgetPasswordForm = (e) =>{
    e.preventDefault();
    if(this.formValidation()){
      let submit_button = document.getElementById('submit_button');
      submit_button.classList.add("disabled");
      submit_button.innerHTML="Processing......."
      axios.post(appURL.BaseURL+'/forgot-password',{
        email : this.state.email
      }).then((res)=>{
        submit_button.classList.remove("disabled");
        submit_button.innerHTML="Reset Password"
        toast.success(res.data.message);
      }).catch((err)=>{
        submit_button.classList.remove("disabled");
        submit_button.innerHTML="Reset Password"
        this.setState({
          emailError : err.response.data.errors.email[0]
        })
      })
    }
  }
  render() {
    
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className=''>
                  <Col className='d-flex justify-content-center' xl="6" lg="6" md="6" sm="12" xs="12">
                      <Form className='onboardForm' onSubmit={this.forgetPasswordForm}>
                          <h3  className='section-title-login text-center'>Forget Password</h3>
                          <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>User Email</h6>
                          <input type="text" className={"form-control m-2 "+this.state.emailErrorClass} placeholder='Enter your email' onChange={(e)=>{this.setState({email : e.target.value})}}/>
                           &nbsp;&nbsp;<span className='text-danger my-2'>{this.state.emailError}</span>
                           
                          <Button type='submit' className='btn btn primary m-2 mt-4 site-btn-login' id='submit_button'> Reset Password</Button><br />
                          <p className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>
                            
                          </p><br /><br />
                          {/* <hr />
                          <div className='text-center'>
                          Forget your password ? <Link>Reset password</Link><br /><br />
                          Already have an account ? <Link to={"/login"}>Login</Link>
                          </div> */}
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

export default ForgetPasswordPage
