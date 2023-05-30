import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import ProductDetailsPage from '../components/product_details/ProductDetailsPage'
import SuggestedProductPage from '../components/product_details/SuggestedProductPage'
export class ProductDetails extends Component {
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
        <ProductDetailsPage/>
        <SuggestedProductPage/>
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

export default ProductDetails
