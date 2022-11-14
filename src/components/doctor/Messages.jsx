import React from "react";
import { Accordion, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactQuill from "react-quill";

const Messages = (datas) => {
    const modules = {
        toolbar: false,
    };
    datas.datas.sort((a, b) => {
        return new Date(b.created_time) - new Date(a.created_time);
    });
    return (
        <div className="row">
            <Accordion>
                {datas.datas.map((item, i) => {
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
    );
};
export default Messages;
