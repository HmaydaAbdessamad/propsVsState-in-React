import React, {useState} from 'react';

function C() {
    const [counter,setCounter]=useState(0)
    const incrementCounter=()=>{
        setCounter(counter+1)
    }
    const decrementCounter=()=>{
        setCounter(counter-1)
    }
    const resetCounter=()=>{
        setCounter(0)
    }

    return (
        <div>
            <h2>
                this is value of counter {counter}
            </h2>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement </button>
            <button onClick={resetCounter}>Reset</button>

        </div>
    );
}

export default C;
