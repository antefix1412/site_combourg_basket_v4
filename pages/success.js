"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import Layout from "../components/Layout"

export default function Success() {
  const router = useRouter()
  const { session_id } = router.query

  useEffect(() => {
    if (session_id) {
      // Ici, vous pouvez appeler votre API pour envoyer l'e-mail de confirmation
      fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId: session_id }),
      })
    }
  }, [session_id])

  return (
    <Layout title="Commande réussie - Club de Basket Combourg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Merci pour votre commande !</h1>
        <p className="mb-4">Votre paiement a été traité avec succès.</p>
        <p>Un e-mail de confirmation vous sera envoyé prochainement.</p>
      </div>
    </Layout>
  )
}

