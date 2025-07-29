import React, { useEffect, useState } from "react";
import TvShowList from "../components/tvShowList";
import { FilterOption, TvShowProps } from "../types/interfaces";
import Header from "../components/headerMovieList";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import FilterCard from "../components/tvShowFilterUI"

const styles = {
  root: {
    padding: "20px",
  }, fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

const TvShowPage: React.FC= () => {
  const [tvShows, setTvShows] = useState<TvShowProps[]>([]);

  // For filtering
    const [titleFilter, setTitleFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const genreId = Number(genreFilter);

    const displayedTvShows = tvShows
    .filter((t: TvShowProps) => {
      return t.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m: TvShowProps) => {
      return genreId > 0 ? m.genre_ids?.includes(genreId) : true;
    });

   const handleChange = (type: FilterOption, value: string) => {
      if (type === "title") setTitleFilter(value);
      else setGenreFilter(value);
    };

  useEffect(() => {
    fetch(
        
      `https://api.themoviedb.org/3/discover/tv?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        //console.log(json)
        return json.results;
      })
      .then((tvShows) => {
        setTvShows(tvShows);
      });
  }, []);

  return (
   <>
    <div>
      <Header title={"Discover Tv Shows"} />
      
    </div>
    <Grid container sx={styles.root}>
        =
        <Grid item container spacing={5}>
          <TvShowList tvShows={displayedTvShows}></TvShowList>
        </Grid>
      </Grid>
      <Fab
          color="secondary"
          variant="extended"
          onClick={() => setDrawerOpen(true)}
          sx={styles.fab}
        >
          Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
   </> 
  );
};

export default TvShowPage;