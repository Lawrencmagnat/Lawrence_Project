/* eslint-disable no-unused-vars */
import React from 'react'




function HomePage() {
  // Style:
  const HomeStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyConytent: "center",
    padding: "25px",
    frontSize: "18px",
    frontFamily: "sans-serif",
    border: "none",
    backgroundColor: "black",
    height: "100vh",
    color: "whitesmoke",
    fontFamily: "serif",

    
  }



  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let messageBe;

  if (day.toLowerCase() === "monday") {
    messageBe = `Happy sit at home >>>>  ${day}`;
  } else if (day.toLowerCase() === "tuesday") {
    messageBe = `Happy Schooling day >>>> ${day }`;
  } else if (day.toLowerCase() === "wednesday") {
    messageBe = `Good Morning, Do Your Learnable Task Today >>>> ${day}`;
  } else if (day.toLowerCase() === "thursday") {
    messageBe = `Happy Schooling day >>>> ${day}`;
  } else if (day.toLowerCase() === "friday") {
    messageBe = `Happy Schooling day >>>> ${day}`;
  } else {
    messageBe = `Happy Weekend, ENJOY UR WEEKEND 😋😋😋`
  }

  return (
    <div>
    <home style={HomeStyle}>
      <h1>{messageBe}</h1>
      <h2>
        {morning ? (
          <h3>Have You heard Your breakfast Yet? </h3>
        ) : (
          <span style={{ marginLeft: '20px' }}></span>
        )}
      </h2>
    </home>
  </div>

  )

}

export default HomePage;