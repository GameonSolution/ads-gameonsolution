"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { SlBadge } from "react-icons/sl";
import TextHoverAnimation from "../textHoverAnimation";

const pages = [
  {
    title: "Aqua Eco-Friendly Turf",
    description: "Sustainable turf with water-efficient technology.",
    image: "/aquaturf/1.webp",
    route: "/aqua-eco-friendly-turf",
  },
  {
    title: "360 Circle Turf",
    description: "Experience the next-gen 360° view turf design.",
    image: "/360/6.webp",
    route: "/360-circle-turf",
  },
  {
    title: "360 Circle Turf Tamil Version",
    description: "Localized version of the 360° Circle Turf experience.",
    image: "/360/4.webp",
    route: "/360-circle-turf-tamil",
  },
  {
    title: "Diagonal Pitch",
    description: "Modern turf layout optimized for performance.",
    image: "/diagonal/1.webp",
    route: "/diagonal-pitch",
  },
  {
    title: "Oval Turf",
    description: "Elegant oval-shaped turf design for flexible play.",
    image: "/oval/O1.webp",
    route: "/oval-turf",
  },
  {
    title: "Semi Circle Turf",
    description: "Smart design for limited spaces & small arenas.",
    image: "/semicircle/1.webp",
    route: "/semi-circle-turf",
  },
  {
    title: "U Shape Turf",
    description: "Innovative U-shaped turf design for dual-side games.",
    image: "/Ushape/UST.webp",
    route: "/u-shape-turf",
  },
  {
    title: "Eco Friendly Turf",
    description: "Safe, non-toxic, and durable turf for every use.",
    image: "/ecofriendly/4.webp",
    route: "/eco-friendly-turf",
  },
  {
    title: "Skating Rink",
    description: "Smooth, high-grip surfaces for skating lovers.",
    image: "/skating/S3.webp",
    route: "/skating-rink",
  },
  {
    title: "Badminton Court",
    description: "Indoor and outdoor badminton courts for all levels.",
    image: "/badminton/3.webp",
    route: "/badminton-court",
  },
  {
    title: "Basketball Court",
    description: "Professional-grade basketball flooring systems.",
    image: "/basketBall/2.webp",
    route: "/basket-ball",
  },
  {
    title: "PickleBall Court",
    description: "Vibrant pickleball courts for casual and pro play.",
    image: "/pickleTurf/Pickle1.webp",
    route: "/pickle-turf",
  },
  {
    title: "Football Turf",
    description: "5-a-side and 7-a-side FIFA-standard football turfs.",
    image: "/Football/1.webp",
    route: "/football-turf",
  },
  {
    title: "Cricket Turf",
    description: "Practice nets and professional cricket grounds.",
    image: "/homepageSlideImages/5.jpeg",
    route: "/cricket-turf",
  },
  {
    title: "Multi Sports Turf",
    description: "Versatile turf designed for multiple sports in one space.",
    image: "/blog/Blog1.webp",
    route: "/multi-sports-turf",
  },
  {
    title: "Indoor Turf",
    description: "Premium indoor turf solutions for limited spaces.",
    image: "/CricketNets/Cricket-Nets-002.webp",
    route: "/indoor-turf",
  },
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
        <div className="text-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-[2.5rem] flex items-center justify-center gap-2 font-primary text-white uppercase leading-tight">
            <span className="text-secondary">
              <SlBadge />
            </span>
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
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => navigate(page.route)}
            >
              <img
                src={page.image}
                alt={page.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {page.title}
                </h3>
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
