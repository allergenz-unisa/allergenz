import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
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
      <Grid
        container
        sx={{
          marginBottom: 5,
        }}
      >
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          alignSelf="center"
        >
          <Typography variant="h4" component="h1">
            ALLERGENZ
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <OutlinedInput
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
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
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
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
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
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
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
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
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
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
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
                Cucina
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="194"
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
          >
            Segnala un locale
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
