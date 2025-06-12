import React,  {useState, useEffect} from "react";
import Header from "../components/headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../components/movieList";
import { BaseMovieProps } from "../types/interfaces";
 
const styles = {
  root: {
    padding: "20px",
  },
};



const MovieListPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);

/*
  TMDB uses the api_key in the query string of the URL to authenticate the HTTP request. 
  The page attribute at the end indicates the subset of movies we are requesting.
  It can range from 1 to 1000, where 1 means the first 20 movies, 2 means movies 21 to 40, etc.
*/
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=3`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        return json.results;
      })
      .then((movies) => {
        setMovies(movies);
      });
  }, []);

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={"Home Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <MovieList movies={movies}></MovieList>
      </Grid>
    </Grid>
  );
};
export default MovieListPage;
