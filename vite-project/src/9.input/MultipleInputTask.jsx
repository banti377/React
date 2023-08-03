import React, { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import Button from 'react-bootstrap/Button';
import "./inputTask.css"
import Form from 'react-bootstrap/Form';

export default function MultipleInputTask() {
    let [user, setUser] = useState({
        company: "",
        ceo: "",
        networth: "",
        country: ""
    })

    let [userData, setUserData] = useState([])
    let [isUpdate, setIsUpdate] = useState(false)
    let [index, setIndex] = useState(null)

    function getData(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function submitHandler() {
        if (isUpdate) {
            userData.splice(index, 1, user)
            setUser({
                company: "",
                ceo: "",
                networth: "",
                country: "",
            })
            setIsUpdate(false)
        } else {
            setUserData([...userData, user])
            setUser({
                company: "",
                ceo: "",
                networth: "",
                country: "",
            })
        }
    }

    function deleteHandler(index) {
        userData.splice(index, 1)
        setUserData([...userData])
    }

    function updateHandler(ele, index) {
        setUser(ele)
        setIsUpdate(true)
        setIndex(index)
    }
    return (
        <>
            <Form>
                <div className='inputform'>
                    <Form.Group className="mb-3">
                        <Form.Label>Company Name :</Form.Label>
                        <Form.Control value={user.company} type="text" onChange={(e) => getData(e)} name="company" placeholder='Please enter your company name' id="company" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Company's CEO Name :</Form.Label>
                        <Form.Control value={user.ceo} type="text" onChange={(e) => getData(e)} name="ceo" placeholder='Please enter your company,s CEO name' id="ceo" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Net Worth :</Form.Label>
                        <Form.Control value={user.networth} type="text" onChange={(e) => getData(e)} name="networth" placeholder='Please enter your net worth' id="networth" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Country :</Form.Label>
                        <Form.Control value={user.country} type="text" onChange={(e) => getData(e)} name="country" placeholder='Please enter your net worth' id="country" />
                    </Form.Group>
                    <Button variant="primary" onClick={() => submitHandler()}>{isUpdate ? "Update" : "Submit"}</Button>
                </div>
            </Form>
            <div>
                {userData.length > 0 && (
                    <Table className='inputTable' striped bordered hover>
                        <thead>
                            <tr>
                                <th>sr.</th>
                                <th>Company Name</th>
                                <th>Ceo</th>
                                <th>Net Worth</th>
                                <th>Country</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.company}</td>
                                        <td>{e.ceo}</td>
                                        <td>{e.networth}</td>
                                        <td>{e.country}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => deleteHandler(i)}> Delete </Button>
                                            <Button variant="info" onClick={() => updateHandler(e, i)}> Update </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                )}
            </div>
        </>
    )
}
