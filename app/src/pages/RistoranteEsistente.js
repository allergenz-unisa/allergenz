import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useTitleContext from "../components/PageTitleContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const RistoranteEsistente = () => {
  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Errore");
  }, []);

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" margin="auto">
        <Card sx={{ width: 400 }}>
          <div
            style={{
              backgroundColor: "#fbe9e7",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Hai provato ad inserire un ristorante già presente sulla
                piattaforma!
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ color: "white", fontWeight: "bold" }}
                onClick={() => (window.location.href = "/")}
              >
                Ok
              </Button>
            </CardActions>
          </div>
        </Card>
      </Grid>
    </div>
  );
};

export default RistoranteEsistente;
