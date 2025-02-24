import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-custom-gray">
      <div className="container mx-auto px-4 py-4">
        <div className="items-center md:justify-between">
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo du club" width={112} height={50} className="mb-4 md:mb-0" />
          </Link>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4">
              <li>
                <Link href="/" className="text-white font-bold hover:bg-gray-200 hover:text-black px-2 py-1 rounded">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/equipes"
                  className="text-white font-bold hover:bg-gray-200 hover:text-black px-2 py-1 rounded"
                >
                  Photos d'équipes
                </Link>
              </li>
              <li>
                <Link
                  href="/organigramme"
                  className="text-white font-bold hover:bg-gray-200 hover:text-black px-2 py-1 rounded"
                >
                  Organigramme
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white font-bold hover:bg-gray-200 hover:text-black px-2 py-1 rounded"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/boutique"
                  className="text-white font-bold hover:bg-gray-200 hover:text-black px-2 py-1 rounded"
                >
                  Boutique
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

