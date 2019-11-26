import React from "react";
import "./Calendar.css";
import NewCalendarItem from "../newitem/NewItem";
import AppointmentSummary from "../appointmentsummary/AppointmentSummary";
import dateFnsFormat  from "date-fns/format";
import dateFnsSOW from "date-fns/startOfWeek";
import dateFnsEOW from "date-fns/endOfWeek";
import dateFnsAdddays from "date-fns/addDays";
import dateFnsSOM from "date-fns/startOfMonth";
import dateFnsEOM from "date-fns/endOfMonth";


class Calendar extends React.Component{
    constructor(){
        super();
    this.state = {
        appointmentSummaryList:[],
        appointmentCount:0,
        currentMonth: new Date(),    
        selectedDay: 'Select a date...'
      };
      
      this.SelectDayClick = this.SelectDayClick.bind(this);
      this.updateAppointmentList = this.updateAppointmentList.bind(this);
    }
    
    //update the list of appointments
    updateAppointmentList(appointmentItem){
        
        //Todo: check the appointment time, if duplicate warn the user and change the way the key is built for the days appointment list from the appointment time.
        let appointmentItems = this.state.appointmentSummaryList;
        appointmentItem.id =this.state.appointmentCount.length+1;
        appointmentItems.push(appointmentItem);
        this.setState({appointmentSummaryList:appointmentItems,appointmentCount:appointmentItem.id});
    }

      SelectDayClick(day){
          
          //Set the selected day          
          this.setState({selectedDay:day});
      }

    renderHeader(){
        const dateFormat = "MMMM yyyy";

        return(
            <div><span>{dateFnsFormat(this.state.currentMonth, dateFormat)}</span></div>
        ); 
    }

    renderDays(){
        const dateFormat = "EEEE";
        const days = [];
        let startDate = dateFnsSOW(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
              <div className="col" key={i}>
                {dateFnsFormat(dateFnsAdddays(startDate, i), dateFormat)}
              </div>
            );
          }

        return(
            <div className="days row">{days}</div>
        );
    }

    renderMonthDays(){

        const { currentMonth } = this.state; //retrive the current month and selected date from the state
        const monthStart = dateFnsSOM(currentMonth); //need to know SOM
        const monthEnd = dateFnsEOM(currentMonth); // and EOM
        const startDate = dateFnsSOW(monthStart); 
        const endDate = dateFnsEOW(monthEnd);
        const dateFormat ="d"; //display single digit day number
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate ="";
        
        //loop through the days in the month 
        while(day<=endDate){
          
            for(let iday = 0;iday<7;iday++){
                formattedDate = dateFnsFormat(day,dateFormat);
                //apply same formatting as the day columns
                let newDayHTML =<div className="col monthDays" key = {iday} id={iday}> 
                <span onClick={this.SelectDayClick.bind(this,formattedDate)} className="smallDayNumber">{formattedDate}</span>
                </div>;
                days.push(newDayHTML);
                day = dateFnsAdddays(day,1);
            }
              //add the colection of days to the row
        rows.push(<div className="row" key={day}>
            {days}
            </div>);
            days = [];
        }
        return <div className="body">{rows}</div>;

    }

    render(){
        return(
            <div >
                {this.renderHeader()}
                <div>{this.renderDays()}</div>
                <div>{this.renderMonthDays()}</div>
                <div className="calendarControls calendarInputControls">                    
                    <NewCalendarItem updateAppt={this.updateAppointmentList} key={this.state.selectedDay}/>
                </div>
                <AppointmentSummary key={this.state.selectedDay} className="summaryAppointments" selectedDay={this.state.selectedDay} appointments={this.state.appointmentSummaryList}/>
               
            </div>
        );
    }
}
export default Calendar;