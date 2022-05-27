import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import useTitleContext from "../components/PageTitleContext";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DatiAnagrafici from "@mui/icons-material/AccountBox";
import Intolleranze from "@mui/icons-material/DinnerDining";

import Card from "@mui/material/Card";
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
            <ListItemText primary="Dati Anagrafici" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="nome" label="nome" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="cognome" label="cognome" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="email" label="email" />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="password" label="password" />
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
        </List>
      </Card>
    </Box>
  );
};

export default Account;
