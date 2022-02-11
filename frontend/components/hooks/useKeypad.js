
import { useState } from 'react';
import axios from 'axios';

const URL =  "http://localhost:9000/api/result";

console.log(URL);
const initialState = {
    x: 2,
    y: 2,
    steps: 0,
    email: '',
    boundry: false,
    message: '',
    popUp: '',
}

const useKeypad = () => {
    const [state, setState] = useState(initialState)

    const handleReset = () => {
        setState(initialState)
    }

    const handleDown = () => {
        if(state.y === 3){
            setState({...state, boundry:true, message:"You can't go down anymore, buddy"})
        } else {
            setState((state) => ({
                ...state,
                y: state.y + 1,
                steps: state.steps +1,
                boundry: false,
                message: '',
            }))
        }

    }

    const handleUp = () => {
        if(state.y === 1){
            setState({...state, boundry:true, message:"You can't go up anymore, buddy"})
        } else {
            setState((state) => ({
                ...state,
                y: state.y - 1,
                steps: state.steps +1,
                boundry: false,
                message: '',
            }))
        }

    }
    

    const handleRight = () => {
        if(state.x === 3){
            setState({...state, boundry:true, message:"You can't go right anymore, buddy"})
        } else {
            setState((state) => ({
                ...state,
                x: state.x + 1,
                steps: state.steps +1,
                boundry: false,
                message: '',
            }))
        }

    }
    

    const handleLeft = () => {
        if(state.x === 1){
            setState({...state, boundry:true, message:"You can't go left anymore, buddy"})
        } else {
            setState((state) => ({
                ...state,
                x: state.x - 1,
                steps: state.steps +1,
                boundry: false,
                message: '',
            }))
        }

    }

    const handleEmail = (e) => {
        setState({
          ...state,
          email: e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        const payload = {
          x:state.x,
          y:state.y,
          steps:state.steps,
          email:state.email,
        }
        axios.post(URL, payload)
        .then(res=>{
          console.log(res.data)
          setState({...state,
          message: res.data.message,
          submit:true,
          popUp: '',
        })
      })
      .catch(err=>{
        const errorMessage = err.response.data.message
          setState({...state,
          message:errorMessage,
          submit: true,
          popUp: ''})
      })  
        setState({...state,input:e.target.reset()})
      }

    

    return [onSubmit, handleEmail, handleReset,handleDown,handleUp,handleRight,handleLeft, state]
}

export default useKeypad;