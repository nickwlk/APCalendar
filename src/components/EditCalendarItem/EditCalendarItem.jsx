import CalendarItem from '../calendaritem/CalendarItem'
import React from "react"
import './EditCalendarItem.css'


class EditCalendarItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {selectedAppointment:this.props.selectedAppointment};
        this.buttonClickCancel = this.buttonClickCancel.bind(this);
        this.buttonClickDelete = this.buttonClickDelete.bind(this);
        this.buttonClickSave = this.buttonClickSave.bind(this);
    }

    buttonClickSave(){
        //call update callback to update parent appointment item state
    }

    buttonClickDelete(){
        //call update callback to update parent appointment item state

    }

    buttonClickCancel(){
        //do nothing, close the window
        this.props.shouldClose();
        
    }


render(){

    if (this.props.isOpen===false)    
    return null
    
    let btnDelete = <button className="ActionButton" onClick={this.buttonClickDelete}>Delete</button>
    let btnSave = <button className="ActionButton" onClick={this.buttonClickSave}>Save</button>
    let btnCancel = <button className="ActionButton" onClick={this.buttonClickCancel.bind(this)} >Cancel</button>
    let selappt =this.props.selectedAppointment;

    return(
    <div className="editCalendarItem ">                   
    <span>Update entry</span> 
        <CalendarItem selectedAppointment = {selappt} />
        {btnSave}
        {btnDelete}
        {btnCancel}
    </div>
    );
}

}
export default EditCalendarItem;