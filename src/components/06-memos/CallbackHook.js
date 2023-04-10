import React, { useCallback, useState } from 'react';
import {ShowIncrement} from './ShowIncrement';

import './memorize.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    },[ setCounter ]);
 
    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </div>
    )
}
