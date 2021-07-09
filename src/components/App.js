import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state ={date: new Date()};
   
  }
  componentDidMount() {
   
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="Clock">
    <h3 id="time">
    {(this.state.date.getHours()>12)?((this.state.date.getHours()%12)+":"+(this.state.date.toLocaleTimeString().split(':').splice(1).join(':'))):
   (((this.state.date.getHours()<10)&&(this.state.date.toLocaleTimeString().split('').splice(1).join('')))||((this.state.date.getHours()>=10) && (this.state.date.toLocaleTimeString())))} {(this.state.date.getHours()>=12)?"PM":"AM"}
   </h3>
      </div>
    );
  }
}
export default App;
