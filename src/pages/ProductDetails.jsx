import React, { Component, Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import ProductDetailsPage from '../components/product_details/ProductDetailsPage'
import SuggestedProductPage from '../components/product_details/SuggestedProductPage'
import axios from 'axios'
import appURL from '../components/api/appURL'
export class ProductDetails extends Component {
  constructor(){
    super()
    const queryParameters =window.location.href;
    const pieces = queryParameters.split(/[\s/]+/)
    const last = pieces[pieces.length - 1]
    this.state = {
      productId : last,
      productDetails : [],
      relatedProducts : [],
      reviews : [],
      reLoadThis : 0,
    }
  }

  componentDidMount(){
        
        window.scroll(0,0);
        axios.get(appURL.BaseURL+"/product-details/"+this.state.productId)
        .then((res)=>{
          this.setState({
            productDetails : res.data.product,
            relatedProducts : res.data.related,
            reviews : res.data.reviews,
            reLoadThis : 0,
          })
        })
        .catch((err)=>{
          alert('somethis. went worg with server');
        })
  }

  updateProductDetails = (productId) =>{
        axios.get(appURL.BaseURL+"/product-details/"+productId)
        .then((res)=>{
          this.setState({
            reLoadThis : 1,
            productDetails : res.data.product,
            relatedProducts : res.data.related,
            reviews : res.data.reviews,
          })
        })
        .catch((err)=>{
          alert('somethis. went worg with server');
        })
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
        <ProductDetailsPage productDetails={this.state.productDetails} reviews={this.state.reviews} userD={this.props.userD} reLoadThis={this.state.reLoadThis}/>
        <SuggestedProductPage relatedProducts={this.state.relatedProducts} funcDetails ={this.updateProductDetails}/>
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
