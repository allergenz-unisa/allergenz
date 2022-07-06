import React, { useEffect, useState } from "react";
import {
  Button,
  Avatar,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Box,
  ListItemAvatar,
} from "@mui/material";
import GoBackButton from "../components/GoBackButton";
import useTitleContext from "../components/PageTitleContext";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { getRestarantById, getRestarantByName } from "../api/Allergenz";
import { useNavigate, useSearchParams } from "react-router-dom";

const DettagliRistorante = () => {
  const [ristorante, setRistorante] = useState({});
  const [menu, setMenu] = useState([{}]);
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Dettagli Ristorante");
  }, []);

  useEffect(() => {
    getRestarantById(searchParams.get("id"))
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
          <Box
            component="img"
            sx={{ width: "100%", borderRadius: 1 }}
            alt="Image"
            src={"../../img/" + ristorante.localName + ".jpg"}
          />
          <Paper
            sx={{
              marginTop: 2,
              marginBottom: 3,
            }}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <Avatar
                    alt="Image"
                    src={"../../img/" + ristorante.localName + ".jpg"}
                  />
                </ListItemIcon>
                <ListItemText primary={ristorante.localName} />
              </ListItem>

              {menu.map((piatto, id) => (
                <ListItem
                  secondaryAction={
                    <ListItemAvatar>
                      {piatto.allergenFree && piatto.allergenFree.map(a => 
                          <Avatar
                          sx={{
                            width: 30,
                            height: 30,
                            ml: 50,
                          }}
                          alt="Remy Sharp"
                          src={`/icon/${a}.png`}
                          onClick={() => {
                            navigate("/lattosio");
                          }}
                        />
                      )}
                      
                    </ListItemAvatar>
                  }
                >
                  <ListItemIcon>
                    <RestaurantMenuIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={piatto.name}
                    secondary={piatto.descrizione}
                  />
                </ListItem>
              ))}

              <Drawer />
            </List>
            <Button
              fullWidth
              variant="text"
              color="secondary"
              onClick={() => {
                navigate(`/modifica-menu/${ristorante.id}`);
              }}
            >
              {" "}
              Modifica menÙ{" "}
            </Button>
          </Paper>
          <GoBackButton />
        </Grid>
      </Grid>
    </div>
  );
};

export default DettagliRistorante;
