import {draw}  from "./firework/firework.js";

var x = document.getElementById("myAudio");
export function _date(str)
{

   var dIfade=/^[0-9]{1,2}\s[A-ZÖÇŞĞÜI]{1}[a-zçşüığö]{3,6}\s[0-9]{4}$/;

   return dIfade.test(str);
}
export function _colorSeconds(days,hours,minutes,seconds)
{

  if(days === 0 && hours === 0 && minutes === 0 && seconds === 0)
  {
    draw();
    x.play();


  }


  if(days === 0 && hours === 0 && minutes === 0)
  {
    if(seconds <= 10)
    {
      if(document.getElementById("seconds") != null)
      {
        document.getElementById("seconds").style.color="red";
        document.getElementById("minutes").style.color="red";
        document.getElementById("hours").style.color="red";
        document.getElementById("days").style.color="red";
      }

    }
    else {
          if(document.getElementById("seconds") != null)
          {
            document.getElementById("seconds").style.color="rgb(46,171,61)";
            document.getElementById("minutes").style.color="rgb(46,171,61)";
            document.getElementById("hours").style.color="rgb(46,171,61)";
            document.getElementById("days").style.color="rgb(46,171,61)";
          }

         }
  }

}

export function celebrate()
{
  document.getElementById("title").innerHTML="YENİ YILINIZ KUTLU OLSUN";
}
