//to define some types for the Movie data we will be using in our React app.

export interface BaseMovieProps {
    title: string;
    budget: number;
    homepage: string | undefined;
    id: number;
    imdb_id: string;
    original_language: string;
    overview: string;
    release_date: string;
    vote_average: number;
    popularity: number;
    poster_path?: string;
    tagline: string;
    runtime: number;
    revenue: number;
    vote_count: number;
    favourite?: boolean;
    genre_ids?: number[];
  }


//assembling the page
   export interface BaseMovieListProps { 
    movies: BaseMovieProps[];
  }  

// Extend the Base Movie interface. This component will display genre data
    export interface MovieDetailsProps extends BaseMovieProps {
    genres: {
      id: number;
      name: string;
    }[],
    production_countries: 
      {
        iso_3166_1: string,
        name: string,
      }[];
  }

/*
To bring the components from the previous section together, we will create a Movie Details page. 
This page will display a movie’s details and associated poster/media images. 
To support this, the page will accept two props: a movie object and an array of poster images 
for that movie. We already have an interface defined for movies, but not for images. 
*/

export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

//Create a new type to restrict the Filter options to either "title" or "genre"
export type FilterOption = "title" | "genre";
