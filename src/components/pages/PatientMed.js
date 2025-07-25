import React, { useContext, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FaCalendar, FaCamera, FaCheckCircle, FaClock, FaImage } from 'react-icons/fa'
import '../styles/PatientMed.css'
import { dashboardContext } from '../../App'
import PubMedCalender from './PubMedCalender'
import dayjs from 'dayjs'

const PatientMed = () => {
  const [takenMed, setTakenMed] = useState(false)
  const { date, setMarkedDate, isSameDay } = useContext(dashboardContext);

  //File handling
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('File Selected:', file.name);
    }
  }


  return (
    <Container className='px-5 py-3'>
      <Row className='d-flex- justify-content-center align-items-center'>
        <Col md={7} >
          {!takenMed ? (
            <Card className='p-4'>
              <div className='d-flex flex-row'>
                <FaCalendar size={30} className='text-primary mx-2' />
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
                    <FaImage size={60} />
                    <p >Add Proof Photo (Optional)</p>
                    <span className='text-muted'>Take a photo of your medication or pill organizer as confirmation</span>
                    <Card className='my-5 p-3' onClick={() => document.getElementById('fileUpload').click()}>
                      <p className='mx-auto my-auto fw-semibold'><FaCamera size={23} /> Take Photo</p>
                    </Card>
                    <input id='fileUpload' type='file' accept='image/*' style={{ display: 'none' }} onChange={handleFileChange} />

                    <Button className='w-100 bg-success fw-bold' disabled={!isSameDay(date, new Date())} onClick={() => {
                      setTakenMed(true); setMarkedDate((prev) => [...prev, new Date(date)])
                      const today = dayjs(date).format('dddd, MMMM D');
                      const existing = JSON.parse(localStorage.getItem('medicationActivity')) || [];

                      const filtered = existing.filter(entry => entry.date !== today);
                      const activity = {
                        date: today,
                        time: dayjs().format('h:mm A'),
                        hasPhoto: false,
                        status: 'Completed'
                      };


                      const updated = [activity, ...filtered];
                      localStorage.setItem('medicationActivity', JSON.stringify(updated));
                    }}><FaCheckCircle size={24} className='mx-2' />{isSameDay(date, new Date()) ? 'Mark as Taken' : 'Cannot mark future dates'}  </Button>
                  </Card>
                </Col>
              </Row>
            </Card>
          ) : (
            <Card className='p-5 mb-5 d-flex flex-column '>
              <div className='d-flex mb-3 flex-row'></div>
              <Card className='p-5 border-success'>
                <div className='text-center text-success'>
                  <FaCheckCircle size={60} />
                  <h4>Medication Completed!</h4>
                  <p>Great job! You've taken your medication for July 7, 2025.</p>
                </div>
              </Card>
              <Card className='p-4 my-4 text-success d-flex flex-row justify-content-start align-items-center border-success'>
                <FaCheckCircle size={60} />
                <div className='d-flex flex-column mx-4 w-100'>
                  <h5>Daily Medication Set</h5>
                  <p>Complete set of daily tablets</p>
                </div>
                <div className='w-100 text-secondary d-flex justify-content-end align-items-center'>
                  <p className='mx-5 mt-3'><FaClock size={20} className='mx-2' />
                    8.00 am</p>
                </div>
              </Card>
            </Card>
          )}
        </Col>

        <Col md={4}>
          <Card className='d-flex justify-content-center align-items-center'>
            <h4 className='text-center mt-5'>Medication Calendar</h4>
            <PubMedCalender />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PatientMed
