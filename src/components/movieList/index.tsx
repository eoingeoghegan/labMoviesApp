//We use the Material’s Grid system above to enable a responsive UI. For example, when the browser’s viewport is extra-large (xl), 
//we allow six cards per row, whereas a small viewport (sm) allows only two cards per row

import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import { BaseMovieListProps } from "../../types/interfaces";

const MovieList: React.FC<BaseMovieListProps> = ({movies, action}) => {
  const movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={action}/>
    </Grid>
  ));
  return movieCards;
}

  export default MovieList;
