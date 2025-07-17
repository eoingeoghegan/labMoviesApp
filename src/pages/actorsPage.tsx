import React, { useEffect, useState } from "react";
import ActorList from "../components/actorList";
import { ActorProps } from "../types/interfaces";

const ActorsPage: React.FC = () => {
  const [actors, setActors] = useState<ActorProps[]>([]);

  useEffect(() => {
    const fetchActors = async () => {
      
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/person?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
      );
      const data = await res.json();
      setActors(data.results);
    };

    fetchActors();
  }, []);

  return (
    <div>
      <h2>Popular Actors</h2>
      <ActorList actors={actors} />
    </div>
  );
};

export default ActorsPage;