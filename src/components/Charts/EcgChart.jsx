import React, { useEffect, useState } from "react";
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import getLatestEcg from "../../Functions/getLatestEcg";

const EcgChart = ({ username, grid }) => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        const getData = () => {
            const response = getLatestEcg(username);
            response.then((datas) => {
                setData(datas);
            });
        };
        getData();
    }, []);
    datas.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
    console.log(datas);
    return datas.length > 0 ? (
        <div className="chart">
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={datas}>
                    <Line dot={false} type="monotone" dataKey="value" stroke="#5550bd" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    ) : (
        <div>No Data</div>
    );
};
export default EcgChart;
