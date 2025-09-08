import React from 'react'
import './Assets/TicTacToe.css'
import circle_icon from './Assets/circle.svg'
import cross_icon from './Assets/cross.svg'

 const TicTacToe = () => {
  return (
    <div className ='container'>
    <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
    <div className="Board">
    </div>
    <button className="reset"></button>

    </div>
  )
}
export default TicTacToe
