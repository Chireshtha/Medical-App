import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import CaretakerMed from './CaretakerMed';
import Activity from './Activity'
import Calender from './Calender'
import Notification from './Notification';


const CareInfo = () => {
    const [activeTab, setActiveTab] = useState('overview');
     return (
        <Container>
            <Row className='p-4 d-flex justify-content-center align-items-center text-center'>
                <Col md={2}  className='w-25 '>
                    <Card className={`card pt-3 ${activeTab === 'overview' ? 'active-tab' : ''}`} onClick={() => { setActiveTab('overview') }}  >
                        <p  >Overview</p>
                    </Card>
                </Col>
                <Col md={2} className='w-25'>
                    <Card className={`card pt-3 ${activeTab === 'activity' ? 'active-tab' : ''}`} onClick={() => { setActiveTab('activity') }}>
                        <p>Recent Activity</p>
                    </Card>
                </Col>
                <Col md={2} className='w-25'>
                    <Card className={`card pt-3 ${activeTab === 'calender' ? 'active-tab' : ''}`} onClick={() => { setActiveTab('calender') }}>
                        <p>Calender View</p>
                    </Card>
                </Col>
                <Col md={2} className='w-25'>
                    <Card className={`card pt-3 ${activeTab === 'notification' ? 'active-tab' : ''}`} onClick={() => { setActiveTab('notification') }}>
                        <p>Notification</p>
                    </Card>
                </Col>
            </Row>
            <div>
                {activeTab === 'overview' && <CaretakerMed />}
                {activeTab === 'activity' && <Activity />}
                {activeTab === 'calender' && <Calender />}
                {activeTab === 'notification' && <Notification />}
            </div>
        </Container>
    )
}

export default CareInfo
