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
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Dettagli Ristorante");
  }, []);

  useEffect(() => {
    getRestarantById(searchParams.get("id"))
      .then(function (_ristorante) {
        console.log(_ristorante);
        setRistorante((ristorante) => ({
          ...ristorante,
          ..._ristorante,
        }));
        console.log(ristorante);
        console.log("ok");
      })
      .catch(function (error) {
        console.log("ERRORE");
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Box
        component="img"
        sx={{ maxWidth: "100%", borderRadius: 1 }}
        alt="Image"
        src="../../img/wine-glass.jpg"
      />
      <Grid
        container
        maxWidth={"md"}
        justifyContent="center"
        alignItems="center"
        margin="auto"
      >
        <Grid item xs={12} md={12} lg={6}>
          <Paper
            sx={{
              marginTop: 2,
              marginBottom: 3,
            }}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <Avatar alt="Image" src="../../img/wine-glass.jpg" />
                </ListItemIcon>
                <ListItemText primary={ristorante.localName} />
              </ListItem>
              <ListItem
                secondaryAction={
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        ml: 50,
                      }}
                      alt="Remy Sharp"
                      src="../../icon/lactose-free.png"
                      onClick={() => {
                        navigate("/lattosio");
                      }}
                    />
                  </ListItemAvatar>
                }
              >
                <ListItemIcon>
                  <RestaurantMenuIcon />
                </ListItemIcon>
                <ListItemText primary="Nome piatto" />
              </ListItem>

              <Drawer />

              <ListItem
                secondaryAction={
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        ml: 50,
                      }}
                      alt="Remy Sharp"
                      src="../../icon/peanut-free.png"
                      onClick={() => {
                        navigate("/lattosio");
                      }}
                    />
                  </ListItemAvatar>
                }
              >
                <ListItemIcon>
                  <RestaurantMenuIcon />
                </ListItemIcon>
                <ListItemText primary="Nome piatto" />
              </ListItem>

              <Drawer />

              <ListItem
                secondaryAction={
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        ml: 50,
                      }}
                      alt="Remy Sharp"
                      src="../../icon/lactose-free.png"
                      onClick={() => {
                        navigate("/lattosio");
                      }}
                    />
                  </ListItemAvatar>
                }
              >
                <ListItemIcon>
                  <RestaurantMenuIcon />
                </ListItemIcon>
                <ListItemText primary="Nome piatto" />
              </ListItem>

              <Drawer />

              <ListItem
                secondaryAction={
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        ml: 50,
                      }}
                      alt="Remy Sharp"
                      src="../../icon/gluten-free.png"
                      onClick={() => {
                        navigate("/lattosio");
                      }}
                    />
                  </ListItemAvatar>
                }
              >
                <ListItemIcon>
                  <RestaurantMenuIcon />
                </ListItemIcon>
                <ListItemText primary="Nome piatto" />
              </ListItem>

              <Drawer />
            </List>
            <Button
              fullWidth
              variant="text"
              color="secondary"
              onClick={() => {
                navigate("/modificaMenu");
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
