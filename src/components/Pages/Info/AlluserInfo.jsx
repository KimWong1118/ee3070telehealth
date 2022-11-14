import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Form } from "react-bootstrap";
import getUsers from "../../../Functions/DrUser/getUser";
import DrNavbar from "../../Navbar/DrNavbar";
import "./style.css";
const AllUserInfo = () => {
    const location = useLocation();
    let navigate = useNavigate();

    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (!location.state) {
            navigate("/login/dr");
        } else {
            const response = getUsers();
            response.then((datas) => {
                //debugger;
                console.log(datas);
                setUsers(datas);
            });
        }
    }, []);

    return (
        <>
            <DrNavbar username={location.state.username} />
            <div className="container pb-5">
                <div className="row">
                    <h2>Users</h2>
                    <hr />
                </div>
                <div className="row">
                    <Accordion>
                        {users.map((item, i) => {
                            debugger;
                            return (
                                <>
                                    <Accordion.Item eventKey={i}>
                                        <Accordion.Header style={{ border: "1px soild #b0abab" }}>
                                            {item.username}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Form
                                                style={{
                                                    //width: "600px",
                                                    border: "2px #9fb3c5 solid",
                                                    padding: "20px",
                                                    borderRadius: "10px",
                                                }}
                                            >
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>Account Name </Form.Label>
                                                    <Form.Control
                                                        readOnly
                                                        value={item.username}
                                                        type="text"
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        value={item.email}
                                                        type="email"
                                                        readOnly
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>Your Name</Form.Label>
                                                    <Form.Control
                                                        value={item.fullname}
                                                        type="text"
                                                        readOnly
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>Age</Form.Label>
                                                    <Form.Control
                                                        value={item.age}
                                                        type="number"
                                                        readOnly
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Control
                                                        value={item.gender}
                                                        type="text"
                                                        maxLength={"1"}
                                                        readOnly
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>Height</Form.Label>
                                                    <Form.Control
                                                        value={item.height}
                                                        type="number"
                                                        readOnly
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>Weight</Form.Label>
                                                    <Form.Control
                                                        value={item.weight}
                                                        type="number"
                                                        readOnly
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicEmail"
                                                >
                                                    <Form.Label>Device Code</Form.Label>
                                                    <Form.Control
                                                        value={item.device_Code}
                                                        type="text"
                                                        readOnly
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </>
    );
};
export default AllUserInfo;
