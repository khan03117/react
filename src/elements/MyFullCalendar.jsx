import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import multiMonthPlugin from '@fullcalendar/multimonth'
import React from 'react'

function MyFullCalendar(props) {
    
    const events = [

        { title: '₹ 200', date: '2023-06-03', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1220', date: '2023-06-04', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1320', date: '2023-06-05', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1420', date: '2023-06-06', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1220', date: '2023-06-07', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1120', date: '2023-06-08', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1520', date: '2023-06-09', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1920', date: '2023-06-10', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1220', date: '2023-06-11', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
        { title: '₹ 1120', date: '2023-06-12', backgroundColor: 'transparent', textColor: '#000', borderColor: 'transparent' },
    ];
  
    return (
        
        <>
            
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
                initialView={'multiMonthFourMonth'}
                validRange={{
                    start: new Date(),
                    end: '2024-02-01'
                }}
                views={
                    {
                        multiMonthFourMonth: {
                            type: 'multiMonth',
                            duration: { months: 2 }
                        }
                    }

                }
                
                selectable={true}
                dateClick={(e) => props.handleDateClick(e)}
                events={events}
                weekends={true}
                buttonIcons={
                    {
                        prev: 'chevron-left',
                        next: 'chevron-right',
                    }
                }
            />
        </>
    )
}

export default MyFullCalendar