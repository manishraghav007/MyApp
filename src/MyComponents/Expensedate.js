import React, { Component } from 'react';

// import ExpenseItem from './ExpenseItem';
// import ems from './ems.png';
const mon_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const Expensedate =(props)=>{
  const date = props.date;
  const day  = date.getMonth();
  const month  = date.getMonth();
  const year  = date.getFullYear();


  return (
    <div>

      <div id="da">
        <p>
          {day}<br></br>
          
          {mon_name[month]}<br></br>
          
          {year}<br></br>
          
        </p>
      </div>


    </div>
  )

}


export default Expensedate;