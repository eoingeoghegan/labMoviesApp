/*
A Material UI Card component is used to contain the information - see here.
For some movies, TMDB does not have a related poster. We display a placeholder in those cases.
In the card’s content section, we use the Material’s Grid component to structure the information - see here. We want the content to be horizontally aligned.
The Typography component controls how text is displayed and represented in the DOM - see here. In this example, the text will show as an h6 header, and its DOM representation will be a paragraph (p).
The MovieCard component expects a BaseMovie type as a prop - we saw an example of a Movie’s data structure in an earlier section of this lab.

The second story deals with the exceptional case when a movie does not have a poster image.
*/


import React, {MouseEvent, useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";

import img from '../../images/film-poster-placeholder.png';
import { BaseMovieProps } from "../../types/interfaces"; 
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface MovieCardProps  {
  movie: BaseMovieProps;
  action: (m: BaseMovieProps) => React.ReactNode;
  
}

const MovieCard: React.FC<MovieCardProps> = ({movie, action}) => {
  const { favourites } = useContext(MoviesContext);//NEW

const isFavourite = favourites.find((id) => id === movie.id)? true : false;//NEW
 


  return (
      <Card sx={styles.card}>
      <CardHeader
        avatar={
          isFavourite ? (   //CHANGED
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
         <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
