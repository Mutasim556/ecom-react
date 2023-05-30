import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form, Button } from 'react-bootstrap'
import LoginImage from './../../assets/images/login.png'
export class PrivacyPolicyPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
      }
  render() {
    return (
      <Fragment>
        <Container>
          <Row className='mt-2'>
            <Col className='p-2 shadow-sm' xl="12" lg="12" md="12" xs="12" sm="12">
                <Row className=''>
                  <Col className='d-flex justify-content-center' xl="12" lg="12" md="12" sm="12" xs="12">
                      <Form className='onboardForm'>
                          <h3  className='section-title-login'>Our Privacy & Policy</h3>
                            <p>Your privacy is our first priority and that is why there must be transparency between us about how we accumulate and use the information that you provide with us. This is what the policies are intended 

                            <p className='section-sub-title-purchase'><br />01. What type of information do we fetch from you?</p>
                            As it is basically an advertising platform with the purpose of dealing, we must fetch some personal information that will be displayed on the site from your profile if you are intending to find Course. So, you have to give your consent to collect and process those sets of information with a view to getting the services. We gather the following types of information from you
                            While registering or purchasing course, you submit personal information such as your name, contact details etc.

                            <p className='section-sub-title-purchase'><br />02. How do we use the information after collecting?</p>
                            To provide the services <br />
                            To manage your account <br />
                            To provide customer support <br />
                            To recommend relevant prospects for you <br />
                            To recommend your profile to Our System <br />
                            To conduct research and analysis for the betterment of the service <br />
                            To communicate with you about promotions and offers of your interest

                            <p className='section-sub-title-purchase'><br />03. How do we secure your information?</p>
                            We implement appropriate safeguards specifically designed for protecting your information. Since no security system is impenetrable, we cannot guarantee that data on the way of getting transmitted to our server are absolutely safe from intrusion by intruders. But we can assure you that during the process of sharing your sensitive information such as the credit/debit card number, the information is encrypted and protected by the best encrypting software available in the industry. And only the employees, who need the information to perform their specific jobs are granted access to that information.</p>
                      </Form>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PrivacyPolicyPage