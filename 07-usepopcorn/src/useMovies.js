import { useState, useEffect } from 'react';

const KEY = '4db5bdde';

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoaded(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            {
              signal: controller.signal,
            }
          );

          if (!res.ok)
            throw new Error('Something went wron with fetching movies ....');

          const data = await res.json();

          if (data.Response === 'False') throw new Error('Movie not found');

          setMovies(data.Search);
          setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoaded(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError();
        return;
      }
      // hanldeCloseMovie();
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoaded, error };
}
