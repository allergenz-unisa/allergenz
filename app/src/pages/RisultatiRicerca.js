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

import { searchRestarant } from "../api/Allergenz";

import CustomizedMenus from "../components/FilterButton";

const RisultatiRicerca = () => {
  const [ristoranti, setRistoranti] = useState([]);

  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const { changeTitle } = useTitleContext();

  useEffect(() => {
    searchRistoranti();
  }, []);

  function searchRistoranti() {
    searchRestarant(searchParams.get("param"))
      .then(function (ristoranti) {
        setRistoranti(ristoranti);
        console.log(ristoranti);
        console.log("ok");
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div>
      {ristoranti.length == 0 ? (
        <div>
          <Box maxWidth="lg" justifyContent="center" margin="auto">
            <Typography variant="h5" component="div">
              Nessun ristorante trovato, cerca ancora!
            </Typography>
          </Box>
        </div>
      ) : (
        <div>
          <Box maxWidth="lg" justifyContent="center" margin="auto">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SearchBar />
                <Box>
                  <CustomizedMenus />
                </Box>
              </Grid>

              {ristoranti.map((ristorante, id) => (
                <Grid item xs={12} sm={6} md={4} lg={4} sx={{ t: 20 }}>
                  <Card
                    onClick={() => {
                      navigate(
                        "/dettagli-ristorante?localName=" +
                          ristorante.localName,
                        { localName: ristorante.localName }
                      );
                    }}
                  >
                    <CardHeader
                      title={ristorante.localName}
                      subheader={ristorante.address.via}
                    />
                    <CardMedia
                      component="img"
                      height="150"
                      image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3d7d1b4-4df6-4d72-b2f0-acf05cccae08/Derivates/4513fa48-f03c-4f8e-bea0-18385dd4bdd0.jpg"
                      alt="Paella dish"
                    />
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "#757575",
                        }}
                      >
                        {ristorante.like}
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
};

export default RisultatiRicerca;
