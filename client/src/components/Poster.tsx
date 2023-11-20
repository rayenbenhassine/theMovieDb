import { Link } from "react-router-dom";

type Props = {
  movieId: number;
  imageUrl: string;
};

export default function Poster({ movieId, imageUrl }: Props) {
  return (
    <Link to={`/movie/${movieId}`}>
      <img className="rounded-md object-cover" src={imageUrl} alt="image" />;
    </Link>
  );
}
