import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import UserLogin from '../components/common/UserLogin'
import { Navigate } from 'react-router-dom'
export class Login extends Component {
  constructor(props){
    super()
  }
  componentDidMount(){
    window.scroll(0,0);
  }
  render() {
    if(localStorage.getItem('token')){
      return <Navigate to={"/user-profile"} />
    }
    const setUser = this.props.setUser;
    return (
      <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop/>
        </div>
        <div className='Mobile'>
           <NavMenuMobile/>
        </div>
        <UserLogin setUser={setUser}/>
        
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

export default Login
