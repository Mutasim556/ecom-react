import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import Product1 from './../../assets/images/product1.png'
import Product2 from './../../assets/images/product2.png'
import Product3 from './../../assets/images/product3.png'
import Product4 from './../../assets/images/product4.png'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom'
import parse from 'html-react-parser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import appURL from '../api/appURL'
import { Navigate, redirect } from 'react-router-dom'
export class ProductDetailsPage extends Component {
     constructor(props){
          super()
          
          this.state = {
               image : '0',
               ProductColor : '',
               productSize : '',
               productQuantity : '',
               pageRefresh : false,
          }

          
     }
     
    
     
     imgOnClick=(x)=>{
          let imgSrc = x.target.getAttribute('src');
          this.setState({
               image : imgSrc,
          })
     }
     formValidate(){
          if(!localStorage.getItem('token')){
               toast.error('You have to login first')
          }else{
               if(this.state.ProductColor==''){
                    toast.error('Please select color')

               }else if(this.state.productSize==''){
                    toast.error('Please select size')
               }
               else if(this.state.productQuantity==''){
                    toast.error('Please select quantity')
               }else if(this.state.productQuantity<1){
                    toast.error('Product quantity must be gteater than 0')
               }else{
                    return true
               }
          }
          
     }

     addCart = (e) =>{
          e.preventDefault();
          if(this.formValidate()){
               axios.post(appURL.BaseURL+"/add-to-cart",{
                    id : this.props.userD.id,
                    category_id : this.props.productDetails.product_category_id,
                    sub_category_id : this.props.productDetails.product_sub_category_id,
                    product_id : this.props.productDetails.product_id,
                    product_color : this.state.ProductColor,
                    product_size : this.state.productSize,
                    product_quantity : this.state.productQuantity,
               }).then((res)=>{
                    sessionStorage.setItem('ref',1);
                    document.getElementById('addCart').reset();
                    
                    window.location.reload();
                    
               }).catch((err)=>{
                    toast.error('Something went wrong');
               })

               
          }
     }
     PageRefresh =() => {
          if(this.state.pageRefresh===true){
               let URL = window.location;
               return (
                    <Navigate  to={URL} />
               )
          }
     }
  render() {
     if(sessionStorage.getItem('ref')){
          toast.success('Successfully added to cart')
          sessionStorage.removeItem('ref');
     }
     let reviews = this.props.reviews.map((Review,idx)=>{
          let star="";
          let i;
          for(i=1;i<=5;i++){
               if(i<=Review.review_stars){
                    star = star + '<i className="fa fa-star"></i>';
               }else{
                    star = star + '<i class="fa-regular fa-star text-danger"></i>';
               }
               
          }
          console.log(star);
          return <div>
               <p className=" p-0 m-0"><span className="Review-Title">{Review.name}</span> <span className="text-success ml-4"> {parse(star)} </span> </p>
          <p>{Review.review_comment}</p>
          </div>
     })
    return (
      <div>
        <Fragment>
               <Container fluid className="BetweenTwoSection">
                   <Row className="p-2">
<Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
     <Row>
          <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
          {/* <img className="w-100" id='previewImage' src={Product1} /> */}
          <div className='detailimage'>
          <InnerImageZoom className="detailimage" id='previewImage' zoomType='hover' zoomScale="1.8" src={this.state.image==='0'?this.props.productDetails.product_image
          :this.state.image} zoomSrc={this.state.image==='0'?this.props.productDetails.product_image:this.state.image} />
          </div>
          
          <Container  className="my-3">
               <Row>
                    <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                         <img className="w-100" src={Product1} onClick={this.imgOnClick}/>
                         
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img className="w-100" src={Product2} onClick={this.imgOnClick}/>
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img className="w-100" src={Product3} onClick={this.imgOnClick}/>
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img className="w-100" src={Product4} onClick={this.imgOnClick}/>
                    </Col>
               </Row>
          </Container>
          </Col>
          <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
          <h5 className="Product-Name">{this.props.productDetails.product_name}</h5>
          <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive Collectio</h6>
          <div className="input-group">
               <div className="Product-price-card d-inline ">Reguler Price {this.props.productDetails.product_price}</div>
               <div className="Product-price-card d-inline ">{this.props.productDetails.product_discount}% Discount</div>
               <div className="Product-price-card d-inline ">New Price {this.props.productDetails.product_discount_price}</div>
          </div>
          <form onSubmit={this.addCart} id='addCart'>
          <h6 className="mt-2">Choose Color</h6>
          <div className="input-group">
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Black" onChange={(e)=>{this.setState({ProductColor:e.target.value})}}/>
                    <label className="form-check-label" htmlFor="exampleRadios1" >Black</label>
               </div>
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Green" onChange={(e)=>{this.setState({ProductColor:e.target.value})}}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">Green</label>
               </div>
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Red" onChange={(e)=>{this.setState({ProductColor:e.target.value})}}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">Red</label>
               </div>
          </div>

          <h6 className="mt-2">Choose Size</h6>
          <div className="input-group">
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1" value="X" onChange={(e)=>{this.setState({productSize:e.target.value})}}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">X</label>
               </div>
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1" value="XL" onChange={(e)=>{this.setState({productSize:e.target.value})}}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">XL</label>
               </div>
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1" value="XXL" onChange={(e)=>{this.setState({productSize:e.target.value})}}/>
                    <label className="form-check-label" htmlFor="exampleRadios1">XXL</label>
               </div>
          </div>

          <h6 className="mt-2">Quantity</h6>
          <input  className="form-control text-center w-50" type="number" onChange={(e)=>{this.setState({productQuantity:e.target.value})}}/>

          <div className="input-group mt-3">
               <button className="btn site-btn m-1 " type='submit'> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
               <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
               <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
          </div>
          </form>
          </Col>
     </Row>

     <Row>
          <Col className="" md={6} lg={6} sm={12} xs={12}>
          <h6 className="mt-2">DETAILS</h6>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
          </Col>

          <Col className="" md={6} lg={6} sm={12} xs={12}>
          <h6 className="mt-2">REVIEWS</h6>
          {reviews}

          </Col>
     </Row>

</Col>
                   </Row>
               </Container>
               {/* <ToastContainer
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="colored"
               /> */}
                    {this.PageRefresh()}
               </Fragment>
      </div>
    )
  }
}

export default ProductDetailsPage
