import React from 'react'
import axios from 'axios'

const URL =  "http://localhost:9000/api/result";
const initialState = {
  x: 2,
  y: 2,
  steps: 0,
  email: '',
  boundry:false,
  message: '',
  popup:'',
}


export default class AppClass extends React.Component {
  constructor(){
    super()
    this.state = initialState
  }

  handleReset = () =>{
    this.setState(initialState)
  }
  
  handleDown = () => {
    if(this.state.y === 3){
      this.setState({...this.state,
      boundry:true,
      popUp:'',
      message:"You can't go down",
    
    })
    }else{
      this.setState((state) => ({
        ...this.state,
        y: state.y + 1,
        steps: state.steps +1,
        boundry: false,
        submit: false,
        message: '',
      }))
    }
  }
  
  handleUp = () => {
   if(this.state.y===1){
    this.setState({...this.state,
      boundry:true,
      popUp:'',
      message:"You can't go up",
    
       
  })
   }else{
    this.setState((state) => ({
      ...this.state,
      y: state.y - 1,
      steps: state.steps +1,
      boundry: false,
      submit: false,
      message: '',
    }))
   }
  }
  
  handleLeft = ()=>{
   if(this.state.x ===1){
    this.setState({...this.state,
      boundry:true, 
      popUp:'',
      message:"You can't go left",
    
    })
   }else{
    this.setState((state) => ({
      ...this.state,
      x: state.x - 1,
      steps: state.steps +1,
      boundry: false,
      submit: false,
    }))
   }
  }
  
  handleRight = ()=>{
    if(this.state.x ===3){
      this.setState({...this.state,
        boundry:true,
        popUp:'',
      message:"You can't go right",
      
    })
    }else{
      this.setState((state) => ({
        ...this.state,
        x: state.x + 1,
        steps: state.steps +1,
        boundry: false,
        submit: false,
      }))
    }
  }

  onSubmit = e =>{
    e.preventDefault();
    const payload = {
      x:this.state.x,
      y:this.state.y,
      steps:this.state.steps,
      email:this.state.email,
    }
    axios.post(URL, payload)
    .then(res=>{
      console.log(res.data)
      this.setState({...this.state,
      message: res.data.message,
      submit:true,
      popUp: '',
      email: '',
    })
  })
  .catch(err=>{
    const errorMessage = err.response.data.message
      this.setState({...this.state,
      message:errorMessage,
      submit: true,
      popUp: ''})
  })
  this.setState({...this.state,
    input:e.target.reset()})
 
  }
  
  handleEmail=(e)=>{
    this.setState({
      ...this.state,
      email: e.target.value
    })
    
  }


  render() {
    const {x, y, steps, boundry, message} = this.state

    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({x}, {y})</h3>
          <h3 id="steps">You moved {steps} time{steps === 1?"":"s"}</h3>
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
          <button onClick={this.handleLeft} id="left">LEFT</button>
          <button onClick={this.handleUp} id="up">UP</button>
          <button onClick={this.handleRight} id="right">RIGHT</button>
          <button onClick={this.handleDown} id="down">DOWN</button>
          <button onClick={this.handleReset} id="reset">reset</button>
        </div>
        <form id="emailForm" onSubmit={this.onSubmit}>
          <input onChange={this.handleEmail} id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
