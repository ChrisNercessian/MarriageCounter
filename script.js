let wife;
let hubby;
let now = new Date();
function CoupleName(){
    event.preventDefault()
     wife = document.getElementById('wname').value;
     hubby = document.getElementById('hname').value;
     let wtime = new Date(document.getElementById('date').value);
     let time_diff = Math.abs( wtime.getTime() - now.getTime() );
     let t2 = convertMillisecondsToDuration(time_diff);
     alert("Dear " + hubby + " and " + wife + ", you have been married for " + time_diff + " milliseconds. In other words, " + t2 + " That's very impressive!");

     
     
}
function convertMillisecondsToDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  const remainingDays = days % 365;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  return "you have been married for " + years + " years, " + remainingDays + " days, " + remainingHours + " hours, " + remainingMinutes + " minutes and " + remainingSeconds + " seconds!";
  
}

    

