import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Navigationbar from '../layout/Navigationbar'
import { FaUsers } from 'react-icons/fa'
import CareInfo from './CareInfo'
import '../styles/Patient.css'

const Caretaker = () => {
  return (
    <Container fluid className='p-0 patient-container'>
      <Navigationbar />
      <Container fluid >
        <Row className='d-flex justify-content-center align-items-center'>
          <Col md={9} className='mt-5 py-2'>
            <Card className='p-5 welcome-card'>
              <div className='d-flex flex-row text-light'>
                <FaUsers className='fs-2 user-styles text-light' />
                <div className='d-flex flex-column mx-3'>
                  <h2 className='fw-bold'>Caretaker Dashboard</h2>
                  <p className='fs-5'>Monitoring Eleanor Thompson's medication adherence</p>
                </div>
              </div>
              <Row>
                <Col md={3} >
                  <Card className='p-3 cards-style'>
                    <p className='fw-bold'>{85}%</p>
                    <p>Adherence Rate</p>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className='p-3 cards-style'>
                    <p className='fw-bold fs-5'>5</p>
                    <p>Current Streak</p>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className='p-3 cards-style'>
                    <p className='fw-bold'>{3}</p>
                    <p>Missed This Month</p>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className='p-3 cards-style'>
                    <p className='fw-bold'>{4}</p>
                    <p>Taken This Week</p>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        
      </Container>

      <CareInfo />
    </Container>
  )
}

export default Caretaker
