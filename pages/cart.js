"use client"

import { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Layout from "../components/Layout"
import ShoppingCart from "../components/ShoppingCart"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function CartPage() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_v1")
      const current = raw ? JSON.parse(raw) : []
      setCart(current)
    } catch (err) {
      console.error("Erreur lors de la lecture du panier:", err)
    }
  }, [])

  const removeFromCart = (index) => {
    const next = cart.filter((_, i) => i !== index)
    setCart(next)
    localStorage.setItem("cart_v1", JSON.stringify(next))
  }

  return (
    <Layout title="Panier - Club de Basket Combourg">
      <h1 className="text-4xl font-bold mb-6">Votre panier</h1>
      <Elements stripe={stripePromise}>
        <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      </Elements>
    </Layout>
  )
}
