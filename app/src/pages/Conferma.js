import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useTitleContext from "../components/PageTitleContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Conferma = () => {
  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Pagina di conferma");
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
              <CheckCircleIcon
                color="secondary"
                sx={{ fontSize: 180, margin: "auto" }}
              />
              <Typography variant="h5" component="div">
                L’inserimento è andato a buon fine!
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ color: "white", fontWeight: "bold" }}
                onClick={() => window.location.href = "/"}
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

export default Conferma;
