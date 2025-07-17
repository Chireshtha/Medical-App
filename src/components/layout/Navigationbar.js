import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../styles/Navigationbar.css'
import { FaUsers } from 'react-icons/fa'
import { dashboardContext } from '../../App'
import { useNavigate } from 'react-router-dom'



const Navigationbar = () => {
  const { medicare, setMedicare } = useContext(dashboardContext);
  const navigate = useNavigate();
  const { handleLogout } = useContext(dashboardContext);


  const isPatient = medicare === '/patient';

  const handleSwitch = () => {
    const newRoute = isPatient ? '/caretaker' : '/patient';
    setMedicare(newRoute);
    navigate(newRoute)
  }


  return (
    <Container fluid className='p-0 navbar-container d-flex flex-column  bg-light'>
      <Row  >
        <Col md={1} className='p-0 d-flex justify-content-center'>
          <div className='my-3'>
            <h3 className='logo-design text-light'>M</h3>
          </div>
        </Col>
        <Col md={6} className='d-flex flex-column justify-content-center align-items-left text-dark'>
          <h5>MediCare Companion</h5>
          <span className='fs-5'> {isPatient ? 'Patient View' : 'Caretaker View'} </span>
        </Col>
        <Col md={3} className='caretaker-contents d-flex justify-content-end align-items-center'>
          <Button className='bg-light text-dark fw-bold' onClick={handleSwitch}><FaUsers size={20} /> {isPatient ? 'Switch to Caretaker' : 'Switch to Patient'} </Button>
        </Col>
        <Col md={2} className='d-flex justify-content-center align-items-center'>
          <button onClick={handleLogout} className='bg-primary text-light px-4 py-2 rounded-3 border-0'>Signout</button>
        </Col>
      </Row>
    </Container>
  )
}

export default Navigationbar
