"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import Image from "next/image"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Photos d'équipes", href: "/equipes" },
  { name: "Organigramme", href: "/organigramme" },
  { name: "Planning des entrainements", href: "/planing" },
  { name: "Contact", href: "/contact" },
  { name: "Boutique", href: "/boutique" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative py-4" style={{ background: "transparent" }}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo du club"
            width={150}
            height={65}
            style={{ height: "auto" }}
            className="mx-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation visible au-delà de 760px */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-300 px-2 py-1 rounded text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bouton menu mobile visible en dessous de 760px */}
        <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <button type="button" className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Menu mobile actif seulement sous 760px */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          <div className="w-64 h-full p-6 shadow-md bg-transparent">
            <div className="justify-between items-center mb-6">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo du club"
                  width={112}
                  height={50}
                  style={{ height: "auto" }}
                  className="mb-4"
                  priority
                />
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-white font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
