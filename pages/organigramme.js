import Layout from "../components/Layout"
import Image from "next/image"

const members = [
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
  { name: "Nom du membre", role: "Poste", image: "/images/image.png" },
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

