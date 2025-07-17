import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaBell, FaCalendar, FaCalendarAlt, FaClock, FaEnvelope } from 'react-icons/fa'
import '../styles/CaretakerMed.css'
import { dashboardContext } from '../../App'

const CaretakerMed = ({ medInfo }) => {
    const { setActiveTab } = useContext(dashboardContext);
    const { missedThisMonth, remainingDays, takenThisMonth, adherenceRate } = medInfo;

    return (
        <Container className='px-4 '>
            <Row className='d-flex- justify-content-center align-items-center'>
                <Col md={5} >
                    <Card className='p-4'>
                        <div className='d-flex flex-row'>
                            <FaCalendar size={30} className='text-primary mx-2' />
                            <h4 className=''>Today's Status</h4>
                        </div>
                        <Card className='d-flex flex-row mt-3'>
                            <div className='d-flex flex-column p-3 w-100'>
                                <p className='fw-bold'>Daily Medication Set</p>
                                <p className='text-muted'><FaClock size={20} /> 8.00 am</p>
                            </div>
                            <p className='d-flex w-100 justify-content-end align-items-center mx-5 text-danger fw-bold'>Pending</p>
                        </Card>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card >
                        <h4 className='p-4'>Quick Actions</h4>
                        <div className='px-4 '>
                            <Row className='d-flex flex-column'>
                                <Col md={4} className='action-content1 w-50'>
                                    <p onClick={() => { alert("Reminder email sent to Eleanor Thompson") }}><FaEnvelope /> Send Reminder Email</p>
                                </Col>
                                <Col md={4} className='action-content2 w-50'>
                                    <p onClick={() => { setActiveTab('notification') }}><FaBell /> Configure Notifications</p>
                                </Col>
                                <Col md={4} className='action-content3 w-50'>
                                    <p onClick={() => { setActiveTab('calender') }}><FaCalendarAlt /> View Full Calendar</p>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row className='my-3 '>
                <Col md={12} className='d-flex justify-content-center align-items-center'>
                    <Card className='p-4 action-width1'>
                        <h4>Monthly Adherence Progress</h4>
                        <div className='d-flex flex-row justify-content-between'>
                            <p>Overall Progress</p>
                            <p >{adherenceRate}%</p></div>
                        <div className='progress' role='progressbar' aria-valuenow={adherenceRate} aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar' style={{ width: `${adherenceRate}%` }} ></div>
                        </div>
                        <div className='d-flex flex-row justify-content-between align-items-center'>
                            <p>{takenThisMonth} Taken</p>
                            <p>{missedThisMonth} Missed</p>
                            <p>{remainingDays} Remaining</p>
                        </div>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CaretakerMed
