import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";

import ActorsPage from "./pages/actorsPage";
import TvShowsPage from "./pages/tvShowsPage";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";




import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

import MoviePage from "./pages/movieDetailsPage";
import MoviesContextProvider from "./contexts/moviesContext";
import UpcomingMoviesPage from "./pages/upcomingMovies";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <SiteHeader />      {/* New Header  */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/actors">Actors</Link>
          </li>
          <li>
            <Link to="/tvShows">Tv Shows</Link>
          </li>
          <li>
            <Link to="/upcomingMovies">Upcoming Movies</Link>
          </li>
        </ul>
        <MoviesContextProvider>
          <Routes>

            <Route path="/actors" element={<ActorsPage />} />

            <Route path="/tvShows" element={<TvShowsPage />} />
            <Route path="/tvShows/:id" element={<TvShowDetailsPage />} />

            <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
            <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
            <Route path="/upcomingMovies" element={<UpcomingMoviesPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage/>} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)