import React from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import FootballTurf from "./components/products/football";
import CricketTurf from "./components/products/cricket";
import VolleyballTurf from "./components/products/volleyball";
import MultiSportsTurf from "./components/products/multisports";
import IndoorTurf from "./components/products/indoor";
import PickleTurf from "./components/products/PickleTurf";
import CircleTurf from "./components/products/circleMiniCriketStadium";
import CircleTurf360 from "./components/products/360CircleTurf";
import BadmintonCourt from "./components/products/BadmintonCourt";
import BasketBallCourt from "./components/products/basketBall";
import HomePage from "./components/homePage";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="w-screen h-screen bg-primary no-scrollbar select-none">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* product pages */}
          <Route path="/360-circle-turf" element={<CircleTurf360 />} />
          <Route path="/basket-ball" element={<BasketBallCourt />} />
          <Route path="/badminton-court" element={<BadmintonCourt />} />
          <Route path="/pickle-turf" element={<PickleTurf />} />
          <Route path="/circle-turf" element={<CircleTurf />} />
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
