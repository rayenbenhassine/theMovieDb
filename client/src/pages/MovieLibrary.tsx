import { useQuery, listNowPlayingMovies, getImagePrefixURL, Poster } from ".";

export default function MovieLibrary() {
  const { isLoading, data } = useQuery(["movies"], () =>
    listNowPlayingMovies()
  );
  return (
    <div className="flex flex-col gap-6 dark:bg-slate-800 p-12">
      <h1 className="text-white text-4xl">Movie library</h1>
      <div className="grid grid-cols-5 gap-4">
        {!isLoading &&
          data.results.map((result: any, key: number) => (
            <div className="shadow-lg h-auto transition ease-in-out rounded-md hover:scale-105 hover:cursor-pointer hover:shadow-2xl">
              <Poster
                movieId={result.id}
                imageUrl={getImagePrefixURL() + result.poster_path}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
