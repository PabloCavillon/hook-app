import React from 'react'

export const Small = React.memo(({value}) => { //memo solo se ejecuta si las props cambian

    console.log('Me volvi a llamar');
    return (
        <small>{value}</small>
    )
})