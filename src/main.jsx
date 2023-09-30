import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter , Route,  Routes } from "react-router-dom";
import Homepage from './Pages/Homepage'
import HundredHoursYoga from "./Components/100HoursYogaCourse/HundredHoursYoga";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
           <Routes>
                <Route exact path="/" element={<Homepage/>}></Route>
                <Route exact path="/100-hour-yoga-teacher-training" element={<HundredHoursYoga/>}></Route>

            </Routes>
    </BrowserRouter>
  </React.StrictMode>
);