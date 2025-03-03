import Layout from "../components/Layout"
import Image from "next/image"
import ImageZoom from "@/components/ImageZoom";

const teams = [
  { name: "SM1", image: "/images/img_index.png" },
  { name: "SM2", image: "/images/image.png" },
  { name: "SM3", image: "/images/image.png" },
  { name: "U21", image: "/images/image.png" },
  { name: "U18 M1", image: "/images/image.png" },
  { name: "U18 M2", image: "/images/image.png" },
  { name: "U18 M3", image: "/images/image.png" },
  { name: "U15 M1", image: "/images/image.png" },
  { name: "U15 M2", image: "/images/image.png" },
  { name: "U13 M1", image: "/images/image.png" },
  { name: "U13 M2", image: "/images/image.png" },
  { name: "U13 M3", image: "/images/image.png" },
  { name: "U11 M1", image: "/images/image.png" },
  { name: "U11 M2", image: "/images/image.png" },
  { name: "U9-1", image: "/images/image.png" },
  { name: "U9-2", image: "/images/image.png" },
  { name: "U7", image: "/images/image.png" },
]

const femaleTeams = [
  { name: "SF1", image: "/images/image.png" },
  { name: "SF2", image: "/images/image.png" },
  { name: "U18 F1", image: "/images/image.png" },
  { name: "U18 F2", image: "/images/image.png" },
  { name: "U15 F1", image: "/images/image.png" },
  { name: "U13 F1", image: "/images/image.png" },
  { name: "U11 F1", image: "/images/image.png" },
]

export default function Equipes() {
  return (
    <Layout title="Équipes - Club de Basket Combourg">
      <h1 className="text-4xl font-bold mb-6">Photos d'équipes</h1>

      <h2 className="text-3xl font-semibold mb-4">Équipes Masculines</h2>
      <div className="equipes-grid">
        {teams.map((team, index) => (
          <div key={index} className="equipe" data-aos="flip-right" data-aos-offset="125">
            <h3 className="text-xl font-semibold mb-2">Équipe {team.name}</h3>
            <ImageZoom 
            src={team.image}
            alt={`Équipe ${team.name}`}
            width={250}
            height={200}
            style={{ height: "auto" }}
            layout="responsive"
            className="rounded-lg"
          /> 
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-4 mt-8">Équipes Féminines</h2>
      <div className="equipes-grid">
        {femaleTeams.map((team, index) => (
          <div key={index} className="equipe" data-aos="flip-right" data-aos-offset="125">
            <h3 className="text-xl font-semibold mb-2">Équipe {team.name}</h3>
            <ImageZoom 
            src={team.image}
            alt={`Équipe ${team.name}`}
            width={250}
            height={200}
            style={{ height: "auto" }}
            layout="responsive"
            className="rounded-lg"/> 
          </div>
        ))} 
      </div>
    </Layout>
  )
}

