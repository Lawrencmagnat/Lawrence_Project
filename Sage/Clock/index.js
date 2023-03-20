let display = document.getElementById("clocks");
const dateElement = document.querySelector("#date");
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let displaydate = () => {
  let dday = new Date();
  let year = dday.getFullYear();
  let monthIndex = dday.getMonth();
  let month = months[monthIndex];
  let dayIndex = dday.getDay();
  let dayOfWeek = daysOfWeek[dayIndex];
  let day = dday.getDate().toString().padStart(2, "0");
  let formattedDate = `${month} ${day}, ${year}, ${dayOfWeek}`;
  
  // set the text content of the element with id "date"
  dateElement.textContent = formattedDate;
}

// call the function to display the date
displaydate();





let displayTime = () => {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM"; // Determine whether it's AM or PM

  // Convert to 12-hour time
  hour = hour % 12;
  hour = hour ? hour : 12; // "0" should be displayed as "12"

  // Add leading zero to single-digit minutes and seconds
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;

  let timeString = hour + ":" + min + ":" + sec + " " + ampm;

  display.innerHTML = timeString;
}



// Call the displayTime function every second
setInterval(displayTime, 1000);


// update the date every minute
setInterval(displaydate, 60000);
