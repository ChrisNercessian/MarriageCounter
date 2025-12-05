let wife;
let hubby;
let now = new Date();
function CoupleName(){
    event.preventDefault()
     wife = document.getElementById('wname').value;
     hubby = document.getElementById('hname').value;
     let wtime = new Date(document.getElementById('date').value);
     let time_diff = Math.abs( wtime.getTime() - now.getTime() );
     let t2 = convertMillisecondsToTimeUnits(time_diff);
     alert("Dear " + hubby + " and " + wife + ", you have been married for " + time_diff + " milliseconds. In other words, " + t2 + " That's very impressive!");

     
     
}
function convertMillisecondsToTimeUnits(milliseconds) {
  const MS_PER_SECOND = 1000;
  const MS_PER_MINUTE = MS_PER_SECOND * 60;
  const MS_PER_HOUR = MS_PER_MINUTE * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;

  let remainingMs = milliseconds;


  let years = 0;
  let tempDate = new Date(0);
  while (remainingMs >= MS_PER_DAY * 365) {
    tempDate.setUTCMilliseconds(tempDate.getUTCMilliseconds() + MS_PER_DAY * 365);
    const nextYearDate = new Date(tempDate.getUTCFullYear() + 1, 0, 1);
    const daysInCurrentYear = (nextYearDate.getTime() - tempDate.getTime()) / MS_PER_DAY;

    if (remainingMs >= MS_PER_DAY * daysInCurrentYear) {
      years++;
      remainingMs -= MS_PER_DAY * daysInCurrentYear;
      tempDate = new Date(tempDate.getUTCFullYear() + 1, 0, 1);
    } else {
      break; 
    }
  }

  const days = Math.floor(remainingMs / MS_PER_DAY);
  remainingMs %= MS_PER_DAY;

  const hours = Math.floor(remainingMs / MS_PER_HOUR);
  remainingMs %= MS_PER_HOUR;

  const minutes = Math.floor(remainingMs / MS_PER_MINUTE);
  remainingMs %= MS_PER_MINUTE;

  const seconds = Math.floor(remainingMs / MS_PER_SECOND);


  return "you have been married for " + years + " years, " + days + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds!";
  
}

    

