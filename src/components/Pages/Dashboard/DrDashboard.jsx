import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DrNavbar from "../../Navbar/DrNavbar";
import getData from "../../../Functions/DrUser/getHealthData";
import HealthData from "../../doctor/HealthData";
import { Form } from "react-bootstrap";
import getMessages from "../../../Functions/DrUser/getMessages";
import Messages from "../../doctor/Messages";
import getUsers from "../../../Functions/DrUser/getUser";
import DrModal from "../../Modals/DrCusModal";

const DrDashboard = () => {
    const location = useLocation();
    let navigate = useNavigate();

    const [datas, setDatas] = useState([]);
    const [filters, setFils] = useState([]);

    const [datasM, setDatasM] = useState([]);
    const [filtersM, setFilsM] = useState([]);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (!location.state) {
            navigate("/login/dr");
        } else {
            const response = getData();
            response.then((datas) => {
                setDatas(datas);
                setFils(datas);
            });

            const response1 = getMessages();
            response1.then((datas) => {
                setDatasM(datas);
                setFilsM(datas);
            });

            const response2 = getUsers();
            response2.then((datas) => {
                let objs = [];
                datas.map((item) => {
                    objs.push(item.username);
                });
                console.log(objs);
                setUsers(objs);
                //debugger;
            });
        }
    }, []);

    console.log(datas);

    return location.state ? (
        <>
            <DrNavbar username={location.state.username} />
            <div className="container pb-5">
                <div className="row">
                    <h2>
                        Dashboard <DrModal users={users} sender={location.state.username} />
                    </h2>
                    <hr />
                </div>
                <div className="row">
                    <div className="col mx-2">
                        <h5>Health Info</h5>
                        <hr />
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="mb-3"
                                aria-label="Search"
                                onChange={(e) => {
                                    let filtered = [];
                                    datas.map((item) => {
                                        if (item.username.indexOf(e.target.value) > -1) {
                                            filtered.push(item);
                                        }
                                    });
                                    setFils(filtered);
                                }}
                            />
                        </Form>
                        <HealthData datas={filters} />
                    </div>
                    <div className="col mx-2">
                        <h5>Messages</h5>
                        <hr />
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="mb-3"
                                aria-label="Search"
                                onChange={(e) => {
                                    let filtered = [];
                                    datasM.map((item) => {
                                        //debugger;
                                        if (item.topic.indexOf(e.target.value) > -1) {
                                            filtered.push(item);
                                        }
                                    });
                                    setFilsM(filtered);
                                }}
                            />
                        </Form>
                        <Messages datas={filtersM} />
                    </div>
                </div>
            </div>
        </>
    ) : null;
};
export default DrDashboard;
