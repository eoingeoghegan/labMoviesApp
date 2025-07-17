import React from "react";
import Actor from "../actorCard";
import Grid from "@mui/material/Grid";
import { ActorListProps } from "../../types/interfaces";

const ActorList: React.FC<ActorListProps> = ({ actors }) => {
  return (
    <Grid container spacing={2}>
      {actors.map((a) => (
        <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Actor {...a} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ActorList;
