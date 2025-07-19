import React, { useEffect, useState } from "react";
import UpcomingMovieList from "../components/upcomingMovieList";
import { UpcomingMovieProps } from "../types/interfaces";

const UpcomingMoviePage: React.FC= () => {
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovieProps[]>([]);

  useEffect(() => {
    fetch(
        
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        //console.log(json)
        return json.results;
      })
      .then((upcomingMovies) => {
        setUpcomingMovies(upcomingMovies);
      });
  }, []);

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <UpcomingMovieList upcomingMovies={upcomingMovies} />
    </div>
  );
};

export default UpcomingMoviePage;