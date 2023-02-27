import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./MyComponents/ExpenseItem";
import arr from "./MyComponents/Expenses";
// import card from "./MyComponents/Card";
import Card from "./MyComponents/Card";
// import Navbar from "./MyComponents/Navbar";




function App() {
  
  return (
    <div>
    {/* <Navbar></Navbar> */}
    <Card>
      <b2>Get Started </b2>
      <h1>Rishi </h1>
      <ExpenseItem id = "hello" name={arr[0].name} rollno= {arr[0].rollno} expenseamount={arr[0].expenseamount} date = {arr[0].date} > </ExpenseItem>
      <ExpenseItem name={arr[1].name} rollno= {arr[1].rollno} expenseamount={arr[1].expenseamount} date = {arr[1].date}></ExpenseItem>
     

    </Card>
     <ExpenseItem name={arr[2].name} rollno= {arr[2].rollno} expenseamount={arr[2].expenseamount} date = {arr[2].date}></ExpenseItem>
    </div>
  );
}

export default App;


