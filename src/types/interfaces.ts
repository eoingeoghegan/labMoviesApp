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

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}


//assembling the page
export interface BaseMovieListProps { 
   movies: BaseMovieProps[];
   action: (m: BaseMovieProps) => React.ReactNode;
}  

// Extend the Base Movie interface. This component will display genre data
export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[],
  production_countries: {
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


export interface Review{
    id: string;
    content: string
    author: string
  }

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}




export interface Review {
  author: string,
  content: string,
  agree: boolean,
  rating: number,
  movieId: number,
}

// ACTORS
// from TMDB Api Documentation
export interface ActorProps {
  id: number,
  place_of_birth: string,
  name: string,
  profile_path: string,
  also_known_as: [],
  biography: string,
  birthday: string,
  deathday: string,
  gender: number,
  homepage: string,
  imdb_id: string,
  known_for_department: string,
  popularity: number,
  poster_path: string,
}

export interface ActorImageProps {
  file_path: string,
  aspect_ratio: number,
  height: number,
  iso_639_1: string,
  vote_average: number, 
  vote_count: number,
  width: number,
}

export interface ActorListProps { 
  actors: ActorProps[];
}   

// TV SHOWS
export interface TvShowProps {
  page: number,
  results: [],
  backdrop_path: string,
  first_air_date: string,
  genre_ids?: number[],
  id: number,
  name: string,
  origin_country: [],
  original_language: string
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  vote_average: number,
  vote_count: number,
  total_pages: number,
  total_results: number,
  
}
// TV SHOWS DETAILS interface  
export interface TvShowDetailsProps extends TvShowProps {
    genres: {
      id: number;
      name: string;
    }[];
  }

export interface TvShowImage {
  poster_path: string,
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface TvShowPageProps {
  tvShow: TvShowDetailsProps;
  images: TvShowImage[];
}

export interface TvShowListProps { 
  tvShows: TvShowProps[];
}   


// UPCOMING MOVIES

export interface UpcomingMovieProps {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface UpcomingMovieListProps { 
  upcomingMovies: UpcomingMovieProps[];
} 

// for filtering
export interface UpcomingMovies {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: UpcomingMovieProps[];
  total_pages: number;
  total_results: number;
}