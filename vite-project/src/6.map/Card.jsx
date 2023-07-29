import React from 'react'

export default function card(props) {
    return (
        <>
            <div className='data'>
                <h1>City : {props.city}</h1>
                <h1>Statename : {props.statename}</h1>
            </div >
        </>
    )
}