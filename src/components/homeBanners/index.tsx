"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { SlBadge } from "react-icons/sl";
import TextHoverAnimation from "../textHoverAnimation";

const pages = [
  { title: "360 Circle Turf", description: "Next-gen 360° view turf experience.", image: "/CircleMiniCricketStadiumTurff/PLT_00017.jpg", route: "/360-circle-turf" },
  { title: "Basketball Court", description: "Professional standard courts for ballers.", image: "/basketBall/2.webp", route: "/basket-ball" },
  { title: "Badminton Court", description: "Book indoor/outdoor badminton courts.", image: "/badminton/3.webp", route: "/badminton-court" },
  { title: "Pickle Turf", description: "Fun pickleball courts for everyone.", image: "/pickleTurf/pickle-turf-004.jpg", route: "/pickle-turf" },
  { title: "Circle Turf", description: "Circular multi-use turf spaces.", image: "/CircleMiniCricketStadiumTurff/PLT_00022.jpg", route: "/circle-turf" },
  { title: "Football Turf", description: "5-a-side and 7-a-side football turfs.", image: "/Football/1.webp", route: "/football-turf" },
  { title: "Cricket Turf", description: "Practice nets and mini cricket grounds.", image: "/homepageSlideImages/5.jpeg", route: "/cricket-turf" },
  { title: "Multi Sports Turf", description: "All-in-one turf for multiple games.", image: "/homepageSlideImages/5.jpeg", route: "/multi-sports-turf" },
  { title: "Indoor Turf", description: "Premium indoor turf solutions.", image: "/pickleTurf/pickle-turf-006.jpg", route: "/indoor-turf" },
];

const HomeBanners: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen w-full bg-black text-white select-none overflow-hidden">
      {/* Background Image */}
      <img
        src="/Home.jpg"
        alt="GameOn Solution"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-1"
      />

      {/* Header Text */}
      <section className="w-full px-6 pt-12">
        <div className="tet-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-[2.5rem] flex items-center justify-center gap-2 font-primary text-white uppercase leading-tight">
            <span className="text-secondary"><SlBadge /></span>
            <TextHoverAnimation text="GameOn" />
            <span className="text-secondary">
              <TextHoverAnimation text="Solution" />
            </span>
            <TextHoverAnimation text="Ads" />
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pages.map((page, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer transform"
              onClick={() => navigate(page.route)}
            >
              <img
                src={page.image}
                alt={page.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{page.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{page.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomeBanners;
