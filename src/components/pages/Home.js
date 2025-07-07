import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import health from '../Images/health.jpeg'
import '../styles/Home.css'
import { FaUser, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <Container fluid className='home-container d-flex flex-column justify-content-center align-items-center'>
      <Row>
        <Col md={12} className='d-flex flex-column justify-content-center align-items-center py-4'>
          <img src={health} alt='healthy heart' className='fluid img-style' />
          <h1 className='text-center fw-bold py-4'>Welcome to MediCare Companion</h1>
          <p className='lead fw-semibold text-secondary w-75 text-center'>Your trusted partner in medication management. Choose your role to get started with personalized features.
          </p>
        </Col>
      </Row>

      <Container fluid className='home-container d-flex flex-column justify-content-center align-items-center'>
        <Row className='d-flex flex-row justify-content-center align-items-center'>
          <Col md={5} >
            <Card fluid className='p-4 px-5 patient-card'>
              <div className='d-flex flex-column justify-content-center align-items-center'><FaUser className='fauser-style ' />
                <h4 className='py-3 text-primary'>I'm a Patient</h4>
                <p className='text-muted'>Track your medication schedule and maintain your health records</p>
              </div>
              <ol className='list-group list-group-numbered patient-content pb-3'>
                <li className='list-group-item text-primary'>Mark medications as taken</li>
                <li className='list-group-item text-primary'>Upload proof photos (optional)</li>
                <li className='list-group-item text-primary'>View your medication calendar</li>
                <li className='list-group-item text-primary'>Large, easy-to-use interface</li>
              </ol>
              <Button className='bg-primary fw-bold' as={Link} to="/patient">Continue as Patient</Button>
            </Card>
          </Col>
          <Col md={5}>
              <Card fluid className='p-4 px-5 caretaker-card'>
                <div className='d-flex flex-column justify-content-center align-items-center'><FaUsers className='fausers-style' />
                  <h4 className='py-3 text-success'>I'm a Caretaker</h4>
                  <p className='text-muted'>Monitor and support your loved one's medication adherence</p>
                </div>
                <ol className='list-group list-group-numbered caretaker-content pb-3'>
                  <li className='list-group-item text-success'>Monitor medication compliance</li>
                  <li className='list-group-item text-success'>Set up notification preferences</li>
                  <li className='list-group-item text-success'>View detailed reports</li>
                  <li className='list-group-item text-success'>Receive email alerts</li>
                </ol>
                <Button className='bg-success fw-bold' as={Link} to="/caretaker">Continue as Caretaker</Button>
              </Card>
          </Col>
        </Row>
        <Row className='text-muted pt-5'>
          <span className='pb-2'>You can switch between roles anytime after setup</span>
        </Row>
      </Container>
    </Container>
  )
}

export default Home
