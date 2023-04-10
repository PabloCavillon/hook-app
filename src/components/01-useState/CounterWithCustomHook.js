import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const {state:counter, increment, decrement, reset} = useCounter(100);


    return (
        <>
          <h1> Counter with Hook: {counter}</h1>
          <hr />  

          <button onClick={ () => increment() } className="btn btn-primary">+1</button>
          <button onClick={ () => decrement(2) } className="btn btn-primary">-1</button>
          <button onClick={ reset } className="btn btn-primary">reset</button>
        </>
    )
}
