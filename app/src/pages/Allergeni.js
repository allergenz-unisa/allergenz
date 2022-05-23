import React, { useEffect } from "react";
import { 
  Avatar,
  Box,  
  CardActions, 
  CardContent, 
  Divider, 
  Grid, 
  IconButton, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Paper, 
  Typography 
} from "@mui/material";
import OpenCard from '@mui/icons-material/ChevronRight';
import useTitleContext from "../components/PageTitleContext";


const Allergeni = () => {
  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle('Allergeni')
  }, [])

  return (<div>
    
    <Paper>
      <List>
        <ListItem 
        secondaryAction={
          <IconButton edge="end">
              <OpenCard />
          </IconButton>
        }
        alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
          primary="Lattosio"
          secondary={
            <React.Fragment>
              {"Il lattosio è uno zucchero formato da glucosio e galattosio..."}
            </React.Fragment>
          }
        />
        </ListItem>

        <Divider variant="inset" component="li" />

        <ListItem 
        secondaryAction={
          <IconButton edge="end">
              <OpenCard />
          </IconButton>
        }
        alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
          primary="Glutine"
          secondary={
            <React.Fragment>
              {"Il lattosio è uno zucchero formato da glucosio e galattosio..."}
            </React.Fragment>
          }
        />
        </ListItem>
      </List>
    </Paper>

  </div>)
};

export default Allergeni;