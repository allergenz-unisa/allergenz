import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import useTitleContext from "../components/PageTitleContext";
import SearchBar from "../components/SearchBar";
import logo from "../images/logo/4x/allergens_logo@4x.png";
import CustomizedMenus from "../components/FilterButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Dashboard = () => {
  let navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);
  const [searchString, setSearchString] = useState("");

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Homepage");
  }, []);

  const onSearchResult = (result, string) => {
    setSearchResult(result);
    setSearchString(string);
  };

  return (
    <div>
      <Box maxWidth="lg" justifyContent="center" margin="auto">
        <Grid
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

          <Grid item></Grid>

          <Grid item xs={12}>
            <SearchBar onSearchResult={onSearchResult} />
          </Grid>
        </Grid>

        {searchResult.length == 0 && searchString ? (
          <div>
            <Box maxWidth="lg" justifyContent="center" margin="auto">
              <Typography variant="h5" component="div">
                Nessun ristorante trovato, cerca ancora!
              </Typography>
            </Box>
          </div>
        ) : searchResult.length > 0 && searchString ? (
          <div>
            <Box maxWidth="lg" justifyContent="center" margin="auto">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomizedMenus />
                </Grid>

                {searchResult.map((ristorante, id) => (
                  <Grid item xs={12} sm={12} md={6} lg={4} sx={{ t: 20 }}>
                    <Card
                      onClick={() => {
                        navigate("/dettagli-ristorante?id=" + ristorante.id, {
                          id: ristorante.id,
                        });
                      }}
                    >
                      <CardHeader
                        title={ristorante.localName}
                        subheader={ristorante.address.via}
                      />
                      <CardMedia
                        component="img"
                        height="150"
                        image={"../../img/" + ristorante.localName + ".jpg"}
                        alt={ristorante.localName}
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
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200 }}>
                <CardActionArea
                  onClick={() => {
                    navigate(
                      "/ristoranti-per-categoria?categoria=Cucina di mare"
                    );
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="../../img/salmon.jpg"
                    alt="Salmone"
                  />
                  <CardActions disableSpacing>
                    <Button
                      sx={{
                        fontWeight: "bold",
                      }}
                      color="secondary"
                      variant="text"
                      onClick={() => {
                        navigate(
                          "/ristoranti-per-categoria?categoria=Cucina di mare"
                        );
                      }}
                    >
                      Cucina di mare
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200 }}>
                <CardActionArea
                  onClick={() => {
                    navigate("/ristoranti-per-categoria?categoria=Pizza");
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="../../img/pizza.jpg"
                    alt="Pizza"
                  />
                  <CardActions disableSpacing>
                    <Button
                      sx={{
                        fontWeight: "bold",
                      }}
                      color="secondary"
                      variant="text"
                      onClick={() => {
                        navigate("/ristoranti-per-categoria?categoria=Pizza");
                      }}
                    >
                      Pizza
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200 }}>
                <CardActionArea
                  onClick={() => {
                    navigate("/ristoranti-per-categoria?categoria=Hamburger");
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="../../img/hamburger.jpg"
                    alt="Hamburger"
                  />
                  <CardActions disableSpacing>
                    <Button
                      sx={{
                        fontWeight: "bold",
                      }}
                      color="secondary"
                      variant="text"
                      onClick={() => {
                        navigate(
                          "/ristoranti-per-categoria?categoria=Hamburger"
                        );
                      }}
                    >
                      Hamburger
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200 }}>
                <CardActionArea
                  onClick={() => {
                    navigate("/ristoranti-per-categoria?categoria=Sushi");
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="../../img/sushi.jpg"
                    alt="Sushi"
                  />
                  <CardActions disableSpacing>
                    <Button
                      sx={{
                        fontWeight: "bold",
                      }}
                      color="secondary"
                      variant="text"
                      onClick={() => {
                        navigate("/ristoranti-per-categoria?categoria=Sushi");
                      }}
                    >
                      Sushi
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200 }}>
                <CardActionArea
                  onClick={() => {
                    navigate("/ristoranti-per-categoria?categoria=Indiano");
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="../../img/indian.jpg"
                    alt="Indian dish"
                  />
                  <CardActions disableSpacing>
                    <Button
                      sx={{
                        fontWeight: "bold",
                      }}
                      color="secondary"
                      variant="text"
                      onClick={() => {
                        navigate("/ristoranti-per-categoria?categoria=Indiano");
                      }}
                    >
                      Cucina indiana
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200 }}>
                <CardActionArea
                  onClick={() => {
                    navigate("/ristoranti-per-categoria?categoria=Fast food");
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="../../img/fastFood.jpeg"
                    alt="Fast food"
                  />
                  <CardActions disableSpacing>
                    <Button
                      sx={{
                        fontWeight: "bold",
                      }}
                      color="secondary"
                      variant="text"
                      onClick={() => {
                        navigate(
                          "/ristoranti-per-categoria?categoria=Fast food"
                        );
                      }}
                    >
                      Fast food
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200 }}>
                <CardActionArea
                  onClick={() => {
                    navigate(
                      "/ristoranti-per-categoria?categoria=Cucina di terra"
                    );
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="../../img/carne.jpeg"
                    alt="Carne"
                  />
                  <CardActions disableSpacing>
                    <Button
                      sx={{
                        fontWeight: "bold",
                      }}
                      color="secondary"
                      variant="text"
                      onClick={() => {
                        navigate(
                          "/ristoranti-per-categoria?categoria=Cucina di terra"
                        );
                      }}
                    >
                      Cucina di terra
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Card sx={{ height: 200 }}>
                <CardActionArea
                  onClick={() => {
                    navigate(
                      "/ristoranti-per-categoria?categoria=Pite e piadine"
                    );
                  }}
                >
                  <CardMedia
                    component="img"
                    height="150"
                    image="../../img/pita.jpg"
                    alt="Pita"
                  />
                  <CardActions disableSpacing>
                    <Button
                      sx={{
                        fontWeight: "bold",
                      }}
                      color="secondary"
                      variant="text"
                      onClick={() => {
                        navigate(
                          "/ristoranti-per-categoria?categoria=Pite e piadine"
                        );
                      }}
                    >
                      Piadine e pite
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        )}

        <Grid
          container
          fluid
          sx={{
            marginTop: 5,
          }}
        >
          <Grid item xs={12} md={12} lg={12}>
            <Button
              sx={{ color: "white", fontWeight: "bold" }}
              variant={"contained"}
              color={"secondary"}
              fullWidth
              onClick={() => {
                navigate("/form-segnalazione-locale");
              }}
            >
              Segnala un locale
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
