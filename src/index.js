import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import Registration from "./components/Pages/LoginPage/Registration";
import Info from "./components/Pages/Info/Info";
import Newdata from "./components/Pages/NewData/Newdata";
import ECG from "./components/Pages/ECG/ecg";
import DrLogins from "./components/Pages/LoginPage/DrLogin";
import DrDashboard from "./components/Pages/Dashboard/DrDashboard";
import AllUserInfo from "./components/Pages/Info/AlluserInfo";
import Suggestions from "./components/Pages/Suggestion/Suggestions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Registration />} />
                <Route path="/info" element={<Info />} />
                <Route path="/newdata" element={<Newdata />} />
                <Route path="/ecg" element={<ECG />} />
                <Route path="/login/dr" element={<DrLogins />} />
                <Route path="/dashboard/dr" element={<DrDashboard />} />
                <Route path="/info/dr" element={<AllUserInfo />} />
                <Route path="/suggestions" element={<Suggestions />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
