"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import ShoppingCart from "../components/ShoppingCart";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const products = [
  { id: 1, name: "T-shirt", price: 50, image: "/images/image.png" },
  { id: 2, name: "Polo", price: 1, image: "/images/image.png" },
  { id: 3, name: "Pull", price: 80, image: "/images/image.png" },
];

export default function Boutique() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, color, size, flocking) => {
    const flockingPrice = flocking ? 2 : 0;
    setCart([
      ...cart,
      {
        ...product,
        color,
        size,
        flocking,
        totalPrice: product.price + flockingPrice,
      },
    ]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Layout title="Boutique - Club de Basket Combourg">
      <h1 className="text-4xl font-bold mb-6">Boutique</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Produits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
        </Elements>
      </div>
    </Layout>
  );
}
