import React from "react";

//Calendar item
class CalendarItem extends React.Component{

constructor(props){
    super(props);
    this.updateNewItemValue = this.updateNewItemValue.bind(this);
    this.state={
        subject:"",text:"",time:"",date:""
    };
}
componentDidUpdate(){
    
    if (this.state.subject.length>0 && this.state.text.length>0 && this.state.time.length>0 && this.state.date.length>0){
        this.props.updateComplete(this.state.subject,this.state.text,this.state.time,this.state.date);
    }

}

    updateNewItemValue(evt){
        
        switch(evt.target.id){
            case "NewItemSubject":
                    this.setState({subject:evt.target.value});       
                break;
            case "NewItemText":
                    this.setState({text:evt.target.value});
                    break;
            case "NewItemTime":
                    this.setState({time:evt.target.value});
                break;
            case "NewItemDate":
                    this.setState({date:evt.target.value});
                break;
            default:
                break;
        }
        
    }

render(){
   
    return(
        <div >
            <div className="col">
            <label >Subject:
                <div>
                <input className="newItemElement" onChange={this.updateNewItemValue} value={ this.props.selectedAppointment.subject} type="text" id="NewItemSubject"></input>         
                </div>
            </label>
            </div>
            <label> Notes:
            <div>
                
                <textarea className="newItemElement" onChange={this.updateNewItemValue} value={this.props.selectedAppointment.text} rows="5" id="NewItemText"></textarea>
            </div>
            </label>
            <div>
                <label htmlFor="NewItemTime">Time:
                <div><input className="newItemElement" onChange={this.updateNewItemValue} value={this.props.selectedAppointment.time} type="time" id ="NewItemTime"></input></div></label>
                </div>
            <div>
                <label htmlFor="NewItemDate">Date:
                <div>
                <input className="newItemElement" onChange={this.updateNewItemValue} value={this.props.selectedAppointment.date} type="date" id ="NewItemDate"></input></div>
                </label>
            </div>
        </div>
    )
}

}
export default CalendarItem;