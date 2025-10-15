"use client"

import { useState } from "react"
import ImageZoom from "@/components/ImageZoom";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [flocking, setFlocking] = useState("")
  const [error, setError] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleAddToCart = () => {
    if (!color || !size) {
      alert("Veuillez sélectionner une couleur et une taille.")
      return
    }
    // floquage devenu obligatoire : 2 lettres
    if (!flocking || flocking.length !== 2) {
      setError("Le floquage (2 lettres) est obligatoire.")
      return
    }
    const item = {
      ...product,
      color,
      size,
      flocking,
      // Ne plus ajouter de supplément pour le floquage
      totalPrice: product.price,
      addedAt: Date.now(),
    }

    // Lire le panier existant depuis localStorage
    try {
      const raw = localStorage.getItem("cart_v1")
      const current = raw ? JSON.parse(raw) : []
      current.push(item)
      localStorage.setItem("cart_v1", JSON.stringify(current))
      // Notification simple
      // ouvrir une petite fenêtre/modal demandant si l'utilisateur veut aller au panier
      setShowModal(true)
    } catch (err) {
      console.error("Erreur lors de l'ajout au panier:", err)
      alert("Impossible d'ajouter le produit au panier.")
    }
  }

  return (
    <div className="border p-6 rounded-lg bg-gray-800 shadow-md">
      <div className="w-full h-48 mb-4 overflow-hidden rounded">
        <ImageZoom src={product.image} />
      </div>

      <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
      <p className="text-lg mb-3">Prix : {product.price}€</p>
      <select
        className="mt-2 w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">Choisir une couleur</option>
        <option value="Blanc">Blanc</option>
        <option value="Noir">Noir</option>
        <option value="Rouge">Rouge</option>
      </select>
      <select
        className="mt-2 w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="">Choisir une taille</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <div className="mt-2 text-left">
        <label className="block mb-1">Floquage (2 lettres) : <span className="text-red-400">*</span></label>
        <input
          type="text"
          maxLength={2}
          value={flocking}
          onChange={(e) => { setFlocking(e.target.value.toUpperCase()); setError(null); }}
          className="w-full border rounded px-2 py-1 bg-gray-700 text-white"
          required
        />
  {/* floquage ne coûte plus rien */}
        {error && <p className="text-sm mt-1 text-red-400">{error}</p>}
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        Ajouter au panier
      </button>

      {/* Modal simple */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-40" onClick={() => setShowModal(false)} />
          <div className="relative bg-gray-900 text-white rounded-t-lg md:rounded-lg p-4 w-full md:max-w-md m-4">
            <div className="mb-3">Produit ajouté au panier.</div>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-3 py-2 bg-gray-700 rounded">Continuer</button>
              <button onClick={() => router.push('/cart')} className="px-3 py-2 bg-green-600 rounded">Aller au panier</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

