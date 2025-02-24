import Layout from "../components/Layout"
import Image from "next/image"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">Bienvenue au Club de Basket de Combourg</h1>
      <div className="contact-info bg-custom-gray grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Qui sommes nous ?</h2>
          <p className="mb-4">
            La Chateaubriand Combourg Basket est une section de l'association la Chateaubriand, loi 1901, proposant
            l'enseignement et la pratique du basket-ball sur la commune de Combourg depuis 1928. Elle dispose de 25
            équipes des babys (U7) aux vétérans. L'équipe phare du club évolue en régional masculin.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Les valeurs du club :</h2>
          <ul className="list-none">
            <li>🏀 Convivialité</li>
            <li>🤝 Entraide</li>
            <li>🎖️ Respect</li>
          </ul>
        </div>
        <div>
          <Image
            src="/images/img_index.png"
            alt="Équipe de basket"
            width={500}
            height={300}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
      </div>
    </Layout>
  )
}

