import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CusNavbar from "../../Navbar/CusNavbar";
import { Form, Button } from "react-bootstrap";
import getUserInfo from "../../../Functions/getUserInfo";
import updateInfo from "../../../Functions/updateInfo";

const Info = () => {
    const location = useLocation();
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPass] = useState("");
    const [fullname, setFullname] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [code, setCode] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (!location.state) {
            navigate("/login");
        } else {
            const response = getUserInfo(location.state.username);
            response.then((data) => {
                setUsername(data.username);
                setPass(data.password);
                setEmail(data.email);
                setFullname(data.fullname);
                setAge(data.age);
                setGender(data.gender);
                setHeight(data.height);
                setWeight(data.weight);
                setCode(data.device_Code);
                console.log(data);
            });
        }
    }, []);

    return location.state ? (
        <>
            <CusNavbar username={location.state.username} />
            <div className="container">
                <div className="row">
                    <h2>Info</h2>
                    <hr />
                </div>
                <div
                    className="row mt-4"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Form
                        style={{
                            width: "600px",
                            border: "2px #9fb3c5 solid",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Account Name </Form.Label>
                            <Form.Control
                                disabled
                                value={username}
                                type="text"
                                placeholder="Enter account"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={email}
                                type="email"
                                placeholder="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                value={fullname}
                                type="text"
                                placeholder="Name"
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                value={age}
                                type="number"
                                placeholder="Age"
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                value={gender}
                                type="text"
                                maxLength={"1"}
                                placeholder="Sex"
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                value={height}
                                type="number"
                                placeholder="cm"
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control
                                value={weight}
                                type="number"
                                placeholder="kg"
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Device Code</Form.Label>
                            <Form.Control
                                value={code}
                                type="text"
                                placeholder="Code"
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            onClick={() => {
                                const response = updateInfo(
                                    username,
                                    password,
                                    email,
                                    fullname,
                                    age,
                                    gender,
                                    height,
                                    weight,
                                    code
                                );
                                response.then((data) => {
                                    if (data == true) {
                                        alert("Data updated");
                                    }
                                    console.log(data);
                                });
                            }}
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    ) : null;
};
export default Info;
