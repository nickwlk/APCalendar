import React from "react";
import AppointmentDayItems from './AppointmentDayItems';
import './AppointmentSummary.css';
import EditCalendarItem from "../EditCalendarItem/EditCalendarItem"


class AppointmentSummary extends React.Component{

 
    constructor(props){
        super(props)
        this.state={
            appointmentSummaryList:[] ,
            selectedAppointment:'',
            showEditCalendarItem:false
        }
        
        this.EditSelected = this.EditSelected.bind(this);
        
        
      }
      EditSelected(appointment){
          
          if (typeof appointment != undefined)
            this.setState({showEditCalendarItem:true,selectedAppointment:appointment});
      }

      saveNewCalendarItem(){
          var newItem={};
          newItem.id =this.state.appointmentSummaryList.length+1;
          newItem.selectedDay = 0;
          newItem.subject= "";
          newItem.text = "";
          newItem.time = "";
          newItem.date = "";
          this.state.appointmentSummaryList.push(newItem);
      }

      CloseEditItem(){
          this.setState({showEditCalendarItem:false})
      }

    render(){
       
        let todaySummary = <span>Found {this.props.appointments.length} appointments</span>; 
        
        return(
            <div>
                <span>{this.props.selectedDay}:{todaySummary}</span>
                <AppointmentDayItems appointmentList = {this.props.appointments} selectedDay ={this.props.selectedDay} EditSelected = {this.EditSelected}></AppointmentDayItems>
                <EditCalendarItem isOpen={this.state.showEditCalendarItem} shouldClose={this.CloseEditItem.bind(this)} selectedAppointment={this.state.selectedAppointment}></EditCalendarItem>
            </div>
        )
    }
}
export default AppointmentSummary;
