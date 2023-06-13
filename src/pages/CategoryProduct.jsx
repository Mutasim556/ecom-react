import React, { Component,Fragment } from 'react'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import CategoryProductPage from '../components/product/CategoryProductPage'
import axios from 'axios'
import appURL from '../components/api/appURL'
export class CategoryProduct extends Component {
  constructor(props){
    super(props)
    const queryParameters =window.location.href;
    const pieces = queryParameters.split(/[\s/]+/)
    const last = pieces[pieces.length - 1]
    this.state = {
      categoryId : last,
      categoryDetails:[],
      products : []
    }
    
  }
  componentDidMount(){
      axios.get(appURL.BaseURL+'/all-category-products/'+this.state.categoryId)
      .then((res)=>{
        this.setState({
          products : res.data.products,
          categoryDetails : res.data.category,
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
        <CategoryProductPage products={this.state.products} category={this.state.categoryDetails}/>
        
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

export default CategoryProduct
