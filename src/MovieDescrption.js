import { Link, useParams } from 'react-router-dom';
import React from 'react';


function MovieDescription(props) {
  const { id } = useParams();
  const movie = props.movies.find(movie => movie.id === Number(id));

  if (!movie) {
    return <div>

      <h1>Movie not found
      </h1></div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.posterUrl} style={{height:250,width:250}} /> 
      <br></br>
      <Link to={movie.trailerLink} style={{fontSize:25}}>watch trailer</Link>

    </div>
  );
}

export default MovieDescription;
