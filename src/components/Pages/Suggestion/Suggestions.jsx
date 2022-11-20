import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CusNavbar from "../../Navbar/CusNavbar";
import { Form, Button, Accordion } from "react-bootstrap";
import getUserInfo from "../../../Functions/getUserInfo";
import updateInfo from "../../../Functions/updateInfo";
import getSuggestions from "../../../Functions/getSuggestions";
import ReactQuill from "react-quill";

const Suggestions = () => {
    const location = useLocation();
    let navigate = useNavigate();

    const modules = {
        toolbar: false,
    };

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        if (!location.state) {
            navigate("/login");
        } else {
            const response = getSuggestions(location.state.username);
            response.then((data) => {
                setDatas(data);
            });
        }
    }, []);

    return location.state ? (
        <>
            <CusNavbar username={location.state.username} />
            <div className="container">
                <div className="row">
                    <h2>Suggestion</h2>
                    <hr />
                </div>
                <div className="row">
                    <Accordion>
                        {datas.map((item, i) => {
                            let date = new Date(item.created_time);
                            return (
                                <Accordion.Item eventKey={i}>
                                    <Accordion.Header>
                                        <h5>
                                            {item.topic +
                                                " on " +
                                                date.getDate() +
                                                "/" +
                                                date.getMonth() +
                                                "/" +
                                                date.getFullYear()}
                                        </h5>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Sender</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={item.sender}
                                                readOnly
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Topic</Form.Label>
                                            <Form.Control type="text" value={item.topic} readOnly />
                                        </Form.Group>
                                        <ReactQuill
                                            style={{ height: "540px" }}
                                            theme="snow"
                                            value={item.content}
                                            readOnly
                                            modules={modules}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </>
    ) : null;
};
export default Suggestions;
