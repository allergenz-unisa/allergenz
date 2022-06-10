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
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import useTitleContext from "../components/PageTitleContext";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const DettagliRistorante = () => {
  let navigate = useNavigate();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Dettagli Ristorante");
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
                <ListItemText primary="Ristorante da Carmine" />
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
