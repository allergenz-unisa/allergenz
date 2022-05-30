import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import Search from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useTitleContext from "../components/PageTitleContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();

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
          <Grid item>
            <Typography variant="h4" component="h1">
              ALLERGENZ
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <OutlinedInput
              sx={{ marginTop: 2, marginBottom: 5 }}
              fullWidth
              placeholder="Per effettuare una ricerca inizia a scrivere..."
              id="outlined-adornment-weight"
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
          <Grid item xs={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria");
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
                      navigate("/ristoranti-per-categoria");
                    }}
                  >
                    Cucina di mare
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria");
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
                      navigate("/ristoranti-per-categoria");
                    }}
                  >
                    Pizza
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria");
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
                      navigate("/ristoranti-per-categoria");
                    }}
                  >
                    Hamburger
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria");
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
                      navigate("/ristoranti-per-categoria");
                    }}
                  >
                    Sushi
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria");
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
                      navigate("/ristoranti-per-categoria");
                    }}
                  >
                    Cucina indiana
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria");
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
                      navigate("/ristoranti-per-categoria");
                    }}
                  >
                    Fast food
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria");
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
                      navigate("/ristoranti-per-categoria");
                    }}
                  >
                    Cucina di terra
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                onClick={() => {
                  navigate("/ristoranti-per-categoria");
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image="../../img/pita.jpg"
                  alt="Pita"
                />
                <CardActions disableSpacing>
                  <Button color="secondary" variant="text">
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
