import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";



import Typography from "@mui/material/Typography";
import { ActorProps } from "../../types/interfaces";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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

    return (
        <>
            <Typography variant="h5" component="h3">
                {actorBio.name}
            </Typography>
            <Typography variant="h5" component="h3">
                Biography
            </Typography>

            <Typography variant="h6" component="p">
                {actorBio.biography}
            </Typography>
           

            <Paper component="ul" sx={styles.chipSet}>
                <li>
                    <Chip label="Genres" sx={styles.chipLabel} color="primary" />
                </li>
                
                
            </Paper>
            <Paper component="ul" sx={styles.chipSet}>
               
               
            </Paper>
        </>
    );
};
export default ActorBio;
