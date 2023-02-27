import React, { Component } from 'react';
import Expensedate from './Expensedate';
//  import './card.css'

// import ems from './ems.png';
export class ExpenseItem extends Component {
  render() {
    return (
      <div>
        <h1>Expense : </h1>
        <div id="box">
          <p id='p1'>{this.props.name}   {this.props.rollno}    {this.props.expenseamount}  </p>

          <p>
            <Expensedate date={this.props.date}></Expensedate>
          </p>


        </div>

      </div>
    )
  }
}
export default ExpenseItem;