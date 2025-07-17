//We use the Material’s Grid system above to enable a responsive UI. For example, when the browser’s viewport is extra-large (xl), 
//we allow six cards per row, whereas a small viewport (sm) allows only two cards per row

import React from "react";
import Actor from "../actorCard";
import Grid from "@mui/material/Grid";
import { ActorListProps } from "../../types/interfaces";

const ActorList: React.FC<ActorListProps> = ({actors}) => {
  const actorCards = actors.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={a.id} {...a} />
    </Grid>
  ));
  return actorCards;
}

  export default ActorList;
