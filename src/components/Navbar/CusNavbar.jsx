import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { AiFillHome, AiFillFile, AiFillDatabase } from "react-icons/ai";
import { FcElectricalSensor } from "react-icons/fc";
import { RiHeartPulseLine } from "react-icons/ri";
import { MdSettingsSuggest } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
const CusNavbar = ({ username }) => {
    let navigate = useNavigate();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Hi, {username}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() =>
                                navigate("/dashboard", { state: { username: username } })
                            }
                        >
                            <AiFillHome className="mb-1 me-1" />
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/info", { state: { username: username } });
                            }}
                        >
                            <AiFillFile className="mb-1 me-1" />
                            My Info
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/ecg", { state: { username: username } });
                            }}
                        >
                            <FcElectricalSensor className="mb-1 me-1" />
                            My ECG
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/suggestions", { state: { username: username } });
                            }}
                        >
                            <MdSettingsSuggest className="mb-1 me-1" />
                            My Suggestion
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            <GoSignOut className="mb-1 me-1" />
                            Sign Out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default CusNavbar;
