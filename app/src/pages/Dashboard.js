import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Search from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useTitleContext from "../components/PageTitleContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo/4x/allergens_logo@4x.png";

const Dashboard = () => {
  let navigate = useNavigate();

  const [search, setSearch] = useState("");

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Homepage");
  }, []);
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
            <OutlinedInput
              sx={{ marginTop: 2, marginBottom: 5 }}
              fullWidth
              placeholder="Per effettuare una ricerca inizia a scrivere..."
              id="outlined-adornment-weight"
              onChange={e => setSearch(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  {" "}
                  <Search />{" "}
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria?categoria=Cucina di mare");
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
                    color="secondary"
                    variant="text"
                    onClick={() => {
                      navigate("/ristoranti-per-categoria?categoria=Cucina di mare");
                    }}
                  >
                    Cucina di mare
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
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

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
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
                    color="secondary"
                    variant="text"
                    onClick={() => {
                      navigate("/ristoranti-per-categoria?categoria=Hamburger");
                    }}
                  >
                    Hamburger
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
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

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
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

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
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
                    color="secondary"
                    variant="text"
                    onClick={() => {
                      navigate("/ristoranti-per-categoria?categoria=Fast food");
                    }}
                  >
                    Fast food
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria?categoria=Cucina di terra");
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
                    color="secondary"
                    variant="text"
                    onClick={() => {
                      navigate("/ristoranti-per-categoria?categoria=Cucina di terra");
                    }}
                  >
                    Cucina di terra
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria?categoria=Pite e piadine");
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
                  color="secondary" 
                  variant="text"
                  onClick={() => {
                    navigate("/ristoranti-per-categoria?categoria=Pite e piadine");
                  }}
                  >
                    Piadine e pite
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          fluid
          sx={{
            marginTop: 5,
          }}
        >
          <Grid item xs={12} md={12} lg={12}>
            <Button
              sx={{ color: "white" }}
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
