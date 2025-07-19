import React, { useEffect, useState } from "react";
import TvShowList from "../components/tvShowList";
import { TvShowProps } from "../types/interfaces";

const TvShowPage: React.FC= () => {
  const [tvShows, setTvShows] = useState<TvShowProps[]>([]);

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
    <div>
      <h2>Popular TvShows</h2>
      <TvShowList tvShows={tvShows} />
    </div>
  );
};

export default TvShowPage;