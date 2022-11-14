import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CusNavbar from "../../Navbar/CusNavbar";
import EcgChart from "../../Charts/EcgChart";
import AllEcgChart from "../../Charts/AllEcgChart";

const ECG = () => {
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
                    <h2>My ECG</h2>
                    <hr />
                </div>
                <div className="col-12">
                    <div className="row">
                        <AllEcgChart username={location.state.username} />
                    </div>
                </div>
            </div>
        </>
    ) : null;
};
export default ECG;
