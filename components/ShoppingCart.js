"use client"

import { useState } from "react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"

export default function ShoppingCart({ cart, removeFromCart }) {
  const [customerInfo, setCustomerInfo] = useState({ name: "", email: "", address: "" })
  const [isProcessing, setIsProcessing] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0)

  const handleCheckout = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setIsProcessing(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          customerInfo,
        }),
      })

      const session = await response.json()

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })

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
    <div className="border p-4 rounded-lg bg-custom-gray">
      <h2 className="text-2xl font-semibold mb-4">Votre panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2 bg-opacity-50 bg-black p-2 rounded">
                <span>
                  {item.name} ({item.color}, {item.size}
                  {item.flocking ? `, Floquage: ${item.flocking}` : ""}) - {item.totalPrice}€
                </span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Supprimer
                </button>
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
              className="w-full p-2 border rounded bg-custom-blue text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              className="w-full p-2 border rounded bg-custom-blue text-white"
              required
            />
            <textarea
              placeholder="Adresse"
              value={customerInfo.address}
              onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
              className="w-full p-2 border rounded bg-custom-blue text-white min-h-[100px]"
              required
            />
            <CardElement options={{ style: { base: { color: "white" } } }} />
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

