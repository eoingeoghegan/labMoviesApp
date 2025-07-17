import React from "react";

import Grid from "@mui/material/Grid";
import ActorList from "../components/actorList";
import { ActorListProps } from "../types/interfaces";
 
const styles = {
  root: {
    padding: "20px",
  },
};



const ActorListPage: React.FC<ActorListProps> = ({actors}) => {
  return (
    <Grid container sx={styles.root}>
      
      <Grid item container spacing={5}>
        <ActorList actors={actors}></ActorList>
      </Grid>
    </Grid>
  );
};
export default ActorListPage;
