import React from "react";
import TvShow from "../tvShowCard";
import Grid from "@mui/material/Grid";
import { TvShowListProps } from "../../types/interfaces";

const TvShowList: React.FC<TvShowListProps> = ({ tvShows }) => {
  return (
    <Grid container spacing={2}>
      {tvShows.map((a) => (
        <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TvShow {...a} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TvShowList;
