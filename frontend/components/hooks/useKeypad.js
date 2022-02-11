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

    }

    const handleUp = () => {
        
    }

    const handleRight = () => {
        
    }

    const handleLeft = () => {
        
    }
    return [handleReset,handleDown,handleUp,handleRight,handleLeft, state]
}

export default useKeypad;