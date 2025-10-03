import Layout from "../components/Layout"
import Image from "next/image"
import ImageZoom from "@/components/ImageZoom";

const members = [
  { name: "ERIC FEVRIER", role: "Président", image: "/images/ERIC FEVRIER.jpg" },
  { name: "THEO TREMORIN.", role: "Vice Président et responsable sponsors", image: "/images/THEO TREMORIN.jpg" },
  { name: "CELINE MORIN", role: "Trésorerie", image: "/images/CELINE MORIN.jpg" },
  { name: "Christopher", role: "Entrainer Professionel", image: "/images/CHRISTOPHER.jpg" },
  { name: "Tanguy Richard", role: "Responsable technique", image: "/images/TANGUY RICHARD.jpg" },
  { name: "Carole-Ann Louvet", role: "Secretaria", image: "/images/CAROLE-ANN LOUVET.jpg" },
  { name: "Morgane Gautier", role: "Secretaria et planning", image: "/images/MORGANE GAUTIER.jpg" },
  { name: "Audrey Citre", role: "Planning et Communication", image: "/images/AUDREY CITRE.jpg" },
  { name: "ANTOINE SIMON", role: "Communication", image: "/images/ANTOINE SIMON.jpg" },
  { name: "ELISE VINOUSE", role: "Communication, restauration et Buvette", image: "/images/ELISE VINOUSE.jpg" },
  { name: "TYMEO LEPRIZE", role: "Restauration et Buvette", image: "/images/TYMEO LEPRIZE.jpg" },
  { name: "AXEL MORIN MARIE", role: "Restauration, Buvette et Evenement", image: "/images/AXEL MORIN MARIE.jpg" },
  { name: "JULIEN PICHON", role: "Evenement", image: "/images/JULIEN PICHON.jpg" },
  
]

export default function Organigramme() {
  return (
    <Layout title="Organigramme - Club de Basket Combourg">
      <h1 className="text-4xl font-bold mb-6">Organigramme</h1>
      <div className="organigramme-grid">
        {members.map((member, index) => (
          <div key={index} className="membre" data-aos="flip-right" data-aos-offset="125">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={200}
              height={200}
              style={{ height: "auto" }}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

