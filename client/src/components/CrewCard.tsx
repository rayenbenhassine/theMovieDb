import { IMAGE_URL, crew } from ".";

interface Props {
  crew: crew;
}

export default function CrewCard({ crew }: Props) {
  return (
    <div>
      <img src={IMAGE_URL + crew.profilePath} alt="profile" />
      <p className="text-sm">{crew.name}</p>
      <p className="text-stone-300 text-sm">{crew.job}</p>
    </div>
  );
}
