import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BiMessageAdd } from "react-icons/bi";
import sendSuggestion from "../../Functions/DrUser/sendSuggestions";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const DrModal = ({ users, sender }) => {
    debugger;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [receiver, setRece] = useState("");
    const [topic, setTopic] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setRece(users[0]);
    }, []);

    return (
        <>
            <BiMessageAdd onClick={handleShow} />
            <Modal centered size="lg" show={show} onHide={handleClose}>
                <div className="container" style={{ height: "800px" }}>
                    <Form className="p-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Receiver</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={(e) => {
                                    setRece(e.target.value);
                                }}
                            >
                                {users.map((item) => {
                                    return <option value={item}>{item}</option>;
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Topic</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Topic"
                                onChange={(e) => setTopic(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <ReactQuill
                                style={{ height: "460px" }}
                                theme="snow"
                                value={content}
                                onChange={setContent}
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            className="mt-5"
                            onClick={() => {
                                debugger;
                                const response = sendSuggestion(receiver, sender, topic, content);
                                response.then((data) => {
                                    console.log(data);
                                    if (data == true) {
                                        alert("message send");
                                        setRece(users[0]);
                                        setShow(false);
                                        setTopic("");
                                        setContent("");
                                    }
                                });
                            }}
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </Modal>
        </>
    );
};
export default DrModal;
