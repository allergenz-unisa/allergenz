import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import useTitleContext from "../components/PageTitleContext";
import EditIcon from "@mui/icons-material/Edit";
import DatiAnagrafici from "@mui/icons-material/AccountBox";
import Intolleranze from "@mui/icons-material/DinnerDining";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import { getUserByToken } from "../api/Allergenz";
import CloseIcon from "@mui/icons-material/Close";
import GoBackButton from "../components/GoBackButton";

const Account = () => {
  let navigate = useNavigate();

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
    <div>
      {localStorage.getItem("token") === null ? (
        <div>
          <Box maxWidth="md" justifyContent="center" margin="auto">
            <Card sx={{ marginBottom: 1 }}>
              <List>
                <ListItem>
                  <ListItemText primary="Registrati o effettua il login e riprova!" />
                </ListItem>
              </List>

              <Typography m={2}>
                Per accedere all'area personale è necessario autenticarsi.{" "}
                <br />
                Se non sei ancora registrato sulla piattaforma Allergenz,
                iscriviti ora per non perderti i vantaggi riservati alla nostra
                community: potrai essere d'aiuto ad altre persone, mettere like
                per suggerire i locali che preferisci, accedere all'area
                personale...e tanto altro ancora! <br />
              </Typography>
            </Card>

            <ListItem>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <GoBackButton mt={2} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ color: "white", fontWeight: "bold" }}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Effettua il login
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </Box>
        </div>
      ) : (
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
            </List>
          </Card>
        </Box>
      )}
    </div>
  );
};

export default Account;
