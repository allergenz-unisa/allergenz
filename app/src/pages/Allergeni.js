import React, { useEffect, useState } from "react";
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

import { getAllAllergnes } from "../api/Allergenz";

const Allergeni = () => {
  const [allergeni, setAllergeni] = useState([]);

  let navigate = useNavigate();

  const { changeTitle } = useTitleContext();

  useEffect(() => {
    changeTitle("Allergeni");
  }, []);

  useEffect(() => {
    getAllergeni();
  }, []);

  function getAllergeni() {
    getAllAllergnes()
      .then(function (allergeni) {
        setAllergeni(allergeni);
        console.log(allergeni);
        console.log("ok");
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div>
      <Box maxWidth="md" justifyContent="center" margin="auto">
        <Paper sx={{ marginBottom: 1 }}>
          <List>
            {allergeni.map((allergene, name) => (
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    onClick={() => {
                      navigate("/dettagli-allergene?name=" + allergene.name, {
                        name: allergene.name,
                      });
                    }}
                  >
                    <OpenCard />
                  </IconButton>
                }
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={"../../icon/" + allergene.name + ".png"}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={allergene.name}
                  secondary={allergene.descrizionebreve}
                />
                <Divider variant="inset" component="li" />
              </ListItem>
            ))}
          </List>
        </Paper>

        <GoBackButton />
      </Box>
    </div>
  );
};

export default Allergeni;
