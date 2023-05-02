import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';

import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import MovieDescription from './MovieDescrption';


function App() {

  const [movies, setMovies] = useState([
    { id: 1, title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', posterUrl: 'https://m.media-amazon.com/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg', rating: 9.3, trailerLink: 'https://www.youtube.com/embed/6hB3S9bIaco',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 2, title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', posterUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', rating: 9.2, trailerLink: 'https://www.youtube.com/embed/6hB3S9bIaco',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 3, title: 'The Dark Knight', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', posterUrl: 'https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SL1500_.jpg', rating: 9.0 }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterUrl: '', rating: '' });
  const [search, setSearch] = useState('')
  const handleSearch = (query) => {
    setSearch(query)
  }
  const handleAddMovie = () => {
    setShowForm(true);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMovies([...movies, { ...newMovie, id: Date.now() }]);
    setNewMovie({ title: '', description: '', posterUrl: '', rating: '' });
    setShowForm(false);
  }
  const filtredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase()) || movie.rating.toString().includes(search)
  })


  return (
    <>
    <div>
    <Routes>


    <Route exact path="/" component={<MovieList movies={filtredMovies}/>}/>
    <Route path="/movie/:id" element={<MovieDescription movies={filtredMovies}/>}/>
    </Routes>
    </div>
      <MovieList movies={filtredMovies} />
      <button onClick={handleAddMovie}>Add Movie</button>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input name="title" value={newMovie.title} placeholder="Title" onChange={handleInputChange} />
          <input name="rating" value={newMovie.rating} placeholder="Rating" onChange={handleInputChange} />
          <input name="description" value={newMovie.description} placeholder="Description" onChange={handleInputChange} />
          <input name="posterUrl" value={newMovie.posterUrl} placeholder="Poster URL" onChange={handleInputChange} />
          <button type="submit">Add New Movie</button>
        </form>
      )}

      <SearchBar onChange={handleSearch}></SearchBar>

    </>


  )
}

export default App;
