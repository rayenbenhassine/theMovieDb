import {
  IMAGE_URL,
  listNowPlayingMovies,
  Poster,
  useQuery,
  nowPlayingMovie,
} from ".";

export default function MovieLibrary() {
  const { isLoading, data } = useQuery(["movies"], () =>
    listNowPlayingMovies()
  );
  return (
    <div className="flex flex-col gap-6 dark:bg-slate-800 p-12">
      <h1 className="text-white text-4xl">Movie library</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(254px,1fr))] gap-4">
        {!isLoading &&
          data.results.map((result: nowPlayingMovie, key: number) => (
            <Poster
              key={key}
              movieId={result.id}
              imageUrl={IMAGE_URL + result.poster_path}
            />
          ))}
      </div>
    </div>
  );
}
