import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import LoginImage from './../../assets/images/login.png'
import { Link, redirect } from 'react-router-dom'
import axios from 'axios'
import appURL from '../api/appURL'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom'
export class UserLogin extends Component {
  constructor(props){
    super()
    this.state = {
      email : '',
      password : '',
      passwordLength : '',
      invalidEmail : '',
      invalidEmailClass : '',
      invalidPassword:'',
      invalidPasswordClass:'',
      loginStatus : false,
    }
  }
  loginValidate(){
    let flag = 0;
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

    if(flag==0){
      return true;
    }
  }
  LoginHandler = (e) =>{
    e.preventDefault();
    if(this.loginValidate()){
      axios.post(appURL.BaseURL+"/user-login",{
        email : this.state.email,
        password : this.state.password,
      })
      .then((res)=>{
        const queryParameters =res.data.token;
        const pieces = queryParameters.split(/[\s|]+/)
        const last = pieces[pieces.length - 1]
        localStorage.setItem('token',last);
        this.props.setUser(res.data.user)
        this.setState({
          loginStatus : true
        })
      })
      .catch((err)=>{
        this.setState({
          errMessage : err.response.data.message
        })
        toast.error('Invalid email or Password');
      })
    }
    
  }
  render() {
    if(this.state.loginStatus==true){
      return <Navigate  to="/user-profile" />
    }
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className=''>
                  <Col className='d-flex justify-content-center' xl="6" lg="6" md="6" sm="12" xs="12">
                      <Form className='onboardForm' onSubmit={this.LoginHandler}>
                          <h3  className='section-title-login text-center'>Sign In</h3>
                          <h6 className='section-sub-title' style={{marginLeft:'8px',fontWeight:'1000'}}>User Email</h6>
                          <input type="text" className={"form-control m-2 "+this.state.invalidEmailClass} placeholder='Enter your email' onChange={(e)=>{this.setState({email:e.target.value})}}/>
                          <span className='text-danger m-2'>{this.state.invalidEmail}</span>
                          <h6 className='section-sub-title mt-2' style={{marginLeft:'8px',fontWeight:'1000'}}>User Password </h6>
                          <input type="password" className={"form-control m-2 "+this.state.invalidPasswordClass} placeholder='Enter your password' onChange={(e)=>{this.setState({password:e.target.value})}}/>
                          &nbsp; <span className='text-danger mt-2'>{this.state.invalidPassword}</span>
                          <Button className='btn btn primary m-2 mt-4 site-btn-login' type='submit'>Login</Button> <br /><br /><br />

                          <hr />
                          <div className='text-center'>
                          Forget your password ? <Link to={"/forget-password"}>Reset password</Link><br /><br />
                          Dont have an account ? <Link to={"/register"}>Register</Link>
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

export default UserLogin
