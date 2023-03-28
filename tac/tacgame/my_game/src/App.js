/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
// import Game from './Game';
// import Eventsm from './Eventsm';
// import kelvin from './kelvin.png'
// import ModeToggler from './ModeToggler';
// import Child from './Child';
// import States from './States';
// import React, { useState } from 'react';
import AboutMe from './AboutMe';
import HomePage from './HomePage';
import Many from './Many'
import { Routes, Route, Link } from 'react-router-dom';


// function Logo(props) {
//   const image1 = <img src={kelvin} alt="user 1" />
//   return image1;
// }



// function Smart() {
//   return <h1>Let's keep pushing.</h1>
// }



function App() {
  //   const date = new Date()
  //   const [peace, calls] = React.useState('Pray😌 ')

  //   function changeTo() {
  //     calls('Watch Out 😏')
  //   }

  return (
    <div>
      <div className='nav'>
        <nav className='navtools'>
          <Link to="/" className="nav-items">HomePage</Link>
          <Link to="/about-me" className="nav-items">About Me</Link>
          <Link to="/photo-work" className="nav-items">Photos</Link>
        </nav>
      </div>
      {/* <Smart /> */}
      {/* <Game name="TacToe" color="Red" players="1 and above" />
      <Logo />
      <Eventsm />
      <ModeToggler />
      <Child message={date.toLocaleTimeString()} />
      <States messages={`${peace} Always 😎`} />
      <button onClick={changeTo}>change</button> */}

      {/* we have two states lets see if we can change it from one click
       to another-; it can be done tru button; you cant change it directly */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/photo-work' element={<Many />} />
      </Routes>

    </div>
  )
}

export default App;
