import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaRegBell, FaRegEnvelope } from 'react-icons/fa'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


const Notification = () => {
  const [selectedTime, setSelectedTime] = useState("2 hours");
  const [emailNotification, setEmailNotification] = useState(true);
  const [missedAlert, setmissedAlert] = useState(true);
  const [reminderTime, setReminderTime] = useState('20:00'); // 8:00 PM

  const timeOptions = ['1 hour', '2 hours', '3 hours', '4 hours', '6 hours'];


  return (
    <Container className='px-4'>
      <Row>
        <Col md={12}>
          <Card className='p-5 mx-5'>
            <h4><FaRegBell className='text-primary mb-1' /> Notification Preferences</h4>
            <h5>Email Notifications</h5>
            <div className='form-check form-switch p-0 d-flex flex-row justify-content-between align-items-center'>
              <p className='text-muted'>Receive medication alerts via email</p>
              <input type='checkbox' className='form-check-input' checked={emailNotification} onChange={() => setEmailNotification(!emailNotification)} />
            </div>
            {emailNotification &&
              <div>
                <h5>Email Address</h5>
                <input type='text' value='caretaker@example.com' className='w-100 p-2' />
              </div>
            }
            <hr />
            <h5>Missed Medication Alert</h5>
            <div className='form-check form-switch d-flex flex-row justify-content-between align-items-center p-0'>
              <p className='text-muted'>Get notified when medication is not taken on time</p>
              <input type='checkbox' className='form-check-input' checked={missedAlert} onChange={() => setmissedAlert(!missedAlert)} />
            </div>
            {missedAlert &&
              <div >
                <div className='input-group'>
                  <h5 className='mb-3'>Alert me if medication isn't taken within</h5>
                  <select className='form-select dropdown-toggle d-flex justify-content-between align-items-center w-100 p-2' value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <h5 className='my-3'>Daily reminder time</h5>
                  <TimePicker onChange={setReminderTime} value={reminderTime} clearIcon={null} disableClock={false} />
                  <p className='fs-6 text-muted mt-2'>Time to check if today's medication was taken</p>
                </div>
              </div>
            }
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className='p-5 mx-5'>
            <h5><FaRegEnvelope className='text-success mb-1' /> Email Preview</h5>
            <p className='fw-bold'>Subject: Medication Alert - Eleanor Thompson</p>
            <div className='text-muted text-small'>
              <p>Hello,</p>
              <p>This is a reminder that Eleanor Thompson has not taken her medication today.</p>
              <p>Please check with her to ensure she takes her prescribed medication.</p>
              <p>Current adherence rate: 85% (5-day streak)</p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Notification
