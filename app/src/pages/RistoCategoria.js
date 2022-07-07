import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Card,
  Box,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useTitleContext from "../components/PageTitleContext";
import SearchBar from "../components/SearchBar";
import GoBackButton from "../components/GoBackButton";
import logo from "../images/logo/4x/allergens_logo@4x.png";

import { getRestarantByCategory } from "../api/Allergenz";
import { getUserByToken } from "../api/Allergenz";

const RistoCategoria = () => {
  const [ristoranti, setRistoranti] = useState([]);
  const [user, setUser] = useState();
  const [userLikes, setUserLikes] = useState([]);
  const [like, setLike] = useState(false);

  const token = localStorage.getItem("token");

  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle(searchParams.get("categoria"));
  }, []);

  useEffect(() => {
    getRistoranti();
    getUtente();
  }, []);

  function getRistoranti() {
    getRestarantByCategory(searchParams.get("categoria"))
      .then(function (_ristoranti) {
        setRistoranti(_ristoranti);
        console.log(ristoranti);
        console.log("ok");
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  async function getUtente() {
    const user = await getUserByToken();
    setUser(user);
    console.log("prova user");
    console.log(user);
    setUserLikes(user.likes);
    console.log(userLikes);
  }

  

  return (
    <div>
      <Box maxWidth="lg" justifyContent="center" margin="auto">
        <Grid
          marginBottom={2}
          container
          justifyContent="center"
          alignItems="center"
          alignSelf="center"
        >
          <Box
            component="img"
            sx={{
              maxWidth: 300,
            }}
            alt="Logo"
            src={logo}
          />

          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container spacing={2}>
          {ristoranti.map((ristorante, id) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Card
                onClick={() => {
                  navigate("/dettagli-ristorante?id=" + ristorante.id, {
                    id: ristorante.id,
                  });
                }}
              >
                <CardHeader
                  title={
                    <Box component="div" sx={{ whiteSpace: "nowrap" }}>
                      {ristorante.localName}
                    </Box>
                  }
                  subheader={
                    <Box component="div" sx={{ whiteSpace: "nowrap" }}>
                      {ristorante.address.via + ", " + ristorante.address.citta}
                    </Box>
                  }
                />
                <CardMedia
                  component="img"
                  height="150"
                  image={"../../img/" + ristorante.localName + ".jpg"}
                  alt="Local Image"
                />
                <CardActions disableSpacing>
                    <div>
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => {}}
                      >
                        <FavoriteIcon />
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            color: "#757575",
                          }}
                        >
                          {ristorante.like}
                        </Typography>
                      </IconButton>
                    </div>
                  
                   
                  
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            mt: 5,
          }}
        >
          <GoBackButton />
        </Box>
      </Box>
    </div>
  );
};

export default RistoCategoria;
