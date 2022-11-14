import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { AiFillMessage } from "react-icons/ai";
import sendMessage from "../../Functions/postMessage";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CusModal = ({ username }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [topic, setTopic] = useState("");
    const [content, setContent] = useState("");

    return (
        <>
            <div className="col text-center bg-primary border rounded mx-5" onClick={handleShow}>
                <div className="row">
                    <AiFillMessage size={"15rem"} />
                </div>
                <div className="row">
                    <h4 className="mb-4 text-light">Send Message</h4>
                </div>
            </div>
            <Modal centered size="lg" show={show} onHide={handleClose}>
                <div className="container" style={{ height: "800px" }}>
                    <Form className="p-3">
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
                                style={{ height: "540px" }}
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
                                const response = sendMessage(username, topic, content);
                                response.then((data) => {
                                    console.log(data);
                                    if (data == true) {
                                        alert("message send");
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
export default CusModal;
