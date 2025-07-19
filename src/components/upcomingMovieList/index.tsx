import React from "react";
import UpcomingMovie from "../upcomingMovieCard";
import Grid from "@mui/material/Grid";
import { UpcomingMovieListProps } from "../../types/interfaces";

const UpcomingMovieList: React.FC<UpcomingMovieListProps> = ({ upcomingMovies }) => {
  return (
    <Grid container spacing={2}>
      {upcomingMovies.map((u) => (
        <Grid key={u.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <UpcomingMovie {...u} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UpcomingMovieList;
