import React, { useEffect, useState } from "react";
import UpcomingMovieList from "../components/upcomingMovieList";
import { FilterOption, UpcomingMovieProps } from "../types/interfaces";
import Header from "../components/headerMovieList";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import FilterCard from "../components/upcomingMovieFilterUI";

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

const UpcomingMoviePage: React.FC= () => {
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovieProps[]>([]);

    // For filtering
      const [titleFilter, setTitleFilter] = useState("");
      const [genreFilter, setGenreFilter] = useState("0");
      const [drawerOpen, setDrawerOpen] = useState(false);
  
      const genreId = Number(genreFilter);
  
      const displayedUpcomingMovies = upcomingMovies
      .filter((u: UpcomingMovieProps) => {
        return u.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
      })
      .filter((m: UpcomingMovieProps) => {
        return genreId > 0 ? m.genre_ids?.includes(genreId) : true;
      });
  
     const handleChange = (type: FilterOption, value: string) => {
        if (type === "title") setTitleFilter(value);
        else setGenreFilter(value);
      };

  useEffect(() => {
    fetch(
        
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        //console.log(json)
        return json.results;
      })
      .then((upcomingMovies) => {
        setUpcomingMovies(upcomingMovies);
      });
  }, []);

  return (
      <>
    <div>
      <Header title={"Discover Upcoming Movies"} />
      
    </div>
    <Grid container sx={styles.root}>
        =
        <Grid item container spacing={5}>
          <UpcomingMovieList upcomingMovies={displayedUpcomingMovies}></UpcomingMovieList>
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

export default UpcomingMoviePage;