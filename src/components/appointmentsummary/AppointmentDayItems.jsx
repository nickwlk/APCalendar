import React from 'react';

class AppointmentDayItems extends React.Component{

    render(){
        
        let todayAppointments;
        let selDay = this.props.selectedDay;    
        let onDayCellClick   = this.props.EditSelected;
        
        if ( this.props.appointmentList.length>0)
        {
            //filter the appointmentList to be displayed by the selected day
            let filteredItems = this.props.appointmentList.map( function(appt){
                    if( selDay === appt.selectedDay){
                        return appt;
                    }
                });
            //if there are appointmentList for selected day then sort them by appointment time
            if(typeof filteredItems[0] !== 'undefined'){
                //sort the days appointmentList
                filteredItems.sort((a, b) => (a.seconds > b.seconds) ? 1 : -1)
                //create the html table to display the apointments in 
                todayAppointments = <div className="appointmentSummary"><table ><thead><tr><th>Subject</th><th>Text</th><th>Time</th><th>Date</th></tr>
                </thead>
                <tbody>                   
                
                { 
                    filteredItems.map( function(appt){             
                    if( selDay=== appt.selectedDay){
                            return <tr className="summaryTableItem" key={appt.time}><td>{appt.subject}</td><td>{appt.text}</td>
                            <td>{appt.time}</td><td>{appt.date}</td><td > <button onClick={() => onDayCellClick(appt)} className="selectToEdit">Select</button></td></tr>
                        }else{
                            
                        }
                    
                    })         
                }
                </tbody>
                </table>              
                </div>
            }            
        }
        return(
            
           <div> {todayAppointments} </div>
        )
    }
}
export default AppointmentDayItems;