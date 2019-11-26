import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditItem from '../EditCalendarItem';
import '@testing-library/jest-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';

const testAppointment= {subject:'test',text:'test',time:'12:00',date:'2019/11/01'};

afterEach(cleanup);

it("renders without error",() =>{
    const div  = document.createElement("div");
    ReactDOM.render(<EditItem isOpen={false} shouldClose={'undefined'} selectedAppointment={testAppointment}></EditItem>,div);
  })