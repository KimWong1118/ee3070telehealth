import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import DrLogin from "../../../Functions/DrUser/Drlogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const DrLogins = () => {
    let username = "";
    let password = "";
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
                    <Form.Label>Account</Form.Label>
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
                <Button
                    variant="primary"
                    onClick={() => {
                        const result = DrLogin(username, password);
                        result.then((data) => {
                            if (data == true) {
                                navigate("/dashboard/dr", { state: { username: username } });
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
export default DrLogins;
