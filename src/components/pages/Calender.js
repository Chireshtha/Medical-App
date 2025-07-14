import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import PubMedCalender from './PubMedCalender'
import { FaClock } from 'react-icons/fa';


const Calender = () => {
  const now = new Date();
  return (
    <Container className='px-4'>
      <Card className='p-5 mx-5' >
        <Row>
          <Col md={4}>
            <h4 className='text-center mt-5'>Medication Calendar Overview</h4>
            <PubMedCalender className='border-none' />
          </Col>
          <Col md={8} className='d-flex flex-column justify-content-start align-items-center mt-5 pt-2'>
            <p className='mb-4 fw-bold'>Details for {now.toDateString()}</p>
            <Card className='d-flex flex-column p-2' style={{ backgroundColor: '#EFF6FF' }}>
              <div className='d-flex flex-row p-2'><FaClock className='fs-5 text-primary mx-2 mt-1' />
                <p className='fs-6'>Today</p>
              </div>
              <p className='mx-3'>Monitor Eleanor Thompson's medication status for today.</p>
            </Card>
          </Col>
        </Row>
      </Card>

    </Container>
  )
}

export default Calender
