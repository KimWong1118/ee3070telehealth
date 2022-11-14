import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
const DrNavbar = ({ username }) => {
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
                                navigate("/dashboard/dr", { state: { username: username } })
                            }
                        >
                            <AiFillHome className="mb-1 me-1" />
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => navigate("/info/dr", { state: { username: username } })}
                        >
                            <FaUserAlt className="mb-1 me-1" />
                            Users
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                navigate("/login/dr");
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
export default DrNavbar;
