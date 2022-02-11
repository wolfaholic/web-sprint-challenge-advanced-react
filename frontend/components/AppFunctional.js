import React from 'react'
import useKeypad from './hooks/useKeypad'


 
  

export default function AppFunctional(props) {

const [
  onSubmit,
  handleEmail,
  handleReset,
  handleDown,
  handleUp,
  handleRight,
  handleLeft,
  state,
] = useKeypad()

const  {
  boundry, 
  message, 
  x, 
  y,
} = state


  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
        <h3 id="steps">You moved {state.steps} time{state.steps === 1?"":"s"}</h3>
      </div>
      <div id="grid">
        {x===1 && y===1?<div className="square active">B</div>:<div className="square"></div>}
        {x===2 && y===1?<div className="square active">B</div>:<div className="square"></div>}
        {x===3 && y===1?<div className="square active">B</div>:<div className="square"></div>}
        {x===1 && y===2?<div className="square active">B</div>:<div className="square"></div>}
        {x===2 && y===2?<div className="square active">B</div>:<div className="square"></div>}
        {x===3 && y===2?<div className="square active">B</div>:<div className="square"></div>}
        {x===1 && y===3?<div className="square active">B</div>:<div className="square"></div>}
        {x===2 && y===3?<div className="square active">B</div>:<div className="square"></div>}
        {x===3 && y===3?<div className="square active">B</div>:<div className="square"></div>}
      </div>
      <div className="info">
        {boundry?<h3 id="message">{message}</h3>:<h3 id="message"></h3>}
        {message?<h3 id="message">{message}</h3>:<h3 id="message"></h3>}
      </div>
      <div id="keypad">
        <button onClick={handleLeft} id="left">LEFT</button>
        <button onClick={handleUp} id="up">UP</button>
        <button onClick={handleRight} id="right">RIGHT</button>
        <button onClick={handleDown} id="down">DOWN</button>
        <button onClick={handleReset} id="reset">reset</button>
      </div>
      <form onSubmit={onSubmit}>
          <input onChange={handleEmail} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
    </div>
  )
}
