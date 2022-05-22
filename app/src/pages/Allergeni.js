import React from "react";
import { 
  Avatar,
  Box,  
  CardActions, 
  CardContent, 
  Grid, 
  IconButton, 
  Typography 
} from "@mui/material";
import OpenCard from '@mui/icons-material/ChevronRight';


const Allergeni = () => {
  return (<div>
    <Grid container spacing={2}>

      <Grid item xs={12} md={6} lg={3}>
        <Box sx={{ minWidth: 275 }}>
          <CardContent >
            <Grid container direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography variant="h5" component="div">
                Lattosio
              </Typography>
            </Grid>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="open card" >
              <OpenCard color="secondary"/>
            </IconButton>
          </CardActions>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <Box sx={{ minWidth: 275 }}>
          <CardContent >
            <Grid container direction="row">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Typography variant="h5" component="div">
                Lattosio
              </Typography>
            </Grid>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="open card" >
              <OpenCard color="secondary"/>
            </IconButton>
          </CardActions>
        </Box>
      </Grid>
      
    </Grid>

  </div>)
};

export default Allergeni;