import React, { Component, Fragment } from 'react'
import FeatureProduct from '../components/home/FeatureProduct'
import Collection from '../components/home/Collection'
import NewArraival from '../components/home/NewArraival'
import Categories from '../components/home/Categories'
import HomeTop from '../components/home/HomeTop'
import HomeTopMobile from '../components/home/HomeTopMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'

export class HomePage extends Component {
  constructor(props){
    super(props)
    this.state ={
      ip_address : '',
      visit_date : '',
      visit_time : '',
    }
  }
  componentDidMount(){
    window.scroll(0,0);
    
  }

  
  render() {
    return (
      <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop />
          <HomeTop/>
        </div>
        <div className='Mobile'>
          <NavMenuMobile/>
          <HomeTopMobile/>
        </div>
        
        <FeatureProduct/>
        
        <Categories/>
        <NewArraival/>
        <Collection/>
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

export default HomePage
