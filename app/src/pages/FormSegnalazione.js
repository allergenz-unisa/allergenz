import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { textAlign } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNewRestaurant } from "../api/Allergenz";
import GoBackButton from "../components/GoBackButton";
import useTitleContext from "../components/PageTitleContext";

const cucine = [
  {
    value: "Sushi",
    label: "Sushi",
  },
  {
    value: "Pizza",
    label: "Pizza",
  },
  {
    value: "Hamburger",
    label: "Hamburger",
  },
  {
    value: "Fast food",
    label: "Fast food",
  },
  {
    value: "Cucina di terra",
    label: "Cucina di terra",
  },
  {
    value: "Cucina di mare",
    label: "Cucina di mare",
  },
  {
    value: "Piadine e pite",
    label: "Piadine e pite",
  },
];

const allergeni = [
  {
    value: "Lattosio",
    label: "Lattosio",
  },
  {
    value: "Glutine",
    label: "Glutine",
  },
  {
    value: "Crostacei",
    label: "Crostacei",
  },
  {
    value: "Frutta a guscio",
    label: "Frutta a guscio",
  },
  {
    value: "Nichel",
    label: "Nichel",
  },
  {
    value: "Proteina LTP",
    label: "Proteina LTP",
  },
];

const FormSegnalazione = () => {
  let navigate = useNavigate();

  const { changeTitle } = useTitleContext();
  useEffect(() => {
    changeTitle("Segnalazione di un locale");
  }, []);

  const [nomeLocale, setNomeLocale] = useState("");
  const [via, setVia] = useState("");
  const [citta, setCitta] = useState("");
  const [cap, setCap] = useState("");
  const [cucina, setCucina] = useState("");
  const [allergene, setAllergene] = useState("");
  const [errors, setErrors] = useState([]);

  /**
   * Questa funzione colleziona tutte le variabili di stato del form
   * e se non ci sono errori invoca il metodo addNewRestaurant dell'API
   */
   const segnalazioneRistorante = async () => {
    setErrors([]);
    let errs = [];
    const risto = {
      nomeLocale: nomeLocale,
      via: via,
      citta: citta,
      cap: cap,
      cucina: cucina,
      allergene: allergene,
    };

    if (!risto.nomeLocale) errs.push("È obbligatorio inserire il nome del locale");

    if (!risto.via) errs.push("È obbligatorio inserire la via del locale");

    if (!risto.citta) errs.push("È obbligatorio inserire la citta del locale");

    if (!risto.cap) errs.push("È obbligatorio inserire il CAP del locale");

    if (!risto.cucina) errs.push("È obbligatorio inserire la cucina del locale");

    if (!risto.allergene) errs.push("È obbligatorio inserire l'allergene a cui il locale pone attenzione");

    if (errs.length) {
      setErrors(errs);
      return;
    }

    console.log(risto)
    await addNewRestaurant(risto);
    window.location.href = "/conferma";
  };


  return (
    <div sx={{ bgcolor: "#FAF4F4" }}>
      {localStorage.getItem("token") === null ? (
        <div>
          <Box maxWidth="md" justifyContent="center" margin="auto">
            <Card sx={{ marginBottom: 1 }}>
              <List>
                <ListItem>
                  <ListItemText primary="Registrati o effettua il login e riprova!" />
                </ListItem>
              </List>

              <Typography m={2}>
                Se non sei ancora registrato sulla piattaforma Allergenz,
                iscriviti ora per non perderti i vantaggi riservati alla nostra
                community: potrai essere d'aiuto ad altre persone, mettere like
                per suggerire i locali che preferisci, accedere all'area
                personale...e tanto altro ancora! <br />
              </Typography>
            </Card>

            <ListItem>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <GoBackButton mt={2} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ color: "white", fontWeight: "bold" }}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Effettua il login
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </Box>
        </div>
      ) : (
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
            <Box>
              <List >
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
                    onChange={(e) => setNomeLocale(e.target.value)}
                    name="NomeLocale"
                    id="NomeLocale"
                    label="Nome del locale"
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    color="secondary"
                    fullWidth
                    onChange={(e) => setVia(e.target.value)}
                    name="Via"
                    id="Via"
                    label="Via..."
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    color="secondary"
                    fullWidth
                    onChange={(e) => setCitta(e.target.value)}
                    name="Citta"
                    id="Citta"
                    label="Città"
                  />
                </ListItem>
                <ListItem>
                  <TextField 
                    color="secondary" 
                    fullWidth 
                    onChange={(e) => setCap(e.target.value)}
                    name="CAP"
                    id="CAP" 
                    label="CAP" 
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    color="secondary"
                    fullWidth
                    select
                    helperText="Selezionare un tipo di cucina"
                    name="Cucina"
                    id="Cucina"
                    label="Cucina"
                  >
                    {cucine.map((option) => (
                      <MenuItem key={option.value} value={option.value} onClick={()=> setCucina(option.value)}>
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
                    name="Allergene"
                    id="Allergene"
                    label="Allergene"
                  >
                    {allergeni.map((option) => (
                      <MenuItem key={option.value} value={option.value} onClick={()=> setAllergene(option.value)}>
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

                    {errors.length > 0 ? (
                      <Alert severity="error">
                        <Typography>
                          Attenzione correggere i seguenti errori:
                          <ul>
                            {errors.map((err) => (
                              <li>{err}</li>
                            ))}
                          </ul>
                        </Typography>
                      </Alert>
                    ) : null}

                    <Grid item xs={12} md={6}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        sx={{ color: "white", fontWeight: "bold" }}
                        onClick={() => segnalazioneRistorante()}
                      >
                        Conferma
                      </Button>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Box>
            
           
            
          </Paper>
        </Grid>
        <Grid item xs={12} md={2} lg={3} />
      </Grid>
      )}
    </div>
  );
};

export default FormSegnalazione;
