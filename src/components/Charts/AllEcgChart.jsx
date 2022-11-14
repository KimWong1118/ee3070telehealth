import React, { useEffect, useState } from "react";
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import getLatestEcg from "../../Functions/getLatestEcg";
import getAllECG from "../../Functions/getAllEcg";

const AllEcgChart = ({ username, grid }) => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        const response = getAllECG(username);
        response.then((datas) => {
            console.log(datas);
            setData(datas);
        });
        debugger;
    }, []);
    // datas.sort((a, b) => {
    //     return new Date(a.date) - new Date(b.date);
    // });
    // console.log(datas);
    if (datas.length == 0) {
        return <div>No data</div>;
    } else {
        return datas.map((item) => {
            let date = new Date(item.date);
            return (
                <div className="chart">
                    <h3 className="chartTitle">
                        {date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}
                    </h3>
                    <ResponsiveContainer width="100%" aspect={4 / 1}>
                        <LineChart data={item.ecg}>
                            <Line dot={false} type="monotone" dataKey="value" stroke="#5550bd" />
                            <Tooltip />
                            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            );
        });
    }
};
export default AllEcgChart;
