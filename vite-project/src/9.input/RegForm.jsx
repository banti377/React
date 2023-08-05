import React, { useState } from 'react'
import "./regForm.css"
import Button from 'react-bootstrap/esm/Button'


export default function RegForm() {
    let [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
    })

    let [userData, setUserData] = useState([])
    let [isUpdate, setIsUpdate] = useState(false)
    let [index, setIndex] = useState(null)

    function getData(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function submitHandler() {
        if (!user.firstname || !user.lastname || !user.email || !user.password) {
            alert("Please fill in all the fields.");
            return;
        }

        if (isUpdate) {
            userData.splice(index, 1, user)
            setUser({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
            })
            setIsUpdate(false)
        } else {
            setUserData([...userData, user])
            setUser({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
            })
        }
    }

    function deleteHandler(index) {

        let shouldDelete = confirm("Are you sure you want to delete")

        if (shouldDelete) {
            userData.splice(index, 1)
            setUserData([...userData])
        }
    }

    function updateHandler(ele, index) {
        setUser(ele)
        setIsUpdate(true)
        setIndex(index)
    }

    return (
        <>
            <div className='reginput'>
                <label>First Name :</label>
                <input value={user.firstname} type="text" name="firstname" id="firstname" onChange={(e) => getData(e)} placeholder='Please enter your Frist Name' />

                <label>Last Name :</label>
                <input value={user.lastname} type="text" name="lastname" id="lastname" onChange={(e) => getData(e)} placeholder='Please enter your Last Name' />

                <label>Email :</label>
                <input value={user.email} type="text" name="email" id="email" onChange={(e) => getData(e)} placeholder='Please enter your Email' />

                <label>Password :</label>
                <input value={user.password} type="password" name="password" id="pass" onChange={(e) => getData(e)} placeholder='Please enter your Password' />

                <button onClick={() => submitHandler()}>{isUpdate ? "Update" : "Submit"}</button>
            </div>

            {userData.length > 0 && (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.firstname}</td>
                                    <td>{e.lastname}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => deleteHandler(i)}>Delete</Button>
                                        <Button onClick={() => updateHandler(e, i)}>Update</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </>
    )
}
