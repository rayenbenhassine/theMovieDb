import { IMAGE_URL, cast } from ".";

interface Props {
  cast: cast;
}

export default function CastCard({ cast }: Props) {
  return (
    <div className="min-w-[200px]">
      <img
        src={IMAGE_URL + cast.profilePath}
        alt="profile"
        className="rounded-md"
      />
      <p className="text-sm">{cast.name}</p>
      <p className="text-stone-300 text-sm">{cast.character}</p>
    </div>
  );
}
