import React from 'react'
import { connect } from "react-redux"
import { add } from "./Redux/Count/countAction"

function CountCom(props) {
    return (
        <>
            <h1>Count is {props.count}</h1>
            <button onClick={() => props.add()}>Increment</button>
        </>
    )
}


const toStatetoProps = (state) => {
    return {
        count: state.x,
    }
}

const toDispatchToProps = (dispatch) => {
    return { add: () => dispatch(add()) }
}

export default connect(toStatetoProps, toDispatchToProps)(CountCom);