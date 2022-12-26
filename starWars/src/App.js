import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApiHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetch(
        'https://react-http-cc64a-default-rtdb.firebaseio.com/movies.json'
      );
      if (!result.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await result.json();

      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchApiHandler();
  }, [fetchApiHandler]);

  const addMovieHandler = async (movie) => {
    try {
      const result = await fetch(
        'https://react-http-cc64a-default-rtdb.firebaseio.com/movies.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(movie),
        }
      );
      const data = await result.json();
      console.log('🚀 ~ file: App.js:55 ~ addMovieHandler ~ data', data);
    } catch (err) {
      console.log(err);
    }
  };

  let content;

  if (!isLoading && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (!isLoading && movies.length === 0) {
    content = <p>Found no movies</p>;
  }
  if (!isLoading && error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchApiHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
