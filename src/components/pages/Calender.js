import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import PubMedCalender from './PubMedCalender'
import { FaCalendar, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';
import { dashboardContext } from '../../App';


const Calender = () => {
  const { markedDate, isSameDay, date } = useContext(dashboardContext);
  const today = new Date();

  const getSelectedDateStatus = () => {
    if (isSameDay(date, today)) {
      return markedDate.some(d => isSameDay(d, today))
        ? {
          title: 'Today',
          icon: <FaClock className='text-primary mt-1 mx-2'/>,
          message: 'Eleanor Thompson has taken medication today.'
        }
        : {
          title: 'Today',
          icon: <FaClock className='text-primary mt-1 mx-2 fs-5
          '/>,
          message: 'Monitor Eleanor Thompsons medication status for today'
        };
    }
    if (date < today) {
      return markedDate.some(d => isSameDay(d, date))
        ? {
          title: date.toDateString(),
          icon: <FaCheckCircle className='text-success mt-1 mx-2'/>,
          message: `Medication was taken on ${date.toDateString()}.`
        }
        : {
          title: date.toDateString(),
          icon: <FaExclamationTriangle className='text-danger mt-1 mx-2'/>,
          message: `Medication Missed.\nEleanor Thompson did not take their medication on this day.`
        }
    }
    return{
      title:date.toDateString(),
      icon: <FaCalendar className='text-primary mt-1 mx-2'/>,
      message:`Future date selected. No data available.`
    }
  }
  const {title, icon, message} = getSelectedDateStatus();
    return (
      <Container className='px-4'>
        <Card className='p-5 mx-5' >
          <Row>
            <Col md={4}>
              <h4 className='text-center mt-5'>Medication Calendar Overview</h4>
              <PubMedCalender date={date} markedDate={markedDate} isSameDay={isSameDay} />
            </Col>
            <Col md={8} className='d-flex flex-column justify-content-start align-items-center mt-5 pt-2'>
              <p className='mb-4 fw-bold'>Details for {title}</p>
              <Card className='d-flex flex-column p-1' style={{ backgroundColor: '#EFF6FF' }}>
                <div className='d-flex flex-row p-1'>{icon}
                  <p className='fs-6'>{title}</p>
                </div>
                <p className='mx-3'>{message}</p>
              </Card>
            </Col>
          </Row>
        </Card>

      </Container>
    )
  }

  export default Calender
