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
import { textAlign } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTitleContext from "../components/PageTitleContext";

const cucine = [
  {
    value: "1",
    label: "Sushi",
  },
  {
    value: "2",
    label: "Pizza",
  },
  {
    value: "3",
    label: "Hamburger",
  },
  {
    value: "4",
    label: "Fast food",
  },
  {
    value: "5",
    label: "Cucina di terra",
  },
  {
    value: "6",
    label: "Cucina di mare",
  },
  {
    value: "7",
    label: "Piadine e pite",
  },
];

const allergeni = [
  {
    value: "1",
    label: "Lattosio",
  },
  {
    value: "2",
    label: "Glutine",
  },
  {
    value: "3",
    label: "Crostacei",
  },
  {
    value: "4",
    label: "Frutta a guscio",
  },
  {
    value: "5",
    label: "Nichel",
  },
  {
    value: "6",
    label: "Proteina LTP",
  },
];

const FormSegnalazione = () => {
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
              Segnala un locale
            </Typography>
            <Typography sx={{ mr: 2, ml: 2, mb: 2 }}>
              {" "}
              Grazie per aver scelto di contribuire alla crescita della nostra
              community! Grazie a te, sempre meno persone con intolleranze
              alimentari avranno difficoltà a trovare e scegliere un ristorante
              in cui poter mangiare. Ti invitiamo a inserire i dati a tua
              disposizione nel form di seguito...{" "}
            </Typography>
            <List>
              <ListItem>
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  {" "}
                  Dati del locale{" "}
                </Typography>
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  id="NomeLocale"
                  label="Nome del locale"
                />
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  id="Via"
                  label="Via..."
                />
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  id="Citta"
                  label="Città"
                />
              </ListItem>
              <ListItem>
                <TextField color="secondary" fullWidth id="CAP" label="CAP" />
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  select
                  helperText="Selezionare un tipo di cucina"
                  id="Cucina"
                  label="Cucina"
                >
                  {cucine.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </ListItem>
              <ListItem>
                <TextField
                  color="secondary"
                  fullWidth
                  select
                  helperText="Selezionare l'allergene che è possibile evitare in questo locale"
                  id="Allergene"
                  label="Allergene"
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
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Annulla
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="secondary"
                      sx={{ color: "white", fontWeight: "bold" }}
                      onClick={() => {
                        navigate("/conferma");
                      }}
                    >
                      Conferma
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

export default FormSegnalazione;
