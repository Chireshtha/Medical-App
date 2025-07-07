import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FaCalendar, FaCamera, FaCheckCircle, FaClock, FaImage } from 'react-icons/fa'
import '../styles/PatientMed.css'
import 'react-calendar/dist/Calendar.css' 
import {Calendar} from 'react-calendar'

const PatientMed = () => {
 const [date, setDate] = useState(new Date())

 const handleFileChange = (e) => {
  const file = e.target.files[0];
  if(file){
    console.log('File Selected:', file.name);
  }
 }
  return (
    <Container className='p-4'>
        <Row>
            <Col md={8} >
            <Card className='p-4'>
            <div className='d-flex flex-row'>
            <FaCalendar size={30} className='text-primary mx-2'/>
            <h4 className=''>Today's Medication</h4>
            </div>
            <Card className='d-flex flex-row mt-3'>
                <h5 className='d-flex text-primary fw-bold justify-content-center mt-4 align-items-center h-50 number-list mx-2'> 1 </h5>
                <div className='flex-column mx-2 w-100'>
                    <p className='fw-semibold mt-2'>Daily Medication Set</p>
                    <p className='fw-semibold text-muted'>Complete set of daily tablets</p>
                </div>
                <div className='w-100 d-flex justify-content-end align-items-center'> 
                <p className='mx-5 mt-3'><FaClock size={20} className='mx-2' />
                8.00 am</p>
                </div>
            </Card>
            <Row>
              <Col md={12}>
              <Card className='d-flex flex-column justify-content-center align-items-center p-4 mt-3 '>
                <FaImage size={60}/>
                <p >Add Proof Photo (Optional)</p>
                <span className='text-muted'>Take a photo of your medication or pill organizer as confirmation</span>
                <Card className='my-5 p-3' onClick={()=>document.getElementById('fileUpload').click()}>
                <p className='mx-auto my-auto fw-semibold'><FaCamera size={23} /> Take Photo</p>
                 </Card>
                 <input id='fileUpload' type='file' accept='image/*' style={{display:'none'}} onChange={handleFileChange}/>
                <Button className='w-100 bg-success fw-bold'><FaCheckCircle size={24} className='mx-2'/>Mark as Taken</Button>
              </Card> 
              </Col>
            </Row>
            </Card>
            </Col>
        
            <Col md={4}>
            <Card className='d-flex justify-content-center align-items-center'>
              <h4 className='text-center mt-5'>Medication Calendar</h4>
              <Calendar className='my-4' onChange={setDate} value={date} />
              <ul className='d-flex flex-column w-100'>
                <li className='list-1 my-3'>🟢 Medication taken</li>
                <li className='list-2'>🔴 Missed medication</li>
                <li className='list-3 my-3'>🔵 Today</li>
              </ul>
            </Card>
            </Col>
        </Row>
      
    </Container>
  )
}

export default PatientMed
