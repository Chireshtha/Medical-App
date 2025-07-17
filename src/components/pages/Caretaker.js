import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Navigationbar from '../layout/Navigationbar'
import { FaUsers } from 'react-icons/fa'
import CareInfo from './CareInfo'
import '../styles/Patient.css'
import { dashboardContext } from '../../App'

const Caretaker = () => {
    const {markedDate} = useContext(dashboardContext);
 
    const now = new Date();
    const takenThisMonth = markedDate.filter(date=>
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    ).length;
 
      const daysPassedThisMonth = now.getDate();
      const adherenceRate = Math.round((takenThisMonth/daysPassedThisMonth)*100);
       
      const getCurrentStreak = () =>{
        const today = new Date();
        let streak = 0;
        for(let i = 0; i < markedDate.length; i++){
          const checkDate = new Date();
          checkDate.setDate(today.getDate() - i);

          const isTaken = markedDate.some(d => 
            d.getDate() === checkDate.getDate() && 
            d.getMonth() === checkDate.getMonth() &&
            d.getFullYear() === checkDate.getFullYear()
          );
          if(isTaken){
            streak++;
          }
          else{
            break;
          }
        }
        return streak;
      }

      const missedThisMonth = daysPassedThisMonth - takenThisMonth;
      const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
      }
      const daysInCurrentMonth = getDaysInMonth(now.getFullYear(), now.getMonth());
      const remainingDays = daysInCurrentMonth - daysPassedThisMonth;

      const getTakenThisWeek = () => {
        const today = new Date();
        const weeksAgo = new Date();
        weeksAgo.setDate(today.getDate()-6);

        const takenThisWeek = markedDate.filter(date => 
        date >= weeksAgo &&
        date <= today
      ).length;
      return takenThisWeek;
      }

  return (
    <Container fluid className='p-0 patient-container'>
      <Navigationbar />
      <Container fluid>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col md={9} className='mt-5 p-2'>
            <Card className='p-5 welcome-card'>
              <div className='d-flex flex-row text-light'>
                <FaUsers className='fs-2 user-styles text-light' />
                <div className='d-flex flex-column mx-3'>
                  <h2 className='fw-bold'>Caretaker Dashboard</h2>
                  <p className='fs-5'>Monitoring Eleanor Thompson's medication adherence</p>
                </div>
              </div>
              <Row>
                <Col md={3} >
                  <Card className='px-3 py-1 cards-style fs-6'>
                    <p className='fw-bold'>{adherenceRate}%</p>
                    <p>Adherence Rate</p>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className='px-3 py-1 cards-style fs-6'>
                    <p className='fw-bold fs-5'>{getCurrentStreak()}</p>
                    <p>Current Streak</p>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className='px-3 py-1 cards-style fs-6'>
                    <p className='fw-bold'>{missedThisMonth}</p>
                    <p>Missed This Month</p>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className='px-3 py-1 cards-style fs-6'>
                    <p className='fw-bold'>{getTakenThisWeek()}</p>
                    <p>Taken This Week</p>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        
      </Container>

      <CareInfo medInfo = {{missedThisMonth, remainingDays, takenThisMonth, adherenceRate}}/>
    </Container>
  )
}

export default Caretaker
