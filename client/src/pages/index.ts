import { useQuery } from "react-query";
import { getImagePrefixURL } from "../utils/env";
import Poster from "../components/Poster";
import { listNowPlayingMovies } from "../services/movies.services";

export { useQuery, listNowPlayingMovies, getImagePrefixURL, Poster };
