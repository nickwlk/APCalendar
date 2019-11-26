import React from 'react';
import ReactDOM from 'react-dom';

import CalendarItem from '../CalendarItem';
import {cleanup} from "@testing-library/react";
import TestRenderer from 'react-test-renderer';

const testAppointment= {subject:'test',text:'test',time:'12:00',date:'2019/11/01'};

afterEach(cleanup);

it("renders without error",() =>{

  const div = document.createElement("div");
  ReactDOM.render(<CalendarItem selectedAppointment={testAppointment}></CalendarItem>,div);
})

it("matches snapshot",() =>{  
  const testAppointment= {subject:'test',text:'test',time:'12:00',date:'2019/11/01'};
    const tree = TestRenderer.create(<CalendarItem selectedAppointment={testAppointment}></CalendarItem>).toJSON();   
      
    expect(tree).toMatchSnapshot();
  });

