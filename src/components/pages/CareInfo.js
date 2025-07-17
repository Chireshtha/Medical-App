import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import CaretakerMed from './CaretakerMed';
import Activity from './Activity'
import Calender from './Calender'
import Notification from './Notification';
import '../styles/CaretakerMed.css'
import { dashboardContext } from '../../App';


const CareInfo = ({medInfo}) => {
     const {activeTab, setActiveTab} = useContext(dashboardContext)
     return (
        <Container>
            <Row className='py-3 d-flex justify-content-center align-items-center text-center'>
                <Col md={2}  className='action-width'>
                    <Card className={`card pt-3 ${activeTab === 'overview' ? 'active-tab' : ''}`} onClick={() => { setActiveTab('overview') }}  >
                        <p  >Overview</p>
                    </Card>
                </Col>
                <Col md={2} className='action-width'>
                    <Card className={`card pt-3 ${activeTab === 'activity' ? 'active-tab' : ''}`} onClick={() => { setActiveTab('activity') }}>
                        <p>Recent Activity</p>
                    </Card>
                </Col>
                <Col md={2} className='action-width'>
                    <Card className={`card pt-3 ${activeTab === 'calender' ? 'active-tab' : ''}`} onClick={() => { setActiveTab('calender') }}>
                        <p>Calender View</p>
                    </Card>
                </Col>
                <Col md={2} className='action-width'>
                    <Card className={`card pt-3 ${activeTab === 'notification' ? 'active-tab' : ''}`} onClick={() => { setActiveTab('notification') }}>
                        <p>Notification</p>
                    </Card>
                </Col>
            </Row>
            <div>
                {activeTab === 'overview' && <CaretakerMed medInfo={medInfo}/>}
                {activeTab === 'activity' && <Activity />}
                {activeTab === 'calender' && <Calender />}
                {activeTab === 'notification' && <Notification />}
            </div>
        </Container>
    )
}

export default CareInfo
