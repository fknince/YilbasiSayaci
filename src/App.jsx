import React,{ Component } from 'react';
import './App.css';
import Clock from './Clock';




class App extends Component{
  constructor(props){
    super(props);
    this.state={
      deadline: '31 Aralık 2017',
      newDeadline:''
    }

  }
  render(){

    return(
      <div className="App">
        <div className="App-title" id="title">
          2018 için son
        </div>

        <Clock deadline={this.state.deadline}/>



      </div>
    )
  }







}

export default App;
