import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Navbar,Container, Row, Col, Button } from 'react-bootstrap'
import Logo from './../../assets/images/easyshop.png'
import { Link } from 'react-router-dom'
import MegaMenuMobile from '../home/MegaMenuMobile'
import NavLogo from './../../assets/images/menu (2).png'
import appURL from '../api/appURL'
export class NavMenuDesktop extends Component {
    constructor(props){
        super(props)
        this.state ={
            sideBar : "sideNavClose",
            overLay : "ContentOverlayClose",
            allCategories : [],
            allSubCategories : [],
        }


    }

    SideNavBarHandler = () =>{
        this.openClose();
    }

    OverlayBarHandler = () =>{
        this.openClose();
    }

    openClose = () =>{
        if(this.state.sideBar==='sideNavClose'){
            this.setState({
                sideBar : "sideNavOpen",
                overLay : "ContentOverlayOpen",
            });
        }else{
            this.setState({
                sideBar : "sideNavClose",
                overLay : "ContentOverlayClose",
            });
        }
    }

    
  render() {
    
    return (
      <Fragment>
        <div className='topSectionDown'>
        <Navbar className='navbar' fixed='top' bg="light">
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 bg-white">
                <Row>
                    <Col xl="4" lg="4" md="12" sm="12">
                        {/* <Button onClick={this.SideNavBarHandler} type='button' className='btn'>
                            <i className='fa fa-bars'></i>
                        </Button> */}
                        <img onClick={this.SideNavBarHandler} className='nav-logo-bar' src={NavLogo} alt="" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/"><img className='nav-logo' src={Logo} alt="" /></Link>
                    </Col>
                    <Col xl="4" lg="4" md="12" sm="12">
                        <div className='input-group w-100'>
                            <input type="text" className='form-control'/>
                            <Button type='button' className='btn btn-site'>
                                    <i className='fa fa-search'></i>
                            </Button>
                        </div>
                    </Col>
                    <Col  xl="4" lg="4" md="12" sm="12">
                        <div className='float-right'>
                        <Link to="/favourite" className='btn'><i style={{ fontSize:'24px' }} className='fa fa-solid fa-heart fa-beat-fade'></i><sup><span className='badge bg-danger text-white'>3</span></sup></Link>
                        <Link to="/notifications" className='btn'><i style={{ fontSize:'24px' }} className='fa fa-bell fa-shake'></i><sup><span className='badge bg-danger text-white'>6</span></sup></Link>
                        <Link to="/" className='btn'><i style={{ fontSize:'24px' }} className='fa fa-mobile'></i><sup><span className='badge bg-danger text-white'>9</span></sup></Link>
                        <Link to="/login" className='btn'>LOGIN</Link>
                        <Link to="/register" className='btn'>REGISTER</Link>
                        <Link  to="/cart" className='cart-btn text-decoration-none text-white'>
                            <i className='fa fa-shopping-cart'></i>&nbsp; 3 Products
                        </Link>
                        {/* <Link  to="/cart" className='cart-btn text-decoration-none text-white'>
                            <i className='fa fa-shopping-cart'></i>&nbsp; {this.state.visit_date} Items
                        </Link> */}
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </Navbar>
            <div className={this.state.sideBar}>
                <MegaMenuMobile/>
            </div>
            <div onClick={this.OverlayBarHandler} className={this.state.overLay}>

            </div>
        </div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
