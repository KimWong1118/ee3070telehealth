import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getCode from "../../Functions/getCode";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Spinner } from "react-bootstrap";
import { AiFillFileAdd, AiFillMessage } from "react-icons/ai";
const Paho = require("paho-mqtt");

const SpinnerModal = ({ username }) => {
    let navigate = useNavigate();

    const [code, setCode] = useState("");

    const client = new Paho.Client(
        "driver.cloudmqtt.com",
        38712,
        "Paho_" + Math.random().toString(16).substr(2, 8)
    );

    function onConnect() {
        console.log("onConnect");
        console.log(username);
        let message = new Paho.Message(username);
        message.destinationName = code + "/user";
        client.send(message);
        client.subscribe(code + "/outTopic");
    }

    client.onMessageDelivered = () => {
        console.log("delivered");
    };

    function doFail(e) {
        console.log(e);
    }

    client.onMessageArrived = (message) => {
        console.log("Message arrived: " + message.payloadString);
        if (message.payloadString == "finished") {
            navigate("/newdata", { state: { username: username } });
        }
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const options = {
        userName: "cgxgibnr",
        password: "MzxIi8_n_rr_",
        useSSL: true,
        onSuccess: onConnect,
        onFailure: doFail,
    };

    const addRecord = () => {
        const response = getCode(username);
        response.then((data) => {
            setCode(data.device_Code);
        });

        client.connect(options);
    };

    useEffect(() => {
        const response = getCode(username);
        response.then((data) => {
            setCode(data.device_Code);
        });
    }, []);

    return (
        <>
            <div
                className="col text-center bg-primary border rounded mx-5"
                onClick={() => {
                    handleShow();
                    addRecord();
                }}
            >
                <div className="row">
                    <AiFillFileAdd size={"15rem"} />
                </div>
                <div className="row">
                    <h4 className="mb-4 text-light">Add record</h4>
                </div>
            </div>
            <Modal centered size="lg" show={show} onHide={handleClose}>
                <div className="container" style={{ height: "500px" }}>
                    <div className="col text-center py-5">
                        <Spinner style={{ width: "20rem", height: "20rem" }} />
                        <div className="py-5">Processing</div>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default SpinnerModal;
