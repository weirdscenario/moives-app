import MovieCard from "./MovieCard";
function MovieList(props) {
  const { movies } = props;

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterUrl={movie.posterUrl}
          rating={movie.rating}
          trailer={movie.trailerLink}
          movie={movie}

        />

      ))}
    </div>
  );
}
export default MovieList