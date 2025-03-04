"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Photos d'équipes", href: "/equipes" },
  { name: "Organigramme", href: "/organigramme" },
  { name: "Contact", href: "/contact" },
  { name: "Boutique", href: "/boutique" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Fonction pour détecter le scroll
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setScrolled(true) // L'utilisateur a fait défiler plus de 50px
    } else {
      setScrolled(false) // L'utilisateur est en haut de la page
    }
  }, [])

  useEffect(() => {
    // Ajouter un événement pour détecter le scroll
    window.addEventListener("scroll", handleScroll)

    // Nettoyer l'événement au démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <header className={`fixed top-0 left-0 w-full bg-custom-gray z-50 shadow-md transition-all duration-500 ease-in-out ${scrolled ? 'py-12' : 'py-4'}`}>
        <div className="container mx-auto px-4 relative">
          {/* Logo - initialement centré au-dessus, se déplace à gauche au scroll */}
          <div 
            className={`transition-all duration-500 ease-in-out ${
              scrolled 
                ? 'absolute left-8 top-1/2 transform -translate-y-1/2' 
                : 'text-center mb-4 mt-2'
            }`}
          >
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="Logo du club" 
                width={scrolled ? 120 : 150} 
                height={scrolled ? 87 : 65} 
                style={{ height: "auto" }} 
                className="mx-auto"
              />
            </Link>
          </div>

          {/* Menu Desktop - initialement en dessous, se déplace à droite au scroll */}
          <nav 
            className={`hidden lg:block transition-all duration-500 ease-in-out ${
              scrolled 
                ? 'absolute right-8 top-1/2 transform -translate-y-1/2' 
                : 'text-center mt-2'
            }`}
          >
            <ul className="flex space-x-10 justify-center">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-white font-bold hover:bg-gray-200 hover:text-black px-5 py-4 rounded transition-all duration-300 ${
                      scrolled ? 'text-lg' : 'text-base'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out ${
            scrolled 
              ? 'absolute right-8 top-1/2 transform -translate-y-1/2' 
              : 'absolute right-4 top-4'
          }`}>
            <button type="button" className="text-white" onClick={() => setMobileMenuOpen(true)}>
              <Menu className={`transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-6 w-6'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Ajout d'un padding pour éviter que le contenu soit caché sous la navbar */}
      <div className={`transition-all duration-500 ease-in-out ${scrolled ? 'h-44' : 'h-64'}`}></div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-custom-blue w-64 h-full p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo du club"
                  width={112}
                  height={50}
                  style={{ height: "auto" }}
                  className="mb-4"
                />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-white font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
