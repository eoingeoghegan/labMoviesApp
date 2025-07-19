import React, { useEffect, useState } from "react";
import ActorList from "../components/actorList";

import { ActorProps } from "../types/interfaces";



  const ActorsPage: React.FC= () => {
  const [actors, setActors] = useState<ActorProps[]>([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/person?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        //console.log(json)
        return json.results;
      })
      .then((actors) => {
        setActors(actors);
      });
  }, []);

  return (
    <div>
      <h2>Popular Actors</h2>
      <ActorList actors={actors} />
    </div>
  );
};

export default ActorsPage;