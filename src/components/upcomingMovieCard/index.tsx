// creating Upcoming Card


import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { UpcomingMovieProps } from "../../types/interfaces";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";


const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};



const UpcomingMovieCard: React.FC<UpcomingMovieProps> = (upcomingMovie) => {
  
  return (
    <Card sx={styles.card}>
      <CardHeader title={upcomingMovie.original_title} />
      <CardMedia
        sx={styles.media}
        image={
          upcomingMovie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${upcomingMovie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {upcomingMovie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
        <Link to={`/upcomingMovies/${upcomingMovie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default UpcomingMovieCard;
