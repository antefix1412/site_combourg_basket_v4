"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

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

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-custom-gray z-50 shadow-md transition-all duration-500 ease-in-out ${scrolled ? "py-12" : "py-4"}`}
      >
        <div className="container mx-auto px-4 relative">
          {/* Logo */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              scrolled ? "absolute left-8 top-1/2 transform -translate-y-1/2" : "text-center mb-4 mt-2"
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
                priority
              />
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav
            className={`hidden lg:block transition-all duration-500 ease-in-out ${
              scrolled ? "absolute right-8 top-1/2 transform -translate-y-1/2 w-[calc(100%-300px)]" : "text-center mt-2"
            }`}
          >
            <ul className={`flex ${scrolled ? "justify-end" : "justify-center"} space-x-8`}>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-white font-bold hover:bg-gray-200 hover:text-black px-3 py-2 rounded transition-all duration-300 ${
                      scrolled ? "text-lg" : "text-base"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton menu mobile */}
          <div
            className={`lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out`}
          >
            <button type="button" className="text-white" onClick={() => setMobileMenuOpen(true)}>
              <Menu className={`transition-all duration-300 ${scrolled ? "h-10 w-10" : "h-6 w-6"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Espacement pour le contenu */}
      <div className={`transition-all duration-500 ease-in-out ${scrolled ? "h-32" : "h-64"}`}></div>

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
                  priority
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

