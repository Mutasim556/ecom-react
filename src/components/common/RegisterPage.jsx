import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import LoginImage from './../../assets/images/login.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import appURL from '../api/appURL'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
export class RegisterPage extends Component {
  constructor(){
    super()
    this.state = {
      name : '',
      invalidName : '',
      invalidNameClass : '',
      email : '',
      invalidEmail : '',
      invalidEmailClass : '',
      password : '',
      passwordLength : '',
      invalidPassword:'',
      invalidPasswordClass:'',
      rpassword : '',
      rpasswordLength : '',
      rinvalidPassword:'',
      rinvalidPasswordClass:'',
      loginStatus : false,
    }
  }
  loginValidate(){
    let flag = 0;
    if(this.state.name==''){
      this.setState({
        invalidName : 'Name Required',
        invalidNameClass : 'is-invalid',
      });
      flag = 1;
    }else{
      if(!(/^[a-zA-Z ]{2,30}$/).test(this.state.name)){
        this.setState({
          invalidName : 'Invalid Name',
          invalidNameClass : 'is-invalid',
        });
        flag = 1;
      }else{
        this.setState({
          invalidName : '',
          invalidNameClass : '',
        });
        flag = 0;
      }
    }
    if(this.state.email==''){
      this.setState({
        invalidEmail : 'Email Required',
        invalidEmailClass : 'is-invalid',
      });
      flag = 1;
    }else{
      if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(this.state.email)){
        this.setState({
          invalidEmail : 'Invalid Email Address',
          invalidEmailClass : 'is-invalid',
        });
        flag = 1;
      }else{
        this.setState({
          invalidEmail : '',
          invalidEmailClass : '',
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
  LoginHandler = (e) =>{
    e.preventDefault();
    if(this.loginValidate()){
      axios.post(appURL.BaseURL+"/register",{
        name : this.state.name,
        email : this.state.email,
        password : this.state.password,
        password_again : this.state.rpassword,
      })
      .then((res)=>{
        this.setState({
          invalidEmail : '',
        });
        toast.success('User registration successfully completed');
      })
      .catch((err)=>{
        this.setState({
          invalidEmail : err.response.data.errors.email[0],
        });
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
                      <Form className='onboardForm' onSubmit={this.LoginHandler}>
                          <h3  className='section-title-login text-center'>Sign UP</h3>
                          <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>User Name</h6>
                          <input type="text" className={"form-control m-2 "+this.state.invalidNameClass} onChange={(e)=>{this.setState({name:e.target.value})}} placeholder='Enter your name'/>
                          <span className='text-danger m-2 '>{this.state.invalidName}</span>


                          <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>User Email</h6>
                          <input type="text" className={"form-control m-2 "+this.state.invalidEmailClass} onChange={(e)=>{this.setState({email:e.target.value})}} placeholder='Enter your email'/>
                          <span className='text-danger m-2'>{this.state.invalidEmail}</span>


                          <h6 className='section-sub-title mt-2' style={{marginLeft:'8px',fontWeight:'1000'}}>User Password</h6>
                          <input type="password" className={"form-control m-2 "+this.state.invalidPasswordClass} onChange={(e)=>{this.setState({password:e.target.value})}} placeholder='Enter your password'/>
                          <span className='text-danger m-2'>{this.state.invalidPassword}</span>


                          <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>Confirm Password</h6>
                          <input type="password" className={"form-control m-2 "+this.state.rinvalidPasswordClass} onChange={(e)=>{this.setState({rpassword:e.target.value})}} placeholder='Re-type your password'/>
                          <span className='text-danger m-2'>{this.state.rinvalidPassword}</span>


                          <Button className='btn btn primary m-0 mt-4 site-btn-login' type='submit'>CREATE</Button><br /><br /><br />
                          <hr />
                          <div className='text-center'>
                          Forget your password ? <Link to={"/forget-password"}>Reset password</Link><br /><br />
                          Already have an account ? <Link to={"/login"}>Login</Link>
                          </div>
                      </Form>
                      
                  </Col>
                  <Col className='p-0 m-0 Desktop'  xl="6" lg="6" md="6" sm="12" xs="12">
                    <img className='onboardBanner' src={LoginImage} alt="" />
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

export default RegisterPage
