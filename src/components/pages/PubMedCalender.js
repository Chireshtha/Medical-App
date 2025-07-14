import React, { useContext } from 'react'
import 'react-calendar/dist/Calendar.css'
import { Calendar } from 'react-calendar'
import '../styles/PatientMed.css'
import { dashboardContext } from '../../App'
 

const PubMedCalender = () => {
    const { date, setDate, markedDate, isSameDay } = useContext(dashboardContext);

    //Handle Calender Tile marking
    const tileMarking = ({ date: calendarDate, view }) => {
        if (view !== 'month')
            return '';
        const today = new Date();

        //Marked as taken
        if (markedDate.some((marked) => isSameDay(marked, calendarDate))) {
            return 'taken-med';
        }

        //Today
        if (isSameDay(calendarDate, today)) {
            return 'today-med';
        }

        //Missed as taken
        if (calendarDate < today) {
            return 'missed-med';
        }
        return ''; //Future dates no marking
    }

    return (
        <div>
            <Calendar className='my-4 text-dark' onChange={setDate} value={date} tileClassName={tileMarking} />
            <ul className='d-flex flex-column w-100'>
                <li className='list-1 my-3'>🟢 Medication taken</li>
                <li className='list-2'>🔴 Missed medication</li>
                <li className='list-3 my-3'>🔵 Today</li>
            </ul>
        </div>
    )
}

export default PubMedCalender
