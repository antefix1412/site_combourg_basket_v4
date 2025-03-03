"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageZoom({ src }) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Fonction pour fermer la modale
  const closeZoom = () => setIsZoomed(false);

  return (
    <div>
      {/* Image d'origine */}
      <div className="cursor-pointer" onClick={() => setIsZoomed(true)}>
        <Image
          src={src}
          alt="Produit"
          width={200}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Si zoom activé, afficher la modale centrée */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeZoom} // Ferme la modale si on clique en dehors de l'image
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture lorsque l'on clique sur l'image zoomée
          >
            <div className="absolute top-0 right-0 p-2 text-white cursor-pointer" onClick={closeZoom}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <Image
              src={src}
              alt="Produit"
              width={500}  // Taille de l'image agrandie
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
