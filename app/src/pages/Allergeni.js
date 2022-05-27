import React, { useEffect } from "react";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import OpenCard from "@mui/icons-material/ChevronRight";
import useTitleContext from "../components/PageTitleContext";
import GoBackButton from "../components/GoBackButton";
import { useNavigate } from "react-router-dom";

const Allergeni = () => {
  let navigate = useNavigate();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Allergeni");
  }, []);

  return (
    <div>
      <Box maxWidth="md" justifyContent="center" margin="auto">
        <Paper sx={{ marginBottom: 1 }}>
          <List>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => {
                    navigate("/lattosio");
                  }}
                >
                  <OpenCard />
                </IconButton>
              }
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="../../icon/lactose-free.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Lattosio"
                secondary={
                  <React.Fragment>
                    {
                      "Il lattosio è uno zucchero formato da glucosio e galattosio..."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => {
                    navigate("/account");
                  }}
                >
                  <OpenCard />
                </IconButton>
              }
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="../../icon/gluten-free.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Glutine"
                secondary={
                  <React.Fragment>
                    {
                      "Il lattosio è uno zucchero formato da glucosio e galattosio..."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => {
                    navigate("/account");
                  }}
                >
                  <OpenCard />
                </IconButton>
              }
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="../../icon/no-seafood.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Crostacei"
                secondary={
                  <React.Fragment>
                    {
                      "Il lattosio è uno zucchero formato da glucosio e galattosio..."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => {
                    navigate("/account");
                  }}
                >
                  <OpenCard />
                </IconButton>
              }
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="../../icon/peanut-free.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Frutta a guscio"
                secondary={
                  <React.Fragment>
                    {
                      "Il lattosio è uno zucchero formato da glucosio e galattosio..."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => {
                    navigate("/account");
                  }}
                >
                  <OpenCard />
                </IconButton>
              }
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="../../icon/peanut-free.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Nichel"
                secondary={
                  <React.Fragment>
                    {
                      "Il lattosio è uno zucchero formato da glucosio e galattosio..."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  onClick={() => {
                    navigate("/account");
                  }}
                >
                  <OpenCard />
                </IconButton>
              }
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="../../icon/peanut-free.png" />
              </ListItemAvatar>
              <ListItemText
                primary="Proteina LTP"
                secondary={
                  <React.Fragment>
                    {
                      "Il lattosio è uno zucchero formato da glucosio e galattosio..."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Paper>

        <GoBackButton />
      </Box>
    </div>
  );
};

export default Allergeni;
