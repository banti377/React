// bike name 

import React, { useState } from 'react'

export default function InputTask() {

    let [bikeName, setBikeName] = useState("")
    let [data, setData] = useState([])
    function getData(e) {
        setBikeName(e?.target?.value)
    }
    function addData(params) {
        setData([...data, bikeName])
        setBikeName("")
    }

    return (
        <>
            <label htmlFor="bn">Bike Name : </label>
            <input type="text" value={bikeName} onChange={(e) => getData(e)} />
            <button onClick={() => addData()}>Add Name</button>

            <div>
                {data.map((e, i) => {
                    return <h1 key={i}>{e}</h1>
                })}
            </div>
        </>
    )
}
