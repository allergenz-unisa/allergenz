import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import useTitleContext from "../components/PageTitleContext";
import EditIcon from "@mui/icons-material/Edit";
import DatiAnagrafici from "@mui/icons-material/AccountBox";
import Intolleranze from "@mui/icons-material/DinnerDining";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";


const Account = () => {
  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Il tuo profilo");
  }, []);

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      margin="auto"
      component="form"
      sx={{
        maxWidth: 400,
        "& .MuiTextField-root": { m: 1 },
        backgroundColor: "#FAF4F4"
      }}
      noValidate
      autoComplete="off"
    >
      <Card>
        <List>
          <ListItem>
            <Avatar
              alt="Profile Image"
              src="../../img/person.jpg"
              sx={{
                width: 120,
                height: 120,
                border: 2,
                borderColor: "#b34b2a",
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DatiAnagrafici />
            </ListItemIcon>
            <ListItemText primary="Dati Anagrafici"/>
          </ListItem>
          <ListItem>
            <TextField fullWidth id="fullName" label="Nome e cognome" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="username" label="Username" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="email" label="Email" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="password" label="Password" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Intolleranze />
            </ListItemIcon>
            <ListItemText primary="Intolleranze" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="intolleranza1" label="intolleranza1" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="intolleranza2" label="intolleranza2" />
          </ListItem>

          <ListItem sx={{mb: 2, mt: 2}} secondaryAction={
            <IconButton edge="end" component={Link} to="/allergeni" color= "secondary">
              <EditIcon />
            </IconButton>
          }>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default Account;
