import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CusNavbar from "../../Navbar/CusNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner, Card } from "react-bootstrap";
import getLTDatas from "../../../Functions/getLTDatas";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { RiHeartPulseLine, RiPulseFill } from "react-icons/ri";
import { TbTemperatureCelsius } from "react-icons/tb";
import { SiOxygen } from "react-icons/si";
import EcgChart from "../../Charts/EcgChart";

const Newdata = () => {
    const location = useLocation();
    let navigate = useNavigate();

    const [datas, setDatas] = useState({});

    useEffect(() => {
        if (!location.state) {
            navigate("/login");
        } else {
            const response = getLTDatas(location.state.username);
            response.then((data) => {
                console.log(data);
                setDatas(data);
            });
        }
    }, []);

    return location.state ? (
        <>
            <CusNavbar username={location.state.username} />
            <div className="container">
                <div className="row">
                    <h2>New Record On {Object.keys(datas).length === 0 ? null : datas[0].date}</h2>
                    <hr />
                </div>
                <div className="row">
                    {Object.keys(datas).length === 0 ? (
                        <div className="col text-center py-5">
                            <Spinner style={{ width: "20rem", height: "20rem" }} />
                            <div className="py-5">Processing</div>
                        </div>
                    ) : Object.keys(datas).length >= 2 ? (
                        <div className="row">
                            <div className="col-6">
                                <Card className="text-center">
                                    <div>
                                        <WiHumidity size={150} />
                                        <TbTemperatureCelsius size={150} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Humidity & Temperature</Card.Title>
                                        <Card.Text>
                                            <p className="mt-4">
                                                Humidity: {datas[0].humidity.toFixed(2)} %{" "}
                                                {datas[0].humidity > datas[1].humidity ? (
                                                    <>
                                                        <BiUpArrowAlt
                                                            color="green"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {(
                                                                datas[0].humidity -
                                                                datas[1].humidity
                                                            ).toFixed(2)}{" "}
                                                            %
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <BiDownArrowAlt
                                                            color="red"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {(
                                                                datas[1].humidity -
                                                                datas[0].humidity
                                                            ).toFixed(2)}{" "}
                                                            %
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                            <p>
                                                Room Temperature:{" "}
                                                {datas[0].room_temperature.toFixed(2)}C{" "}
                                                {datas[0].room_temperature >
                                                datas[1].room_temperature ? (
                                                    <>
                                                        <BiUpArrowAlt
                                                            color="green"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {(
                                                                datas[0].room_temperature -
                                                                datas[1].room_temperature
                                                            ).toFixed(2)}{" "}
                                                            C
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <BiDownArrowAlt
                                                            color="red"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {(
                                                                datas[1].room_temperature -
                                                                datas[0].room_temperature
                                                            ).toFixed(2)}{" "}
                                                            C
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="text-center">
                                    <div>
                                        <RiHeartPulseLine size={150} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Blood Pressure</Card.Title>
                                        <Card.Text>
                                            <p className="mt-4">
                                                Systolic blood pressure:{" "}
                                                {datas[0].blood_pressure_high}{" "}
                                                {datas[0].blood_pressure_high >
                                                datas[1].blood_pressure_high ? (
                                                    <>
                                                        <BiUpArrowAlt
                                                            color="green"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {datas[0].blood_pressure_high -
                                                                datas[1].blood_pressure_high}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <BiDownArrowAlt
                                                            color="red"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {datas[1].blood_pressure_high -
                                                                datas[0].blood_pressure_high}
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                            <p>
                                                Diastolic blood pressure:{" "}
                                                {datas[0].blood_pressure_low}{" "}
                                                {datas[0].blood_pressure_low >
                                                datas[1].blood_pressure_low ? (
                                                    <>
                                                        <BiUpArrowAlt
                                                            color="green"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {datas[0].blood_pressure_low -
                                                                datas[1].blood_pressure_low}
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <BiDownArrowAlt
                                                            color="red"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {datas[1].blood_pressure_low -
                                                                datas[0].blood_pressure_low}
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6 mt-5">
                                <Card className="text-center">
                                    <div>
                                        <RiPulseFill size={130} className="mt-4 me-5" />
                                        <SiOxygen size={130} className="mt-4" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Heart Rate & Spo2</Card.Title>
                                        <Card.Text>
                                            <p className="mt-4">
                                                Heart Rate: {datas[0].heartbeat.toFixed(2)} BPM{" "}
                                                {datas[0].heartbeat > datas[1].heartbeat ? (
                                                    <>
                                                        <BiUpArrowAlt
                                                            color="green"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {(
                                                                datas[0].heartbeat -
                                                                datas[1].heartbeat
                                                            ).toFixed(2)}{" "}
                                                            BPM
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <BiDownArrowAlt
                                                            color="red"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {(
                                                                datas[1].heartbeat -
                                                                datas[0].heartbeat
                                                            ).toFixed(2)}{" "}
                                                            BPM
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                            <p className="pb-1">
                                                Spo2: {datas[0].blood_oxygen}%
                                                {datas[0].blood_oxygen > datas[1].blood_oxygen ? (
                                                    <>
                                                        <BiUpArrowAlt
                                                            color="green"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {datas[0].blood_oxygen -
                                                                datas[1].blood_oxygen}
                                                            %
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <BiDownArrowAlt
                                                            color="red"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {datas[1].blood_oxygen -
                                                                datas[0].blood_oxygen}
                                                            %
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6 mt-5">
                                <Card className="text-center">
                                    <div>
                                        <FaTemperatureHigh size={130} className="mt-4" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Body Temperature</Card.Title>
                                        <Card.Text>
                                            <p className="mt-4 pb-5">
                                                Temperature: {datas[0].temperature.toFixed(2)} C
                                                {datas[0].temperature > datas[1].temperature ? (
                                                    <>
                                                        <BiUpArrowAlt
                                                            color="green"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {(
                                                                datas[0].temperature -
                                                                datas[1].temperature
                                                            ).toFixed(2)}{" "}
                                                            C
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <BiDownArrowAlt
                                                            color="red"
                                                            size={25}
                                                            className="mb-1"
                                                        />
                                                        <span>
                                                            {(
                                                                datas[1].temperature -
                                                                datas[0].temperature
                                                            ).toFixed(2)}{" "}
                                                            C
                                                        </span>
                                                    </>
                                                )}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-12 mt-5">
                                <h1>ECG</h1>
                                <EcgChart username={location.state.username} />
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-6">
                                <Card className="text-center">
                                    <div>
                                        <WiHumidity size={150} />
                                        <TbTemperatureCelsius size={150} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Humidity & Temperature</Card.Title>
                                        <Card.Text>
                                            <p className="mt-4">
                                                Humidity: {datas[0].humidity.toFixed(2)} %
                                            </p>
                                            <p>
                                                Room Temperature:{" "}
                                                {datas[0].room_temperature.toFixed(2)} C
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6">
                                <Card className="text-center">
                                    <div>
                                        <RiHeartPulseLine size={150} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Blood Pressure</Card.Title>
                                        <Card.Text>
                                            <p className="mt-4">
                                                Systolic blood pressure:{" "}
                                                {datas[0].blood_pressure_high}
                                            </p>
                                            <p>
                                                Diastolic blood pressure:{" "}
                                                {datas[0].blood_pressure_low}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6 mt-5">
                                <Card className="text-center">
                                    <div>
                                        <RiPulseFill size={130} className="mt-4 me-5" />
                                        <SiOxygen size={130} className="mt-4" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Heart Rate & Spo2</Card.Title>
                                        <Card.Text>
                                            <p className="mt-4">
                                                Heart Rate: {datas[0].heartbeat.toFixed(2)} BPM
                                            </p>
                                            <p className="pb-2">Spo2: {datas[0].blood_oxygen} %</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-6 mt-5">
                                <Card className="text-center">
                                    <div>
                                        <FaTemperatureHigh size={130} className="mt-4" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>Body Temperature</Card.Title>
                                        <Card.Text>
                                            <p className="mt-4 pb-5">
                                                Temperature: {datas[0].temperature.toFixed(2)} C
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-12 mt-5">
                                <h1>ECG</h1>
                                <EcgChart username={location.state.username} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    ) : null;
};
export default Newdata;
