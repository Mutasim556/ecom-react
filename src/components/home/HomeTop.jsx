import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import HomeSlider from './HomeSlider'
import axios from 'axios'
import appURL from '../api/appURL'

export class HomeTop extends Component {
  constructor(props){
    super(props)
    this.state = {
      allCategories : [],
      allSubCategories : [],
    }
  }
  componentDidMount(){
    axios.get(appURL.BaseURL+'/get-sub-category')
    .then((res)=>{
      this.setState({
        allCategories : res.data.allCategories,
      });
    })
    .catch((err)=>{

    })
  }
  render() {
    return (
      <Fragment>
        <Container className='p-0 m-0 oveflow-hiidden' fluid>
            <Row>
                <Col lg="3" md="3" sm="12" >
                <MegaMenu data={this.state.allCategories} />
                {/* {console.log(this.state.allCategories[0])} */}
                </Col>
                <Col lg="9" md="9" sm="12" >
                <HomeSlider/>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HomeTop
