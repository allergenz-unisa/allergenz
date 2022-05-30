import {
  Button,
  Grid,
  List,
  ListItem,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTitleContext from "../components/PageTitleContext";

const allergeni = [
  {
    value: "1",
    label: "lattosio",
  },
  {
    value: "2",
    label: "glutine",
  },
  {
    value: "3",
    label: "crostacei",
  },
  {
    value: "4",
    label: "frutta a guscio",
  },
  {
    value: "5",
    label: "nichel",
  },
  {
    value: "6",
    label: "proteina LTP",
  },
];

const FormInsPortata = () => {
  let navigate = useNavigate();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Segnalazione di un locale");
  }, []);

  return (
    <div sx={{ bgcolor: "#FAF4F4" }}>
      <Grid container>
        <Grid item xs={12} md={2} lg={3} />
        <Grid item xs={12} md={8} lg={6}>
          <Paper>
            <Typography
              sx={{ mr: 2, ml: 2, mb: 2 }}
              variant="h4"
              component="h1"
            >
              {" "}
              Aggiungi un nuovo piatto
            </Typography>
            <Typography sx={{ mr: 2, ml: 2, mb: 2 }}>
              {" "}
              Crea un nuovo piatto aggiungendo le infomazioni necessarie, non
              dimenticare di aggiungere eventuali allergeni{" "}
            </Typography>
            <List>
              <ListItem>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  {" "}
                  Informazioni sul piatto{" "}
                </Typography>
              </ListItem>
              <ListItem>
                <TextField fullWidth id="NomePiatto" label="Nome del piatto" />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  id="Descrizione"
                  label="Breve descrizione"
                />
              </ListItem>
              <ListItem>
                <TextField fullWidth id="Foto" label="Aggiungi una foto" />
              </ListItem>
              <ListItem>
                <TextField
                  fullWidth
                  select
                  id="Allergene"
                  label="Scegli l'allergene non presente"
                >
                  {allergeni.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </ListItem>

              <ListItem>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      style={{ color: "white" }}
                      onClick={() => {
                        navigate("/conferma");
                      }}
                    >
                      Conferma
                    </Button>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Annulla
                    </Button>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2} lg={3} />
      </Grid>
    </div>
  );
};

export default FormInsPortata;
