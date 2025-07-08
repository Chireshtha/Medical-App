import React, { useContext } from 'react'
import Navigationbar from '../layout/Navigationbar'
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../styles/Patient.css'
import { FaUser } from 'react-icons/fa'
import PatientMed from './PatientMed'
import { dashboardContext } from '../../App'

const Patient = () => {
    const {markedDate, setMarkedDate} = useContext(dashboardContext);
  
  return (
    <Container fluid className='p-0 patient-container'>
      <Navigationbar />
      <Container fluid >
        <Row className='d-flex justify-content-center align-items-center'>
          <Col md={9} className='mt-5 p-2'>
            <Card className='p-5 welcome-card'>
              <div className='bp-2 d-flex flex-row text-light'>
                <FaUser className='fs-2 user-styles text-light' />
                <div className='d-flex flex-column mx-3'>
                <h2 className='fw-bold'>Good Morning!</h2>
                <p className='fs-5'>Ready to stay on track with your medication?</p>
                </div>
              </div>
              <Row>
                <Col md={4} >
                  <Card className='p-3 cards-style'>
                    <p className='fw-bold'>{0}</p>
                    <p>Day Streak</p>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='p-3 cards-style'>
                    <p className='fw-bold fs-5'>○</p>
                    <p>Today's Status</p>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className='p-3 cards-style'>
                    <p className='fw-bold'>{0}%</p>
                    <p>Monthly Rate</p>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <PatientMed />
    </Container>
  )
}

export default Patient
