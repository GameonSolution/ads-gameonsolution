import React from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import FootballTurf from "./components/products/football";
import CricketTurf from "./components/products/cricket";
import VolleyballTurf from "./components/products/volleyball";
import MultiSportsTurf from "./components/products/multisports";
import IndoorTurf from "./components/products/indoor";
import PickleTurf from "./components/products/PickleCourt";
import BadmintonCourt from "./components/products/BadmintonCourt";
import BasketBallCourt from "./components/products/basketBall";
import HomePage from "./components/homePage";
import Turf360 from "./components/ourproducts/Turf360";
import AquaEcoFriendly from "./components/ourproducts/AquaEcoFriendly";
import DiagonalPitch from "./components/ourproducts/DiagonalPitch";
import OvalTurf from "./components/ourproducts/OvalTurf";
import SemiCircleTurf from "./components/ourproducts/SemiCircleTurf";
import SkatingRink from "./components/ourproducts/SkatingRink";
import UShapeTurf from "./components/ourproducts/UShapeTurf";
import Turf3601 from "./components/ourproducts/Turf3601";
import EcoFriendly from "./components/ourproducts/EcoFriendly";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="w-screen h-screen bg-primary no-scrollbar select-none">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* product pages */}
          <Route path="/360-circle-turf" element={<Turf360 />} />
          <Route path="/360-circle-turf-tamil" element={<Turf3601 />} />
          <Route path="/aqua-eco-friendly-turf" element={<AquaEcoFriendly />} />
          <Route path="/diagonal-pitch" element={<DiagonalPitch />} />
          <Route path="/oval-turf" element={<OvalTurf />} />
          <Route path="/semi-circle-turf" element={<SemiCircleTurf />} />
          <Route path="/skating-rink" element={<SkatingRink />} />
          <Route path="/u-shape-turf" element={<UShapeTurf />} />
          <Route path="/eco-friendly-turf" element={<EcoFriendly />} />

          <Route path="/basket-ball" element={<BasketBallCourt />} />
          <Route path="/badminton-court" element={<BadmintonCourt />} />
          <Route path="/pickle-turf" element={<PickleTurf />} />
          <Route path="/football-turf" element={<FootballTurf />} />
          <Route path="/cricket-turf" element={<CricketTurf />} />
          <Route path="/multi-sports-turf" element={<MultiSportsTurf />} />
          <Route path="/indoor-turf" element={<IndoorTurf />} />
          <Route path="/volleyball-turf" element={<VolleyballTurf />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
};

export default App;
