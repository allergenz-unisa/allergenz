import React, { useEffect, useState } from "react";
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
import { getUserByToken } from "../api/Allergenz";

const Account = () => {
  const [user, setUser] = useState("");
  const { changeTitle } = useTitleContext();

  const token = localStorage.getItem("token");
  console.log(token);

  async function getUtente() {
    const user = await getUserByToken();
    setUser(user);
  }

  useEffect(() => {
    getUtente();
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
        maxWidth: 350,
        backgroundColor: "#FAF4F4",
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
                margin: "auto",
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
            <TextField fullWidth id="fullName" label={user.fullName} />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="username" label={user.username} />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="email" label={user.email} />
          </ListItem>
          <ListItem>
            <TextField fullWidth id="password" label={user.password} />
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

          <ListItem
            sx={{ mb: 2, mt: 2 }}
            secondaryAction={
              <IconButton
                edge="end"
                component={Link}
                to="/allergeni"
                color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
          ></ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default Account;
