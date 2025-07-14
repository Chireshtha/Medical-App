import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { FaCamera, FaCheckCircle } from 'react-icons/fa'
import '../styles/Activity.css'

const Activity = () => { 
  return (
    <Container className='px-4'>
      <Card className='p-5 mx-5' >
        <h4 className='text-center mb-4'>Recent Medication Activity</h4>
        <Card className='p-1'>
          <div className='d-flex flex-row '>
          <p className='d-flex align-items-center mx-3'> <FaCheckCircle size={27} className='text-success'/></p>
          <div className='d-flex flex-column w-100'>
            <p>Monday, June 10</p>
            <p>Taken at 8:30 AM</p>
          </div>
          <div className='d-flex w-100 flex-row justify-content-end align-items-center' >
            <p className='mx-2 border-style px-2 pb-1'><FaCamera className='mx-1'/>Photo</p>
            <p className='border-style1 px-3 pb-1'>Completed</p>
          </div>
        </div>
        </Card>
      </Card>
    </Container>
  )
}

export default Activity
