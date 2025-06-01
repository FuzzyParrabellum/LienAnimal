import { SiMastodon, SiSlack, SiX } from "@icons-pack/react-simple-icons";
import TeamItem from "./TeamItem";

const teamMembers = [
  {
    name: "Alice Ledoux",
    job: "Chef d'équipe",
    description:
      "Dédiée à trouver des foyers aimants pour chaque animal dans un refuge.",
    image_url: "",
  },
  {
    name: "Gérard Donovan",
    job: "Responsable Nutrition et Bien-être Animal",
    description:
      "Toujours occupé à prendre soin au mieux des animaux et de leur santé en attendant leur future famille.",
    image_url: "",
  },
  {
    name: "Mark Spencer",
    job: "Spécialiste en Adoption",
    description:
      "Connecte les familles à leur parfait compagnon à quattre pattes.",
    image_url: "",
  },
  {
    name: "Killian Falstaff",
    job: "Volontaire bénévole",
    description:
      "Quand il n'est pas occupé à jouer de la musique et peindre, il trouve toujours un moment pour être là où on a besoin de lui.",
    image_url: "",
  },
];

const TeamSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:px-10 px-2">
      <div>
        <p className="text-sm font-semibold text-center">Ensemble</p>
        <h3 className="text-2xl font-bold text-center">Notre équipe</h3>
      </div>

      <p className="mb-4 md:mb-8">Rencontrer les passionnés de LienAnimal</p>

      {/* Section Profils */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 divide-double md:divide-x-5 divide-y-3 md:divide-y-0">
          {teamMembers.map((member, index) => (
            <TeamItem
              name={member.name}
              job={member.job}
              description={member.description}
              image_url={member.image_url}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
