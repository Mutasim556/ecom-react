import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import RegisterPage from '../components/common/RegisterPage'
import { Navigate } from 'react-router-dom'
export class Register extends Component {
    componentDidMount(){
        window.scroll(0,0);
      }
  render() {
    if(localStorage.getItem('token')){
      return <Navigate to={"/user-profile"} />
    }
    return (
      <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop/>
        </div>
        <div className='Mobile'>
           <NavMenuMobile/>
        </div>
        <RegisterPage/>
        
        <div className='Desktop'>
          <FooterDesktop/>
        </div>
        <div className='Mobile'>
          <FooterMobile/>
        </div>
        
      </Fragment>
    )
  }
}

export default Register
