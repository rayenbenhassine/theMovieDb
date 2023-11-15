import {axios} from ".";

export const listNowPlayingMovies = async () => {
  try {
    const res = await axios.get("http://localhost:8080/movie-list-vite");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
