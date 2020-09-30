import React from 'react';
import './App.css';
import { connect } from 'react-redux'


function App(props) {
  return (
    <div className="App">
      <p>Beni...!</p>

      <div>Age: <span>{props.age}</span></div>
      <button style={{elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 12}} onClick={props.onAgeUp}>up</button><button style={{elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 12}} onClick={props.onAgeDown}>down</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    age: state.counter
  }
}
const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: "Age_Up" }),
    onAgeDown: () => dispach({ type: "Age_Down" })
  }
}
export default connect(mapStateToProps, mapDispachToProps)(App);
