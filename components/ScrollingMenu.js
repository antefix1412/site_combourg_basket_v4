"use client";
import React from "react";

const images = [
  "/images/hyper_u.png",
  "/images/intermarche.png",
  "/images/le_repaire.jpg",
  "/images/macdo.png",
  "/images/maxivelo.png",
  "/images/orange_bleu.png",
];

const ScrollingMenu = () => {
  return (
    <div className="scrollWrapper">
      <div className="scrollMenu">
        {images.map((src, index) => (
          <div className="menuItem" key={index}>
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
        {/* Duplique les images pour un effet de boucle infinie */}
        {images.map((src, index) => (
          <div className="menuItem" key={index + images.length}>
            <img src={src} alt={`Image ${index + 1}`} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingMenu;
