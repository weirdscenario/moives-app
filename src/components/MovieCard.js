import { Link } from "react-router-dom";
function MovieCard(props) {
  const { title, description, posterUrl, rating ,trailer,movie} = props;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} style={{height:100,width:100}}/>
      <div className="movie-details">
        <h3>{title} <Link key={movie.id} to={`/movie/${movie.id}`}>Take me to movie desc</Link></h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        <p> <Link to={trailer}>Watch the trailer</Link></p>
      </div>
    </div>
  );
}
export default MovieCard