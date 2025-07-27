// creating Actor Card


import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";

import FavoriteIcon from "@mui/icons-material/Favorite";

import IconButton from "@mui/material/IconButton";
import { ActorProps } from "../../types/interfaces";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";



const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};



const ActorCard: React.FC<ActorProps> = (actor) => {
  
  return (
    <Card sx={styles.card}>
      <CardHeader title={actor.name} />
      <CardMedia
        sx={styles.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon color="primary" fontSize="large" />
        </IconButton>
        <Link to={`/actorBio/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Biography
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ActorCard;
