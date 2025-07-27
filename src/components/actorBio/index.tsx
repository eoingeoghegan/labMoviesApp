import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";



import Typography from "@mui/material/Typography";
import { ActorProps } from "../../types/interfaces";


const styles = {
    chipSet: {
        display: "flex",
        flexDirection: "column",
        
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
};

const ActorBio: React.FC<ActorProps> = (actorBio) => {
// Put this is as the gender returns as 1 for female or 2 for male.
    let gender = " ";

  if (actorBio.gender === 1) {
    gender = "Female";
  } else if (actorBio.gender === 2) {
    gender = "Male";
  }
    return (
        <>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 3}}>
                {actorBio.name}
            </Typography>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2}}>
                Biography
            </Typography>
            <Typography variant="h6" component="p" sx={{fontSize: 16}}>
                {actorBio.biography}
            </Typography>
            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Gender :" sx={styles.chipLabel} color="primary" />
                    {gender}
                </li>
                <li>
                    <Chip label="D.O.B :" sx={styles.chipLabel} color="primary" />
                    {actorBio.birthday}
                </li> 
               <li>
                    <Chip label="Place of Birth :" sx={styles.chipLabel} color="primary" />
                    {actorBio.place_of_birth}
                </li>
                
                <li>
                    <Chip label="Also Known As :" sx={styles.chipLabel} color="primary" />
                    {actorBio.also_known_as}
                </li>
            </Paper>
           
        </>
    );
};
export default ActorBio;
