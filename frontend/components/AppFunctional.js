import React from 'react'
import useKeypad from './hooks/useKeypad'


export default function AppFunctional(props) {

const [
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
  y
} = state

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({state.x}, {state.y})</h3>
        <h3 id="steps">You moved {state.movement} times</h3>
      </div>
      <div id="grid">
        {x===1 && y===1}<div className="square"></div>
        {x===2 && y===1}<div className="square"></div>
        {x===3 && y===1}<div className="square"></div>
        {x===1 && y===2}<div className="square"></div>
        {x===2 && y===2}<div className="square active">B</div>
        {x===3 && y===2}<div className="square"></div>
        {x===1 && y===3}<div className="square"></div>
        {x===2 && y===3}<div className="square"></div>
        {x===3 && y===3}<div className="square"></div>
      </div>
      <div className="info">
        {boundry}<h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
