import React from "react";
import { getTvShow, getTvShowImages } from '../api/tmdb-api'

import TvShowDetails from "../components/tvShowDetails";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { TvShowDetailsProps} from "../types/interfaces";
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

// refactored, fethces images and tvShow data. Fetch live data is in src/api/tmdb-api.ts

const TvShowDetailsPage: React.FC= () => {
  const { id } = useParams();
  const { data: tvShow,} = useQuery<TvShowDetailsProps>(
    ["movie", id],
    ()=> getTvShow(id||"")
  );
const { data: images = [] } = useQuery(
  ["tvShowImages", id],
  () => getTvShowImages(id || "")
);


  

  return (
    <>
      {tvShow ? (
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
              <TvShowDetails {...tvShow} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default TvShowDetailsPage;
