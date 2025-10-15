"use client"

import { useEffect, useState } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"

export default function ShoppingCart({ cart: propCart = null, removeFromCart: propRemove = null }) {
  const [cart, setCart] = useState(propCart || [])
  const [customerInfo, setCustomerInfo] = useState({ name: "", email: "", address: "" })
  const [isProcessing, setIsProcessing] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  useEffect(() => {
    if (propCart === null) {
      try {
        const raw = localStorage.getItem("cart_v1")
        const current = raw ? JSON.parse(raw) : []
        setCart(current)
      } catch (err) {
        console.error("Erreur lors de la lecture du panier:", err)
      }
    } else {
      setCart(propCart)
    }
  }, [propCart])

  useEffect(() => {
    // Si utilisation locale, synchroniser le localStorage
    if (propCart === null) {
      try {
        localStorage.setItem("cart_v1", JSON.stringify(cart))
      } catch (err) {
        console.error("Erreur lors de la sauvegarde du panier:", err)
      }
    }
  }, [cart, propCart])

  const removeItem = (index) => {
    if (propRemove) {
      propRemove(index)
    } else {
      const next = cart.filter((_, i) => i !== index)
      setCart(next)
    }
  }

  const total = cart.reduce((sum, item) => sum + (item.totalPrice || 0), 0)

  const handleCheckout = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setIsProcessing(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, customerInfo }),
      })

      const session = await response.json()

      const result = await stripe.redirectToCheckout({ sessionId: session.id })

      if (result.error) {
        console.error(result.error.message)
        alert("Une erreur est survenue lors de la redirection vers le paiement.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Une erreur est survenue lors de la création de la session de paiement.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-left">
      <h2 className="text-2xl font-semibold mb-4">Votre panier</h2>
      {cart.length === 0 ? (
        <p className="text-gray-300">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="mb-4 space-y-3">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-400">{item.color} • {item.size} {item.flocking ? `• ${item.flocking}` : ""}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{item.totalPrice}€</div>
                  <button onClick={() => removeItem(index)} className="mt-2 text-sm text-red-500 hover:underline">Supprimer</button>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold mb-4">Total : {total}€</p>

          <form onSubmit={handleCheckout} className="space-y-4">
            <input
              type="text"
              placeholder="Nom"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
              className="w-full p-2 border rounded bg-gray-800 text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              className="w-full p-2 border rounded bg-gray-800 text-white"
              required
            />
            <textarea
              placeholder="Adresse"
              value={customerInfo.address}
              onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
              className="w-full p-2 border rounded bg-gray-800 text-white min-h-[100px]"
              required
            />
            <CardElement options={{ style: { base: { color: "#fff" } } }} />
            <button
              type="submit"
              disabled={!stripe || isProcessing}
              className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
            >
              {isProcessing ? "Traitement..." : "Procéder au paiement"}
            </button>
          </form>
        </>
      )}
    </div>
  )
}

