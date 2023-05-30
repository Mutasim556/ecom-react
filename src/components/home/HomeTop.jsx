import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MegaMenu from './MegaMenu'
import HomeSlider from './HomeSlider'

export class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className='p-0 m-0 oveflow-hiidden' fluid>
            <Row>
                <Col lg="3" md="3" sm="12" >
                <MegaMenu/>
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
