import React, { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/Button';
import "./inputTask.css"

export default function MultipleInputTask() {
    let [user, setUser] = useState({
        company: "",
        networth: "",
        country: ""
    })

    let [userData, setUserData] = useState([])

    function getData(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function submitHandler() {
        setUserData([...userData, user])
        setUser({
            company: "",
            networth: "",
            country: ""
        })
    }
    return (
        <>
            <div className='inputform'>
                <label htmlFor="company">Company :</label>
                <input value={user.company} type="text" onChange={(e) => getData(e)} name="company" placeholder='Please enter your company name' id="company" />
                <label htmlFor="networth">Net Worth :</label>
                <input value={user.networth} type="text" onChange={(e) => getData(e)} name="networth" placeholder='Please enter your company net worth' id="networth" />
                <label htmlFor="country">Country :</label>
                <input value={user.country} type="text" onChange={(e) => getData(e)} name="country" placeholder='Please enter your country name' id="country" />
                <Button variant="primary" onClick={() => submitHandler()}>Submit</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>sr.</th>
                        <th>Company Name</th>
                        <th>Net Worth</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.company}</td>
                                <td>{e.networth}</td>
                                <td>{e.country}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
