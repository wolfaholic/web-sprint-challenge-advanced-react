import { useState } from 'react';

const initialState = {
    x: 2,
    y: 2,
    movement: 0,
    boundry: false,
    message: '',
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
                movement: state.movement +1,
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
                movement: state.movement -1,
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
                movement: state.movement +1,
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
                movement: state.movement -1,
                boundry: false,
                message: '',
            }))
        }

    }

    return [handleReset,handleDown,handleUp,handleRight,handleLeft, state]
}

export default useKeypad;