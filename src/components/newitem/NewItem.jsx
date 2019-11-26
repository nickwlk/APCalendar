import React from "react"

class NewCalendarItem extends React.Component{

    constructor(props){ 
        super(props);
        let _newItem={};            
        
       this.state={newItem:_newItem,itemKey:1,subject:"",text:"",time:"",date:""};
       this.updateNewItemValue = this.updateNewItemValue.bind(this);       
        
       this.AddNewItem = this.AddNewItem.bind(this);
       
    }

    AddNewItem(){
        
        if (this.state.subject.length>0 && this.state.text.length>0 && this.state.time.length>0 && this.state.date.length>0){            
            let _newItem = {};

            _newItem.selectedDay =  this.state.date.substring(8,10);
            _newItem.subject= this.state.subject;
            _newItem.text = this.state.text;
            _newItem.time = this.state.time;
            _newItem.date = this.state.date;
            _newItem.id = 0;
            _newItem.seconds = (this.state.time.substring(0,2)* 60) +(this.state.time.substring(3,6)*60);                       

            this.props.updateAppt(_newItem);    
            
        }else{
            alert('subject:'+this.state.subject +' text'+this.state.text+' time:'+this.state.time+' date:'+this.state.date);
        }
        
        
    }

    render(){
        
    return(

        <div>
            
            <div className="col ">
                <p>Enter new appointment details</p>
            <div >
            <label >Subject:<div>
                <input className="newItemElement" onChange={this.updateNewItemValue} value={ this.state.subject} type="text" id="NewItemSubject"></input>         
                </div>
            </label>
            </div>
            <div><label>Notes:<div>
                <textarea className="newItemElement" onChange={this.updateNewItemValue} value={this.state.text} rows="5" id="NewItemText"></textarea>
                </div>
                </label>
                
            </div>
            <div>
                <label htmlFor="NewItemTime">Time:
                <div><input className="newItemElement" onChange={this.updateNewItemValue} value={this.state.time} type="time" id ="NewItemTime"></input></div></label>
                </div>
            <div>
                <label htmlFor="NewItemDate">Date:
                <div>
                <input className="newItemElement" onChange={this.updateNewItemValue} value={this.state.date} type="date" id ="NewItemDate"></input></div>
                </label>
            </div>
        </div>
            <button className="newItemElement" onClick={this.AddNewItem}>Save</button>
        </div>
       );
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

}
export default NewCalendarItem;