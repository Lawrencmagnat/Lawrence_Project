// import Files from './Files/Index'
import React, { useState } from 'react'
import Documentation from './Documentation/Doc';
import './App.css';
import Board from './Files/Board'
import Reset from './Files/Reset'
import ScoreBoard from './Files/ScoreBoard'
import { Routes, Route, Link } from 'react-router-dom';


// const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"]

function App() {
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]



  const [xplaying, setXplaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false);
  const boxClick = (boxId) => {
    const updateBoard = board.map((value, id) => {
      if (id === boxId) {
        return xplaying === true ? "X" : "O";
      } else {
        return value;
      }
    })

    const winner = checkWinner(updateBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore })

      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore })
      }
    }



    setBoard(updateBoard);
    setXplaying(!xplaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }

    }

  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }
  return (

    <div className="Nunu">
      <div className='nav'>
        <nav className='navtools'>
          <Link to='/' className='nav-items'>Home</Link>
          <Link to='/documentation-page' className='nav-items'>Documentation-Page</Link>
        </nav>
      </div>
      <div className="Wasted">
        <ScoreBoard scores={scores} xPlaying={xplaying} />
        <Board board={board} onClick={gameOver ? resetBoard : boxClick} />
        <Reset resetBoard={resetBoard} />
      </div>


      <Routes>
        {/* <Route path='/' element={<Files />} /> */}
        <Route path='/documentation-page' element={<Documentation />} />
      </Routes>
    </div>
  );
}

export default App;
