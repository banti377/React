import React, { useState } from 'react'
import "./input.css"
import Table from 'react-bootstrap/Table'

export default function MultipleInputCom() {
    let [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    let [userData, setUserData] = useState([])

    // to get data from input
    function getData(e) {
        console.log("--->", e.target.name);
        // ...user -> for get old objects data
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // ad object(user state) into array(userData)
    function submitHandler() {
        setUserData([...userData, user])
        setUser({
            name: "",
            email: "",
            password: ""
        })
    }

    return (
        <>
            <div className='inputForm'>
                <label htmlFor="name">Name :</label>
                <input value={user.name} type="text" onChange={(e) => getData(e)} name="name" placeholder='please enter your name' id="name" />
                <label htmlFor="eamil">Email :</label>
                <input value={user.email} type="email" onChange={(e) => getData(e)} name="email" placeholder='please enter your email' id="email" />
                <label htmlFor="password">Passoword :</label>
                <input value={user.password} type="text" onChange={(e) => getData(e)} name="password" placeholder='please enter your password' id="pass" />
                <button onClick={() => submitHandler()}>Submit</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.password}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
