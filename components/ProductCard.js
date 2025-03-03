"use client"

import { useState } from "react"
import Image from "next/image"
import ImageZoom from "@/components/ImageZoom";

export default function ProductCard({ product, addToCart }) {
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [flocking, setFlocking] = useState("")

  const handleAddToCart = () => {
    if (!color || !size) {
      alert("Veuillez sélectionner une couleur et une taille.")
      return
    }
    if (flocking && flocking.length !== 2) {
      alert("Le floquage doit contenir exactement 2 lettres.")
      return
    }
    const flockingPrice = flocking ? 2 : 0
    addToCart(product, color, size, flocking, flockingPrice)
  }

  return (
    <div className="border p-4 rounded-lg bg-custom-gray">
      <ImageZoom src={product.image} />

      <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
      <p className="text-lg">Prix : {product.price}€</p>
      <select
        className="mt-2 w-full p-2 bg-custom-blue text-white border border-white rounded"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">Choisir une couleur</option>
        <option value="Blanc">Blanc</option>
        <option value="Noir">Noir</option>
        <option value="Rouge">Rouge</option>
      </select>
      <select
        className="mt-2 w-full p-2 bg-custom-blue text-white border border-white rounded"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="">Choisir une taille</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <div className="mt-2">
        <label className="block">Floquage (2 lettres max) :</label>
        <input
          type="text"
          maxLength={2}
          value={flocking}
          onChange={(e) => setFlocking(e.target.value.toUpperCase())}
          className="w-full border rounded px-2 py-1 bg-custom-blue text-white"
        />
        {flocking && <p className="text-sm mt-1">+2€ pour le floquage</p>}
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-custom-blue text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Ajouter au panier
      </button>
    </div>
  )
}

