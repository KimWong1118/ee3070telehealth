import React, { useEffect, useState } from "react";
import "./chart.css";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    YAxis,
    Legend,
} from "recharts";
import getHealthData from "../../Functions/getHealthData";

const CusLineChart = ({ username, title, dataKey, grid, stroke }) => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        const getData = () => {
            const response = getHealthData(username);
            response.then((datas) => {
                setData(datas);
            });
        };
        getData();
    }, []);
    console.log(datas);
    return datas.length > 0 ? (
        <div className="chart">
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={datas}>
                    <XAxis dataKey="date" stroke="#5550bd" />
                    <YAxis />
                    {dataKey.map((item, i) => (
                        <Line type="monotone" dataKey={item} stroke={stroke[i]} />
                    ))}
                    <Tooltip />
                    <Legend />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    ) : (
        <div>No Data</div>
    );
};
export default CusLineChart;
