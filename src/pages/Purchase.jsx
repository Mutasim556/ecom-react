import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import PurchasePage from '../components/others/PurchasePage'
export class Purchase extends Component {
    componentDidMount(){
        window.scroll(0,0);
      }
  render() {
    return (
      <Fragment>
        <div className='Desktop'>
          <NavMenuDesktop/>
        </div>
        <div className='Mobile'>
           <NavMenuMobile/>
        </div>
        <PurchasePage/>
        
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

export default Purchase
