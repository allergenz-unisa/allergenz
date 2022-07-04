import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import useTitleContext from "../components/PageTitleContext";
import CloseIcon from "@mui/icons-material/Close";
import GoBackButton from "../components/GoBackButton";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getAllergenById } from "../api/Allergenz";

const InfoAllergene = () => {
  const [allergene, setAllergene] = useState({});
  const [nome, setNome] = useState();
  const [descrizione, setDescrizione] = useState();
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Info Allergene");
  }, []);

  useEffect(() => {
    getAllergenById(searchParams.get("id"))
      .then(function (allergene) {
        console.log(allergene);
        setAllergene((allergene) => ({
          ...allergene,
        }));
        console.log(allergene);
        setNome(allergene[0].nome);
        setDescrizione(allergene[0].descrizione);
      })
      .catch(function (error) {
        console.log("ERRORE");
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Box maxWidth="md" justifyContent="center" margin="auto">
        <Card sx={{ marginBottom: 1 }}>
          <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" component={Link} to="/allergeni">
                  <CloseIcon />
                </IconButton>
              }
            >
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src={"../../icon/" + nome + ".png"} />
              </ListItemIcon>
              <ListItemText primary={nome} />
            </ListItem>
          </List>

          <Typography m={2}>{descrizione}</Typography>
        </Card>

        <GoBackButton mt={2} />
      </Box>
    </div>
  );
};

export default InfoAllergene;
