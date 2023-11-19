import {axios} from ".";

export const listNowPlayingMovies = async () => {
  try {
      const res = await axios.get("/movie-list-vite");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
