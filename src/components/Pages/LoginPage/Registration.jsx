import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import Login from "../../../Functions/login";
import Signup from "../../../Functions/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Registration = () => {
    let username = "";
    let password = "";
    let fullname = "";
    let age;
    let gender;
    let height;
    let weight;
    let deviceDoce;
    let email;
    let navigate = useNavigate();
    return (
        <div className="container Auth-form-container">
            <Form
                style={{
                    width: "400px",
                    border: "2px #9fb3c5 solid",
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Account Name{" "}
                        <span onClick={() => navigate("/login")} className="text-primary mx-4">
                            Sign In
                        </span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter account"
                        onChange={(e) => (username = e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => (password = e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        onChange={(e) => (email = e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={(e) => (fullname = e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Age"
                        onChange={(e) => (age = e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        type="text"
                        maxLength={"1"}
                        placeholder="Sex"
                        onChange={(e) => (gender = e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Height</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="cm"
                        onChange={(e) => (height = e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="kg"
                        onChange={(e) => (weight = e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Device Code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Code"
                        onChange={(e) => (deviceDoce = e.target.value)}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    onClick={() => {
                        const result = Signup(
                            username,
                            password,
                            email,
                            fullname,
                            age,
                            gender,
                            height,
                            weight,
                            deviceDoce
                        );
                        result.then((data) => {
                            if (data == true) {
                                navigate("/dashboard");
                            }
                        });
                    }}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default Registration;
