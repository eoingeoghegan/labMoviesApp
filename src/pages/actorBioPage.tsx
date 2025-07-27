import React from "react";
import { getActor, getActorsImages } from '../api/tmdb-api'

import ActorBio from "../components/actorBio";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ActorProps} from "../types/interfaces";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const styles = {
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTile: { 
    width: "100%",
    height: "auto",
  },

};



const ActorBioPage: React.FC= () => {
  const { id } = useParams();
  const { data: actorBio,} = useQuery<ActorProps>(
    ["biography", id],
    ()=> getActor(id||"")
  );
const { data: images = [] } = useQuery(
  ["actorImages", id],
  () => getActorsImages(id || "")
);


  

  return (
    <>
      {actorBio ? (
        <>
         
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <Grid item xs={3}>
              <div >
                <ImageList sx={styles.imageListRoot} cols={1}>
                  {images.map((image) => (
                    <ImageListItem
                      key={image.file_path}
                      sx={styles.gridListTile}
                      cols={1}
                    >
                     <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={'Image alternative'}
                      />                    
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </Grid>
            <Grid item xs={9}>
              <ActorBio {...actorBio} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default ActorBioPage;
