import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CusNavbar from "../../Navbar/CusNavbar";
import CusModal from "../../Modals/CusModal";
import CusLineChart from "../../Charts/CusLineChart";
import EcgChart from "../../Charts/EcgChart";
import { RiHeartPulseLine, RiHealthBookFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { FcElectricalSensor } from "react-icons/fc";
import SpinnerModal from "../../Modals/SpinnerModal";

const Dashboard = () => {
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        if (!location.state) {
            navigate("/login");
        }
    });

    return location.state ? (
        <>
            <CusNavbar username={location.state.username} />
            <div className="container">
                <div className="row">
                    <h2>Dashboard</h2>
                    <hr />
                    <SpinnerModal username={location.state.username} />
                    <CusModal username={location.state.username} />
                </div>
                <div className="col-12">
                    <div className="row mt-3">
                        <h3>
                            <RiHeartPulseLine className="mb-1 me-1" />
                            Blood pressure
                        </h3>
                    </div>
                    <div className="row">
                        <CusLineChart
                            username={location.state.username}
                            dataKey={["blood_pressure_high", "blood_pressure_low"]}
                            stroke={["#324ca8", "#8132a8"]}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="row mt-3">
                        <h3>
                            <RiHealthBookFill className="mb-1 me-1" />
                            Basic Health Info
                        </h3>
                    </div>
                    <div className="row">
                        <CusLineChart
                            username={location.state.username}
                            dataKey={["blood_oxygen", "heartbeat", "temperature"]}
                            stroke={["#324ca8", "#8132a8", "#32a858"]}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="row mt-3">
                        <h3>
                            <WiHumidity className="mb-1 me-1" />
                            Home Environment
                        </h3>
                    </div>
                    <div className="row">
                        <CusLineChart
                            username={location.state.username}
                            dataKey={["room_temperature", "humidity"]}
                            stroke={["#324ca8", "#8132a8"]}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <div className="row mt-3">
                        <h3>
                            <FcElectricalSensor className="mb-1 me-1" />
                            Latest ECG
                        </h3>
                    </div>
                    <div className="row">
                        <EcgChart username={location.state.username} />
                    </div>
                </div>
            </div>
        </>
    ) : null;
};
export default Dashboard;
