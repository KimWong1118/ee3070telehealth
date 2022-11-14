import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Form } from "react-bootstrap";
import DrEcg from "./DrEcg";

const HealthData = (datas) => {
    datas.datas.sort((a, b) => {
        return new Date(b.created_time) - new Date(a.created_time);
    });
    return (
        <div className="row">
            <Accordion>
                {datas.datas.map((item, i) => {
                    //debugger;
                    const date = new Date(item.created_time);
                    return (
                        <Accordion.Item eventKey={i}>
                            <Accordion.Header>
                                <h5>
                                    {item.username +
                                        " on " +
                                        date.getDate() +
                                        "/" +
                                        date.getMonth() +
                                        "/" +
                                        date.getFullYear()}
                                </h5>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="row">
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Systolic blood pressure</Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={item.blood_pressure_high + " mmHg"}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Diastolic blood pressure</Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={item.blood_pressure_low + " mmHg"}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Heart Rate</Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={item.heartbeat.toFixed(2) + " BPM"}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Spo2</Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={item.blood_oxygen + " %"}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Body temperature</Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={item.temperature.toFixed(2) + " C"}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Room temperature</Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={item.room_temperature + " C"}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Room humidity</Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={item.humidity + " %"}
                                            />
                                        </Form.Group>
                                    </Form>
                                    <DrEcg datas={item.ecg} />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
        </div>
    );
};
export default HealthData;
