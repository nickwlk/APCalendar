import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewItem from '../NewItem';
import '@testing-library/jest-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';

afterEach(cleanup);

it("renders without error",() =>{
 
    const div  = document.createElement("div");
    ReactDOM.render(<NewItem></NewItem>,div);
  })

  it('calls onclick when new calendar items are populted',() =>{
    
    const newItem = render(<NewItem></NewItem>);
    //get by label text that the user sees
      fireEvent.change(newItem.getByLabelText('Subject:'),{
          target:{
              value:'Test subject'
          }
      });
      expect(newItem.getByLabelText('Subject:').value).toBe('Test subject');

      fireEvent.change(newItem.getByLabelText('Notes:'),{
        target:{
            value:'Test note'
        }
    });
    expect(newItem.getByLabelText('Notes:').value).toBe('Test note');

    fireEvent.change(newItem.getByLabelText('Time:'),{
        target:{
            value:'11:20'
        }
    });
    expect(newItem.getByLabelText('Time:').value).toBe('11:20');

    
    fireEvent.change(newItem.getByLabelText('Date:'),{
        target:{
            value:'2019-11-22'
        }
    });
    expect(newItem.getByLabelText('Date:').value).toBe('2019-11-22');

    //shouldn't be able to enter text into the time and date fields
    fireEvent.change(newItem.getByLabelText('Date:'),{
        target:{
            value:'test'
        }
    });
    expect(newItem.getByLabelText('Date:').value).toBe('');


  })