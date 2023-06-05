import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import axios from 'axios'
import appURL from '../api/appURL'
export class Categories extends Component {
  constructor(){
    super()
    this.state={
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
    let Catlist = this.state.allCategories.map((Catlist,idx)=>{
        return<Col className='p-0' key={idx.toString()} xl={2} lg={2} md={2} sm={6} xs={6}>
        <Card className='h-100 w-100 text-center'>
            <img className='center' src={Catlist.category_image} alt="" />
            <Card.Body>
            <h5 className='category-name'>{Catlist.category_name}</h5>
            </Card.Body>
        </Card>
    </Col>
    })
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
            <div className='section-title text-center mb-55'>
                <h2>CATEGORIES</h2>
                <p>Some of our categories , you may like</p>
            </div>
            <Row>
                <Col key={1} xl={12} lg={12} md={2} sm={12} xs={12} >
                    <Row>
                        {Catlist}
                    </Row>
                </Col>
                {/* <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                    <Row>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <img className='center' src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                                <Card.Body>
                                <h5 className='category-name'>Home</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <img className='center' src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
                                <Card.Body>
                                <h5 className='category-name'>Appliances</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <img className='center' src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
                                <Card.Body>
                                <h5 className='category-name'>Travel</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className='h-100 w-100 text-center'>
                                <img className='center' src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />
                                <Card.Body>
                                <h5 className='category-name'>Top Offers</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col> */}
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Categories
