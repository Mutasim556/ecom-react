import React, { Component, Fragment } from 'react'
import { Navbar,Container, Row, Col, Button } from 'react-bootstrap'
import Logo from './../../assets/images/easyshop.png'
import { Link } from 'react-router-dom'
import MegaMenuMobile from '../home/MegaMenuMobile'
import NavLogo from './../../assets/images/menu (2).png'
export class NavMenuMobile extends Component {
    constructor(){
        super()
        this.state ={
            sideBar : "sideNavClose",
            overLay : "ContentOverlayClose",
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
            <Container fluid={"true"} className="fixed-top shadow-sm p-2 bg-white">
                <Row>
                    <Col xl="4" lg="4" md="12" sm="12">
                        {/* <Button onClick={this.SideNavBarHandler} type='button' className='btn'>
                            <i className='fa fa-bars'></i>
                        </Button> */}
                        <img onClick={this.SideNavBarHandler} className='nav-logo-bar' src={NavLogo} alt="" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/"><img className='nav-logo ml-44' src={Logo} alt="" /></Link>
                        <Button type='button' className='cart-btn'>
                            <i className='fa fa-shopping-cart'></i>&nbsp; 3 Items
                        </Button>
                    </Col>
                </Row>
            </Container>
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

export default NavMenuMobile
