import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter , Route,  Routes } from "react-router-dom";
import Homepage from './Pages/Homepage'
import HundredHoursYoga from "./Pages/HundredHoursYoga";
import TwoHundredHoursYoga from "./Pages/TwoHundredHoursYoga";
import ThreeHundreHoursYoga from "./Pages/ThreeHundredHoursYoga";
import TwoPlusFiftyHoursYoga from "./Pages/TwoPlusFiftyHoursYoga";
import FiFtyHoursAerialYoga from "./Pages/FiFtyHoursAerialYoga";
import HundredHoursAerialYoga from "./Pages/HundredHoursAerialYoga";
import ParentalYoga from "./Pages/ParentalYoga";
import IndependenceDayRreat from "./Pages/IndependenceDayRreat";
import MindfullnessYoga from "./Pages/MindfullnessYoga";
import StressFreeYoga from "./Pages/StressFreeYoga";
import BreathWorkYoga from "./Pages/BreathWorkYoga";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
           <Routes>
                <Route exact path="/" element={<Homepage/>}></Route>
                <Route exact path="/100-hour-yoga-teacher-training" element={<HundredHoursYoga/>}></Route>
                <Route exact path="/200-hour-yoga-teacher-training" element={<TwoHundredHoursYoga/>}></Route>
                <Route exact path="/300-hour-yoga-teacher-training" element={<ThreeHundreHoursYoga/>}></Route>
                <Route exact path="/200+50-hour-yoga+aerial-teacher-training" element={<TwoPlusFiftyHoursYoga/>}></Route>
                <Route exact path="/50-hour-aerial-yoga-teacher-training" element={<FiFtyHoursAerialYoga/>}></Route>
                <Route exact path="/100-hour-aerial-yoga-teacher-training" element={<HundredHoursAerialYoga/>}></Route>
                <Route exact path="/prenatal-and-postnatal-yoga-teacher-training" element={<ParentalYoga/>}></Route>
                <Route exact path="/INDEPENDENCE-DAY-RETREAT" element={<IndependenceDayRreat/>}></Route>
                <Route exact path="/STRESS-FREE-TRAINING" element={<StressFreeYoga/>}></Route>
                <Route exact path="/BREATHE-AND-WORK-TRAINING" element={<BreathWorkYoga/>}></Route>
                <Route exact path="/MINDFULLNESS-TRAINING" element={<MindfullnessYoga/>}></Route>
                {/* <Route exact path="/BRAIN-BODY-CONNECT-WORKSHOP" element={<BrainBodyConnectYoga/>}></Route>
                <Route exact path="/SPINE-AWARENESS-AND-CARE-WORKSHOP" element={<SpineAwarenessYoga/>}></Route>
                <Route exact path="/YOGA-FOR-STRESS-AND-ANXIETY" element={<StressAnxietyYoga/>}></Route>
                <Route exact path="/FACE-YOGA-WORKSHOP" element={<FaceYoga/>}></Route>
                <Route exact path="/POWER-OF-BREATHING-WORKSHOP" element={<BreathingYoga/>}></Route>
                <Route exact path="/GUT-AND-BRAIN-CONNECT-WORKSHOP" element={<GutBrainYoga/>}></Route>
                <Route exact path="/MUDRA-WORKSHOP" element={<MudraYoga/>}></Route>

                <Route exact path="/YOGA-WITH-BLOCK-AND-OTHER-PROPS" element={<BlockAndPropsYoga/>}></Route>
                <Route exact path="/SOUND-HEALING-WORKSHOP" element={<SoundHealingYoga/>}></Route> */}

            </Routes>
    </BrowserRouter>
  </React.StrictMode>
);