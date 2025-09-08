import React, { useState } from 'react'
import './Assets/TicTacToe.css'
import circle_icon from './Assets/circle.png'
import cross_icon from './Assets/cross.png'

let data = [ "", "", "", "", "", "", "", "", "" ];

const TicTacToe = () => {

  let[count, setCount] = useState(0);
  let[locked, setLocked] = useState(false);
  let[message, setMessage] = useState("");

  const toggleIcon = (e,num) => {
    if(locked){
      return;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src='${cross_icon}'/>`
      data[num] = "X";
      setCount(count + 1);
    }
    else{
      e.target.innerHTML = `<img src='${circle_icon}'/>`
      data[num] = "o";
      setCount(count + 1);
    }
    checkWin();
  }
  const checkWin=()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[0]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      won(data[3]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      won(data[6]);
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      won(data[0]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      won(data[1]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      won(data[2]);
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      won(data[0]);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      won(data[2]);
    }
    else if(count===9){
      setMessage("Draw");
      setLocked(true);
    }
  }
  const won = (winner)=>{
    setLocked(true);
    if(winner==="X"){
      setMessage("X Wins");
    } else if(winner==="o"){
      setMessage("O Wins");
    }
  }
  const resetGame = ()=>{
    setLocked(false);
    setCount(0);
    setMessage("");
    data = ["","","","","","","","",""];
    const boxes = document.getElementsByClassName('boxes');
    for(let i=0;i<boxes.length;i++){
      boxes[i].innerHTML = "";
    }
  }
  return (
    <div className ='container'>
    <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
    {message && <h2 className='title'>{message}</h2>}
    <div className="Board">
      <div className='row1'>
      <div className='boxes' onClick={(e)=>toggleIcon(e,0)}></div>
        <div className='boxes' onClick={(e)=>toggleIcon(e,1)}></div>
          <div className='boxes' onClick={(e)=>toggleIcon(e,2)}></div>
    </div>
      <div className='row2'>
      <div className='boxes' onClick={(e)=>toggleIcon(e,3)}></div>
        <div className='boxes' onClick={(e)=>toggleIcon(e,4)}></div>
          <div className='boxes' onClick={(e)=>toggleIcon(e,5)}></div>
    </div>
      <div className='row3'>
      <div className='boxes' onClick={(e)=>toggleIcon(e,6)}></div>
        <div className='boxes' onClick={(e)=>toggleIcon(e,7)}></div>
          <div className='boxes' onClick={(e)=>toggleIcon(e,8)}></div>
    </div>
    </div>
  <button className="reset" onClick={resetGame}>Reset</button>

    </div>
  )
}
export default TicTacToe
