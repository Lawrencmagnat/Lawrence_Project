import React from 'react'


/*Learning Event Handler in React Js */
// function Eventsm() {
//     const EventsmStyling = {
//         display: "flex",
//         alignItems: "center",
//         justifyConytent: "center",
//         padding: "25px",
//         frontSize: "18px",
//         frontFamily: "sans-serif",
//         border: "none",
//         backgroundColor: "orange",
//     }
//     function clickHandler() {
//         alert("Congratulation For Making it Here");
//     }
//     return (
//         <div style={EventsmStyling}>
//           <button onClick={clickHandler}>Click Me</button>
//         </div>
//       );
// }


function Eventsm() {
  const EventsmStyling = {
      display: "flex",
      alignItems: "center",
      justifyConytent: "center",
      padding: "25px",
      frontSize: "18px",
      frontFamily: "sans-serif",
      border: "none",
      backgroundColor: "orange",
  }
  function clickHandler() {
      alert("Congratulation For Making it Here");
  }
  return (
      <div style={EventsmStyling}>
        <button onMouseOver={clickHandler}>Click Me</button>
      </div>
    );
}

export default Eventsm;