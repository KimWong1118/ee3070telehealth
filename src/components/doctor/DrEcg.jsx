import React from "react";
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DrEcg = ({ datas, grid }) => {
    //debugger;
    console.log(datas);
    const parsedData = JSON.parse(datas);
    let objects = [];
    parsedData.map((item) => {
        let obj = { value: item };
        objects.push(obj);
    });
    return objects.length > 0 ? (
        <div className="chart">
            <h5 className="chartTitle">ECG</h5>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={objects}>
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
export default DrEcg;
