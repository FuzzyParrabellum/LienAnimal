import { SiMastodon, SiSlack, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";

interface TeamItemProps {
  name: string;
  job: string;
  description: string;
  image_url: string;
}

const TeamItem: React.FC<TeamItemProps> = ({
  name,
  job,
  description,
  image_url,
}) => {
  return (
    <>
      <div className="flex flex-col items-center text-center gap-2 px-2 md:py-0 py-3">
        <div className="w-[48px] md:w-[5rem] h-[48px] md:h-[5rem] rounded-full bg-gray-500">
          {image_url}
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p>{job}</p>
        </div>
        <p className="text-sm">{description}</p>
        <div className="flex gap-2">
          <Link href="/">
            <SiMastodon className="hover:text-animalred" />
          </Link>
          <Link href="/">
            <SiX className="hover:text-animalred" />
          </Link>
          <Link href="/">
            <SiSlack className="hover:text-animalred" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamItem;
