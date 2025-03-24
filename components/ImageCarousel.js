import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageZoom from "./ImageZoom";

const images = [
  "/images/hyper_u.png",
  "/images/intermarche.png",
  "/images/le_repaire.jpg",
  "/images/macdo.png",
  "/images/maxivelo.png",
  "/images/orange_bleu.png",
  "/images/chat_toque.jpeg",
];

export function ImageCarousel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className="w-full flex justify-center">
      <div className="relative max-w-xl w-full">
        <ImageZoom
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );    
}


export default ImageCarousel;
