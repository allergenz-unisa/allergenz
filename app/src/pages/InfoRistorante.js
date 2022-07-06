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
  Container,
} from "@mui/material";
import GoBackButton from "../components/GoBackButton";
import useTitleContext from "../components/PageTitleContext";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { getRestarantById, getRestarantByName } from "../api/Allergenz";
import { useNavigate, useSearchParams } from "react-router-dom";

import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

const DettagliRistorante = () => {
  const [ristorante, setRistorante] = useState({});
  const [menu, setMenu] = useState([{}]);
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const [open, setOpen] = React.useState(true);

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
                <Box>
                  <ListItemButton>
                    <ListItemIcon>
                      <RestaurantMenuIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={piatto.name}
                      secondary={piatto.descrizione}
                    />
                    {piatto.allergenFree &&
                      piatto.allergenFree.map((allergene, id) => (
                        <ListItemButton>
                          <ListItemIcon>
                            <Avatar
                              sx={{
                                width: 20,
                                height: 20,
                              }}
                              alt="Remy Sharp"
                              src={`/icon/${allergene}.png`}
                              onClick={() => {
                                navigate(
                                  "/dettagli-allergene?name=" + allergene,
                                  {
                                    allergene: allergene,
                                  }
                                );
                              }}
                            />
                          </ListItemIcon>
                        </ListItemButton>
                      ))}
                  </ListItemButton>
                </Box>
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
