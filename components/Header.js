"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'


const navigation = [
  { name: 'Accueil', href: '/' },
  { name: "Photos d'équipes", href: '/equipes' },
  { name: "Organigramme", href: '/organigramme' },
  { name: "Contact", href: '/contact' },
  { name: "Boutique", href: '/boutique' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-custom-gray py-4">
      <div className="container mx-auto px-4 items-center md:justify-between">
        <Link href="/" className="flex-shrink-0 mb-4 md:mb-0">
          <Image src="/images/logo.png" alt="Logo du club" width={112} height={50} style={{ height: "auto" }} />
        </Link>
        
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-white font-bold hover:bg-gray-200 hover:text-black px-2 py-1 rounded">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:hidden ml-auto">
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-custom-blue w-64 h-full p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <Link href="/">
                <Image src="/images/logo.png" alt="Logo du club" width={112} height={50} style={{ height: "auto" }} className="mb-4 md:mb-0" />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="block text-white font-medium" onClick={() => setMobileMenuOpen(false)}>
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
