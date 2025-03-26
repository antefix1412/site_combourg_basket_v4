import Layout from "../components/Layout"
import Image from "next/image"

export default function Contact() {
  return (
    <Layout title="Contact - Club de Basket Combourg">
      <h1 className="text-4xl font-bold mb-6">Le planning des entrainements</h1>
      <div className="contact-info bg-custom-gray rounded-lg p-8">
        <Image
        src="/images/exterieur_salle.jpeg"
        alt="Extérieur de la salle"
        width={400}
        height={300}
        style={{ height: "auto" }}
        layout="responsive"
        className="rounded-lg"
        />
        
      </div>
    </Layout>
  )
}

