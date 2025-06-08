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
    }[];
  }
