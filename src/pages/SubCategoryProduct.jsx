import React, { Component,Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import axios from 'axios'
import appURL from '../components/api/appURL'
import SubCategoryProductPage from '../components/product/SubCategoryProductPage'
export class SubCategoryProduct extends Component {
  constructor(props){
    super(props)
    const queryParameters =window.location.href;
    const pieces = queryParameters.split(/[\s/]+/)
    const last = pieces[pieces.length - 1]
    this.state = {
      subCategoryId : last,
      subCategoryDetails:[],
      products : []
    }
    
  }
  componentDidMount(){
      axios.get(appURL.BaseURL+'/all-sub-category-products/'+this.state.subCategoryId)
      .then((res)=>{
        this.setState({
          products : res.data.products,
          subCategoryDetails : res.data.subcategory,
        })
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
        <SubCategoryProductPage products={this.state.products} subcategory={this.state.subCategoryDetails}/>
        
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

export default SubCategoryProduct
