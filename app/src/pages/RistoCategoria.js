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

import { getRestarantByCategory } from "../api/Allergenz";

const RistoCategoria = () => {
  const [ristoranti, setRistoranti] = useState([]);

  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle(searchParams.get("categoria"));
  }, []);

  useEffect(() => {
    getRistoranti();
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

  return (
    <div>
      <Box maxWidth="lg" justifyContent="center" margin="auto">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
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
                  subheader={ristorante.address.via}
                />
                <CardMedia
                  component="img"
                  height="150"
                  image={"../../img/" + ristorante.localName + ".jpg"}
                  alt="Local Image"
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
