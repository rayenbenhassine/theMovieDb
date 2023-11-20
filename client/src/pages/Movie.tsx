import { useParams } from "react-router-dom";
import { getMovie } from "../services/movies.services";
import { useQuery } from "react-query";

export default function Movie() {
  const { movieId } = useParams();
  const { isLoading, data } = useQuery(["movie"], () => getMovie(movieId));
  return <div>{movieId}</div>;
}
