import React from 'react';
import Calendar from "./components/calendar/Calendar";
import './App.css';

function App() {
  return (
    <div className="App">
      <header> 
      <div >
       
        <span>
           <b>Calendar</b>
           <p>Add a new appointment using the appointment entry fields. Click on a day number to view appointments for that day</p>
        </span>
      </div>
      </header>
      <main>
          <Calendar/> 
      </main>
    </div>
  );
}

export default App;
