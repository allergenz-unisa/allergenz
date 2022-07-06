import {
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Portata from "@mui/icons-material/Restaurant";
import Modifica from "@mui/icons-material/Edit";
import { Link, useNavigate, useParams } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import useTitleContext from "../components/PageTitleContext";
import { getRestarantById } from "../api/Allergenz";

const ModificaMenu = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [ristorante, setRistorante] = useState({});
  const [menu, setMenu] = useState([{}]);

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Modifica il menù");
    console.log(id);
  }, []);

  useEffect(() => {
    getRestarantById(id)
      .then(function (ristorante) {
        setRistorante(ristorante);
        console.log(ristorante);
        console.log(ristorante.Menu);
        setMenu(ristorante.Menu);
        console.log(menu);
        console.log("ok");
      })
      .catch(function (error) {
        console.log("ERRORE");
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        maxWidth={"md"}
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h4" component="h1">
            {ristorante.localName}
          </Typography>
          <Typography>
            Aggiungi una nuova portata o modifica i piatti già inseriti
            cliccando l'apposita icona...
          </Typography>
          <Paper
            sx={{
              marginTop: 2,
              marginBottom: 3,
            }}
          >
            <List>
              {menu.map((piatto, id) => (
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" component={Link} to="/account">
                      <Modifica />
                    </IconButton>
                  }
                >
                  <ListItemIcon>
                    <Portata />
                  </ListItemIcon>
                  <ListItemText
                    primary={piatto.name}
                    secondary={piatto.descrizione}
                  />
                </ListItem>
              ))}
            </List>
            <Button
              fullWidth
              variant="text"
              color="secondary"
              onClick={() => {
                navigate(`/inserimento-portata/${id}`);
              }}
            >
              {" "}
              Aggiungi una nuova portata...{" "}
            </Button>
          </Paper>
          <GoBackButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default ModificaMenu;
