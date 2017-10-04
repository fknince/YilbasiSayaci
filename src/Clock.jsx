import React ,{Component} from 'react';
import './App.css'
import {_colorSeconds} from  './Controls.js';
import {celebrate} from  './Controls.js';
var myClock;
class Clock extends Component{
  constructor(probs){
    super(probs);
    this.state={
      days:0,
      hours:0,
      minutes:0,
      seconds:0
    }

  }
  componentWillMount()
  {
    this.getTimeUntil(this.props.deadline)

  }
  componentDidMount()
  {

    myClock=setInterval(()=>this.getTimeUntil(this.props.deadline),1000);

  }
  getTimeUntil(deadline){

    let months=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
    let paramDay=deadline.split(' ');
    let time=Date.parse(new Date(Number.parseInt(paramDay[2],10),
            months.indexOf(paramDay[1]),
            Number.parseInt(paramDay[0],10))) - Date.parse(new Date());







    let seconds=Math.floor((time/1000)%60);
    let minutes=Math.floor((time/1000/60)%60);
    let hours=Math.floor(time /(1000 * 60 * 60)%24);
    let days=Math.floor(time / (1000 * 60 * 60 *24));

  /*  minutes=0; //test
    hours=0;   // test
    days=0;   // test*/





    this.setState({days,hours,minutes,seconds});
    _colorSeconds(days,hours,minutes,seconds);
    if(days === 0 && hours === 0 && minutes === 0 && seconds === 0)
    {
      clearInterval(myClock);
      celebrate();
    }




  }
  leadingZero(num)
  {
    return num < 10 ? '0'+num : num;
  }
  render(){
    return (
      <div>
        <div className="Clock-days" id="days">{this.leadingZero(this.state.days)} Gün </div>
        <div className="Clock-hours" id="hours">{this.leadingZero(this.state.hours)} Saat </div>
        <div className="Clock-minutes" id="minutes">{this.leadingZero(this.state.minutes)} Dakika</div>
        <div className="Clock-seconds" id="seconds">{this.leadingZero(this.state.seconds)} Saniye</div>
      </div>
    )
  }


}
export default Clock;
